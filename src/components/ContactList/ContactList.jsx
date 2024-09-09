import Contact from "../Contact/Contact";
import css from "./contactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.wrapp}>
      {filteredContacts.map((contact) => (
        <li key={contact.id} className={css.item}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
