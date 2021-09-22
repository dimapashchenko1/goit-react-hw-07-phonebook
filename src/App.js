import { useState, useEffect } from "react";
import ContactList from "./components/ContactLIst/ContactList";
import { v4 as uuidv4 } from "uuid";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import css from "./App.css";
import "../node_modules/modern-normalize/modern-normalize.css";

export default function App() {
  const [contacts, setContacts] = useState([
    { id: uuidv4(), name: "Rosie Simpson", number: "459-12-56" },
    { id: uuidv4(), name: "Hermione Kline", number: "443-89-12" },
    { id: uuidv4(), name: "Eden Clements", number: "645-17-79" },
    { id: uuidv4(), name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts) {
      setContacts(contacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    let duplicate = contacts.find((contact) => contact.name === name);

    if (duplicate) {
      alert(` Контакт '${name}' уже существует!`);
    } else {
      const contact = {
        id: uuidv4(),
        name,
        number,
      };

      setContacts((prevState) => [contact, ...prevState]);
    }
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = (contactId) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== contactId)
    );
  };

  return (
    <>
      <h1 className={css}>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2 className={css}>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </>
  );
}
