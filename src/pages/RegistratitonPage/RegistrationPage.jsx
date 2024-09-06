import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "../../components/ContactForm/contactForm.module.css";
import { apiRegister } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectorsAuthError } from "../../redux/auth/selectors";

function RegistratitonPage() {
  const dispatch = useDispatch();
  const initialValues = { name: "", email: "", password: "" };

  const error = useSelector(selectorsAuthError);

  const RegistratitonSchema = Yup.object().shape({
    name: Yup.string()
      .required(" Name is required")
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    password: Yup.string()
      .required("password is required")
      .min(8, "Too Short!")
      .max(50, "Too Long!"),
    email: Yup.string()
      .email("Wrong email!")
      .required("password is required")
      .min(8, "Too Short!")
      .max(50, "Too Long!"),
  });

  function handleSubmit(values, actions) {
    dispatch(apiRegister(values));

    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegistratitonSchema}
    >
      <Form className={css.form}>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" id="name" className={css.field} />
        <ErrorMessage name="name" className={css.error} />

        <label htmlFor="email" className={css.label}>
          email
        </label>
        <Field type="text" name="email" id="email" className={css.field} />
        <ErrorMessage name="email" className={css.error} />

        <label htmlFor="password" className={css.label}>
          password
        </label>
        <Field
          type="password"
          name="password"
          id="password"
          className={css.field}
        />
        <ErrorMessage name="password" className={css.error} />

        <button type="submit" className={css.btnSubmit}>
          Sign Up
        </button>
        {error && <p>Ooops someting went wrong{error}</p>}
      </Form>
    </Formik>
  );
}

export default RegistratitonPage;
