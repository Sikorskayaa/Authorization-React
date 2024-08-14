import css from "./contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();

  function onDelete(userId) {
    dispatch(deleteContact(userId));
  }

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
