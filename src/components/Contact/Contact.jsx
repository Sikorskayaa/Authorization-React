import css from "./contact.module.css";

function Contact({ data: { name, number, id }, onDelete }) {
  return (
    <>
      <div>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
      </div>
      <button type="button" className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </>
  );
}

export default Contact;
