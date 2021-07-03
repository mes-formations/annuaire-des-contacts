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
  selectContactsLoading,
} from "../../../state/contacts/contacts.selectors";

const ContactsList: React.FC = () => {
  const dispatch = useDispatch();
  const contacts: any = useSelector<any>(selectContacts);
  const loading: any = useSelector<any>((state) =>
    selectContactsLoading(ActionTypes.GET_CONTACTS)(state)
  );

  console.log("Loading : ", loading);

  const error: any = useSelector<any>(() =>
    selectContactsLoading(ActionTypes.GET_CONTACT)
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
