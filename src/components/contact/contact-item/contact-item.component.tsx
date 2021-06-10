import React from "react";
import { IContact } from "../../../interfaces/i-contact";

interface ContactItemProps {
  contact: IContact;
  deleteContact: (id: string) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({
  contact: { id, last_name, first_name, email, phone_number, position },
  deleteContact,
}) => {
  return (
    <tr key={id}>
      <td>{last_name}</td>
      <td>{first_name}</td>
      <td>{email}</td>
      <td>{position}</td>
      <td>{phone_number}</td>
      <td>
        <button onClick={() => deleteContact(id)}>Supprimer</button>
      </td>
    </tr>
  );
};

export default ContactItem;
