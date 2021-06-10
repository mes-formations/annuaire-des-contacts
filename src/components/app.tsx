import React from "react";
import axios from "axios";
import ContactsCollection from "./contacts-collection/contacts-collection.component";

interface IContact {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  position: string;
  work_address: string;
}

const App: React.FC = () => {
  const contactsState = React.useState<IContact[]>([]);
  // Mise en place du typage static
  async function fetchContacts() {
    const contacts = await axios
      .get<IContact[]>("http://localhost:3333/contacts")
      .then((res) => res.data);
    return contacts;
  }
  const deleteContact = (index: number) => {
    const newState = [...contactsState[0]];
    newState.splice(index, 1);
    contactsState[1](newState);
  };

  React.useEffect(() => {
    (async () => {
      const contacts = await fetchContacts().then((data) => data);
      contactsState[1](contacts);
    })();
  }, []);
  return <ContactsCollection />;
};

export default App;
