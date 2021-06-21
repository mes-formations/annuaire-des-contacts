import React from "react";
import { Link, useHistory } from "react-router-dom";
import { IContact } from "../../../interfaces/i-contact";
import { HTTP_VERBS } from "../../../enums/methods";
import useHttpRequest from "../../../hooks/use-http-request";

interface ContactItemProps {
  contact: IContact;
  deleteContact: (id: string) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({
  contact: { id, last_name, first_name, email, phone_number, position },
  deleteContact,
}) => {
  // const history = useHistory();

  // const handleDelete = () => {
  //   deleteContact();
  //   history.push("/contacts"); //Ne marche pas comme souhaité
  //   //Je vais essayer d'appeler cette methode pas
  // };

  return (
    <tr key={id}>
      <td>{last_name}</td>
      <td>{first_name}</td>
      <td>{email}</td>
      <td>{position}</td>
      <td>{phone_number}</td>
      <td>
        <Link to={`/contacts/${id}`}>Voir</Link>
        <button onClick={() => deleteContact(id)}>Supprimer</button>
      </td>
    </tr>
  );
};

export default ContactItem;
