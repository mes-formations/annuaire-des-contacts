import React, { useState, useEffect } from "react";
import axios from "axios";
import ContactsCollection from "./contact/contacts-collection/contacts-collection.component"
import { IContact } from "../interfaces/i-contact";

const App: React.FC = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  async function fetchContacts() {
    const { data } = await axios
      .get<IContact[]>("http://localhost:3333/contacts")
      .then((res) => res);
    return data;
  }
  const deleteContact = (id: string) => {
    const newState = contacts.filter((contact) => contact.id !== id);
    setContacts(newState);
  };

  useEffect(() => {
    (async () => {
      const contacts = await fetchContacts().then((data) => data);
      setContacts(contacts);
    })();
  }, []);
  return (
    <ContactsCollection deleteContact={deleteContact} contacts={contacts} />
  );
};

export default App;
