import css from "./contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();

  function onDeleteContact(contactId) {
    dispatch(deleteContact(contactId));
  }

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
      </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </>
  );
}

export default Contact;
