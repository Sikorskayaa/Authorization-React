import Contact from "../Contact/Contact";
import css from "./contactList.module.css";
import { useSelector } from "react-redux";
import { selectFilterName } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

function ContactList() {
  const contacts = useSelector(selectContacts);

  const filters = useSelector(selectFilterName);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

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
