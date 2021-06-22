import React, { useState, useEffect } from "react";
import { IContact } from "../../../interfaces/i-contact";
import ContactsCollection from "../../../components/contact/contacts-collection/contacts-collection";
import contactApi from "../../../configs/contact.api";

const ContactsList: React.FC = () => {
  const [contacts, setContacts] = useState<IContact[]>([]);
  async function fetchContacts() {
    const { data } = await contactApi.get<IContact[]>("/").then((res) => res);
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

export default ContactsList;
