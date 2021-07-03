import React, { useEffect } from "react";
import ContactsCollection from "../../../components/contact/contacts-collection/contacts-collection";
import "./style.scss";
import { getContacts } from "../../../state/contacts/contacts.action-creators";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../../components/shared/loader/loader";
import { ActionTypes } from "../../../state/contacts/contacts.action-types";
import { Error } from "../../../components/shared/error/error";
import {
  selectContacts,
  selectContactsError,
  selectContactsLoading,
} from "../../../state/contacts/contacts.selectors";

const ContactsList: React.FC = () => {
  const dispatch = useDispatch();

  // TODO create a reusable hook thats takes : actor creators,state name as a string,actiontype
  // const {data,loading,error}=useContacts(getContacts,"contacts","get_contact")
  // TODO : As this logic is not very different from the one in show page, can we create a high order component??
  const contacts: any = useSelector<any>(selectContacts);
  const loading: any = useSelector<any>((state) =>
    selectContactsLoading(ActionTypes.GET_CONTACTS)(state)
  );

  const error: any = useSelector<any>((state) =>
    selectContactsError(ActionTypes.GET_CONTACTS)(state)
  );

  const deleteContact = (id: string) => {
    console.log("Delete contact of id : ", id);
  };

  useEffect(() => {
    dispatch(getContacts());
  }, []);
  return (
    <>
      <h1>Liste des contacts</h1>
      {loading && <Loader />}
      {error && <Error message={error} />}
      {contacts && (
        <ContactsCollection deleteContact={deleteContact} contacts={contacts} />
      )}
    </>
  );
};

export default ContactsList;
