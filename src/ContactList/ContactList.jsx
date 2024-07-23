import Contact from "../Contact/Contact";
import css from "./contactList.module.css";

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.wrapp}>
      {contacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
