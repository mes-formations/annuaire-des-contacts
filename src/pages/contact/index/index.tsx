import React, { useEffect } from "react";
import ContactsCollection from "../../../components/contact/contacts-collection/contacts-collection";
import "./style.scss";
import { ActionTypes } from "../../../state/contacts/contacts.action-types";
import { Error } from "../../../components/shared/error/error";
import {
  selectContacts,
  selectContactsError,
  selectContactsLoading,
} from "../../../state/contacts/contacts.selectors";
import { useTypedSelector } from "../../../hook/use-typed-selector";
import { useActions } from "../../../hook/use-actions";
import { LoaderText } from "../../../components/shared/loader-text/loader-text";

const ContactsList: React.FC = () => {
  const { getContacts } = useActions();
  // TODO create a reusable hook thats takes : actor creators,state name as a string,actiontype
  // const {data,loading,error}=useContacts(getContacts,"contacts","get_contact")
  // TODO : As this logic is not very different from the one in show page, can we create a high order component??
  const contacts = useTypedSelector(selectContacts);
  const loading = useTypedSelector((state) =>
    selectContactsLoading(ActionTypes.GET_CONTACTS)(state)
  );

  const error = useTypedSelector((state) =>
    selectContactsError(ActionTypes.GET_CONTACTS)(state)
  );

  const deleteContact = (id: string) => {
    console.log("Delete contact of id : ", id);
  };

  useEffect(() => {
    getContacts();
  }, []);
  return (
    <>
      <h1>Liste des contacts</h1>
      <LoaderText
        action={ActionTypes.DELETE_CONTACT}
        message="Suppression en cours"
      />
      {loading && (
        <LoaderText
          action={ActionTypes.GET_CONTACTS}
          message="Recupération des contacts"
        />
      )}
      {error && <Error message={error} />}
      {contacts && (
        <ContactsCollection deleteContact={deleteContact} contacts={contacts} />
      )}
    </>
  );
};

export default ContactsList;
