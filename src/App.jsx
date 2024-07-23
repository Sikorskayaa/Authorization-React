import { useState } from "react";
import ContactList from "./ContactList/ContactList";
import contact from "./contact.json";
import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";

function App() {
  const [contacts, setContacts] = useState(contact);
  const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  function addContact(newContact) {
    setContacts([...contacts, newContact]);
  }
  function handleFilterChange(e) {
    setFilter(e.target.value);
  }

  function deleteContact(id) {
    setContacts(contacts.filter((contact) => contact.id !== id));
  }
  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={filter} onFilter={handleFilterChange} />
      <ContactList contacts={visibleContact} onDelete={deleteContact} />
    </>
  );
}

export default App;
