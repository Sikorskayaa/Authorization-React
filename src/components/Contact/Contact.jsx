import css from "./contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

function Contact({ data: { name, number, id } }) {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <p>Number: {number}</p>
      </div>
      <button
        type="button"
        className={css.btn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </>
  );
}

export default Contact;
