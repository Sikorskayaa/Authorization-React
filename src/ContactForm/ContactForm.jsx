import { useId } from "react";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./contactForm.module.css";

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),
  number: Yup.string()
    .required("Number is required")
    .min(3, "Too Short!")
    .max(50, "Too Long!"),
});

const initialValues = {
  username: "",
  number: "",
};

function ContactForm({ onAdd }) {
  function handleSubmit(values, actions) {
    const newContact = { id: nanoid(), ...values };

    onAdd(newContact);
    actions.resetForm();
  }

  const nameField = useId();
  const numberField = useId();

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={nameField}>Name</label>
        <Field
          type="text"
          name="username"
          id={nameField}
          className={css.field}
        />
        <ErrorMessage name="username" component="span" className={css.error} />
        <label htmlFor={numberField} className={css.label}>
          Number
        </label>
        <Field
          type="tel"
          name="number"
          id={numberField}
          className={css.field}
        />
        <ErrorMessage name="number" component="span" className={css.error} />
        <button type="submit" className={css.btnSubmit}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
