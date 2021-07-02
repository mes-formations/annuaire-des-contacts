import React, { useEffect } from "react";
import ContactsCollection from "../../../components/contact/contacts-collection/contacts-collection";
import "./style.scss";
import { getContacts } from "../../../state/contacts/contacts.action-creators";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../../../components/shared/loader/loader";
import { ActionTypes } from "../../../state/contacts/contacts.action-types";

const ContactsList: React.FC = () => {
  const dispatch = useDispatch();
  const contacts: any = useSelector<any>((state) => state.contacts.contacts);
  const loading: any = useSelector<any>(
    (state) => state.apiLoading[ActionTypes.GET_CONTACTS]
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
      {contacts && (
        <ContactsCollection deleteContact={deleteContact} contacts={contacts} />
      )}
    </>
  );
};

export default ContactsList;
