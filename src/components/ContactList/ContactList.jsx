import Contact from "../Contact/Contact";
import css from "./contactList.module.css";
import { useSelector } from "react-redux";

function ContactList() {
  const selectContacts = useSelector(
    (state) => state.contactbox.contacts.items
  );

  const selectNameFilter = useSelector((state) => state.filterbox.filters.name);
  const filteredContacts = selectContacts.filter((contact) =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
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
