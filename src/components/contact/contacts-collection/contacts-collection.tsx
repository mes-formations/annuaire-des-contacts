import React from "react";
import { IContact } from "../../../interfaces/i-contact";
import ContactItem from "../contact-item/contact-item.component";
import "./styles.scss";

interface ContactsCollectionProps {
  contacts: IContact[];
  deleteContact: (id: string) => void;
}

const ContactsCollection: React.FC<ContactsCollectionProps> = ({
  contacts,
  deleteContact,
}) => {
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
      <tbody>
        {contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
            deleteContact={deleteContact}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ContactsCollection;