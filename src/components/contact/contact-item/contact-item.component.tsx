import React from "react";
import { Link } from "react-router-dom";
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
        <Link className="btn btn--primary" to={`/contacts/${id}`}>
          Voir
        </Link>
        <button className="btn btn--danger" onClick={() => deleteContact(id)}>
          Supprimer
        </button>
      </td>
    </tr>
  );
};

export default ContactItem;
