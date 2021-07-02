import { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectContactById } from "../../../state/contacts/contacts.selectors";
import { getContactById } from "../../../state/contacts/contacts.action-creators";
import { createLoadingSelector } from "../../../state/api/selectors";
import { contactsReducer } from "../../../state/contacts/contacts.reducer";

type ContactIdParam = { id: string };

type ContactDetailsRouterProps = RouteComponentProps<ContactIdParam>;

const ContactShowV2: React.FC<ContactDetailsRouterProps> = ({ match }) => {
  const contact: any = useSelector<any>((state) => state.oneContact.contact);
  //   const loadingSelect = createLoadingSelector(["get_contact"]);
  const loading = useSelector<any>((state) => state.isFetching["get_contact"]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactById(match.params.id));
  }, []);

  return (
    <>
      <h1>Oyo e'a v2</h1>
      {loading && <div>Chargement...</div>}
      {contact && (
        <>
          <h2>
            {contact.first_name} {contact.last_name}
          </h2>
          <h3>{contact.position}</h3>
          <p>
            Email : <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
          <p>
            Téléphone :{" "}
            <a href={`tel:${contact.phone_number}`}>{contact.phone_number}</a>
          </p>
          <p>Adresse : {contact.work_address}</p>
        </>
      )}
    </>
  );
};

export default ContactShowV2;
