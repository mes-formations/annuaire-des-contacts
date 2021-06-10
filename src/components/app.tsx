import React from "react";
import axios from "axios";
import ContactsCollection from "./contacts-collection/contacts-collection.component";
import { IContact } from "../interfaces/i-contact";

const App: React.FC = () => {
  const [contacts, setContacts] = React.useState<IContact[]>([]);
  // Mise en place du typage static
  async function fetchContacts() {
    const contacts = await axios
      .get<IContact[]>("http://localhost:3333/contacts")
      .then((res) => res.data);
    return contacts;
  }
  const deleteContact = (id: string) => {
    const newState = contacts.filter((contact) => contact.id !== id);
    setContacts(newState);
  };

  React.useEffect(() => {
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
