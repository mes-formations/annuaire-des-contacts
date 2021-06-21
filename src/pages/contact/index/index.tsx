import React, { useState, useEffect } from "react";
import { IContact } from "../../../interfaces/i-contact";
import ContactsCollection from "../../../components/contact/contacts-collection/contacts-collection.component";
import useHttpRequest from "../../../hooks/use-http-request";
import { HTTP_VERBS } from "../../../enums/methods";

const ContactsList: React.FC = () => {
  const { makeRequest: getContacts, data: contacts } = useHttpRequest({
    url: "/",
    method: HTTP_VERBS.get,
  });

  const { makeRequest: deleteContact } = useHttpRequest({
    url: `/`,
    method: HTTP_VERBS.delete,
  });

  useEffect(() => {
    (async () => {
      getContacts();
    })();
  }, []);

  return (
    <ContactsCollection
      deleteContact={deleteContact}
      contacts={contacts ? contacts : []}
    />
  );
};

export default ContactsList;
