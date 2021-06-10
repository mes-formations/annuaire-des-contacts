import React from "react";

const ContactItem: React.FC = () => {
  return (
    <tr key={contact.id}>
      <td>{contact.last_name}</td>
      <td>{contact.first_name}</td>
      <td>{contact.email}</td>
      <td>{contact.position}</td>
      <td>{contact.phone_number}</td>
      <td>
        <button onClick={() => props.deleteContact(contact.id)}>
          Supprimer
        </button>
      </td>
    </tr>
  );
};

export default ContactItem;
