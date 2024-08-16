import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact } from "./redux/contactsSlice";
import { changeFilter } from "./redux/filtersSlice";

function App() {
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
