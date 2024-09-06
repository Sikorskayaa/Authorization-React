import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./contactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

function ContactForm() {
  const dispatch = useDispatch();
  const initialValues = { name: "", number: "" };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    number: Yup.string()
      .required("Number is required")
      .min(3, "Too Short!")
      .max(50, "Too Long!"),
  });

  function handleSubmit(contact, actions) {
    dispatch(addContact(contact));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor="name">Name</label>
        <Field type="text" name="name" id="name" className={css.field} />
        <ErrorMessage name="name" className={css.error} />

        <label htmlFor="number" className={css.label}>
          Number
        </label>
        <Field type="text" name="number" id="number" className={css.field} />
        <ErrorMessage name="number" className={css.error} />

        <button type="submit" className={css.btnSubmit}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
