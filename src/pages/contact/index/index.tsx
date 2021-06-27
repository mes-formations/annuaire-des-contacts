import React, { useState, useEffect } from "react";
import ContactsCollection from "../../../components/contact/contacts-collection/contacts-collection";
import "./style.scss";
import { getContacts } from "../../../state/contacts/contacts.action-creators";
import { useDispatch, useSelector } from "react-redux";

const ContactsList: React.FC = () => {
  const dispatch = useDispatch();
  const contacts: any = useSelector<any>((state) => state.contacts);
  const deleteContact = (id: string) => {
    console.log("Delete contact of id : ", id);
  };

  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <>
      <h1>Liste des contacts</h1>
      <ContactsCollection
        deleteContact={deleteContact}
        contacts={contacts.contacts}
      />
    </>
  );
};

export default ContactsList;
