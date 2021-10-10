import ContactList from "./components/ContactLIst/ContactList";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import css from "./App.css";

export default function App() {
  return (
    <>
      <h1 className={css}>Phonebook</h1>
      <Form />
      <h2 className={css}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
