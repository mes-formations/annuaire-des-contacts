import React from "react";
import axios from "axios";

interface IContact {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  position: string;
  work_address: string;
}

const App: React.FC = () => {
  const contactsState = React.useState<IContact[]>([]);
  // Mise en place du typage static
  async function fetchContacts() {
    const contacts = await axios
      .get<IContact[]>("http://localhost:3333/contacts")
      .then((res) => res.data);
    return contacts;
  }
  const deleteContact = (index: number) => {
    const newState = [...contactsState[0]];
    newState.splice(index, 1);
    contactsState[1](newState);
  };

  React.useEffect(() => {
    (async () => {
      const contacts = await fetchContacts().then((data) => data);
      contactsState[1](contacts);
    })();
  }, []);
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
        {/* Expliquer code ES6 */}
        {contactsState[0].map((contact, index) => (
          <tr key={contact.id}>
            <td>{contact.last_name}</td>
            <td>{contact.first_name}</td>
            <td>{contact.email}</td>
            <td>{contact.position}</td>
            <td>{contact.phone_number}</td>
            <td>
              <button onClick={() => deleteContact(index)}>Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default App;
