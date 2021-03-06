import React from "react";
import { Link } from "react-router-dom";
import { PAGES } from "../../../configs/pages";
import { IContactResponse } from "../../../interfaces/i-contact";

interface ContactItemProps {
  contact: IContactResponse;
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
        <Link className="btn btn--primary" to={`${PAGES.CONTACTS_LIST}/${id}`}>
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
