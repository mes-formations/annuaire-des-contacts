import React from "react";
import { IContactResponse } from "../../../interfaces/i-contact";
import ContactItem from "../contact-item/contact-item.component";
import "./styles.scss";

interface ContactsCollectionProps {
  contacts: Map<string, IContactResponse>;
  deleteContact: (id: string) => void;
}

const ContactsCollection: React.FC<ContactsCollectionProps> = ({
  contacts,
  deleteContact,
}) => {
  const addItem = () => {
    const contactItems = [];
    if (!contacts) {
      return null;
    }
    for (let [key, value] of contacts.entries()) {
      contactItems.push(
        <ContactItem key={key} contact={value} deleteContact={deleteContact} />
      );
    }
    return contactItems;
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Email</th>
          <th>Poste</th>
          <th>Numéro de téléphone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>{addItem()}</tbody>
    </table>
  );
};

export default ContactsCollection;
