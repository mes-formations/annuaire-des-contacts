import { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { ActionTypes } from "../../../state/contacts/contacts.action-types";
import { Loader } from "../../../components/shared/loader/loader";
import { Error } from "../../../components/shared/error/error";
import {
  selectContact,
  selectContactsError,
  selectContactsLoading,
} from "../../../state/contacts/contacts.selectors";
import { useTypedSelector } from "../../../hook/use-typed-selector";
import { useActions } from "../../../hook/use-actions";

type ContactIdParam = { id: string };

type ContactDetailsRouterProps = RouteComponentProps<ContactIdParam>;

const ContactShow: React.FC<ContactDetailsRouterProps> = ({ match }) => {
  const contact = useTypedSelector(selectContact);

  const loading = useTypedSelector((state) =>
    selectContactsLoading(ActionTypes.GET_CONTACT)(state)
  );

  const error = useTypedSelector((state) =>
    selectContactsError(ActionTypes.GET_CONTACT)(state)
  );

  const { getContactByID } = useActions();

  useEffect(() => {
    getContactByID(match.params.id);
  }, []);

  return (
    <>
      <h1>Détails de contact</h1>
      {loading && <Loader />}
      {error && <Error message={error} />}
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

export default ContactShow;
