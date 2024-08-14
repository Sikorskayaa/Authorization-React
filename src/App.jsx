import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filtersSlice";

function App() {
  const dispatch = useDispatch();

  const selectContacts = useSelector((state) => {
    return state.contactbox.contacts.items;
  });

  const selectNameFilter = useSelector((state) => {
    return state.filterbox.filters.name;
  });

  const onAddContact = (formData) => {
    const newList = {
      ...formData,
      id: nanoid(),
    };

    dispatch(addContact(newList));
  };

  const onChangeContact = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  const filteredList = selectContacts.filter((contact) =>
    contact.name.toLowerCase().includes(selectNameFilter.toLowerCase())
  );
  const onDeleteContact = (userId) => {
    dispatch(deleteContact(userId));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
