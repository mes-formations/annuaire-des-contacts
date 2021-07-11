import { useEffect } from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { ActionTypes } from "../../../state/contacts/contacts.action-types";
import { Error } from "../../../components/shared/error/error";
import {
  selectContact,
  selectContactsError,
  selectContactsLoading,
} from "../../../state/contacts/contacts.selectors";
import { useTypedSelector } from "../../../hook/use-typed-selector";
import { useActions } from "../../../hook/use-actions";
import { LoaderText } from "../../../components/shared/loader-text/loader-text";
import { PAGES } from "../../../configs/pages";

type ContactIdParam = { id: string };

type ContactDetailsRouterProps = RouteComponentProps<ContactIdParam>;

const ContactShow: React.FC<ContactDetailsRouterProps> = ({ match }) => {
  const contact = useTypedSelector(selectContact);

  const loading = useTypedSelector((state) =>
    selectContactsLoading(ActionTypes.GET_CONTACT)(state)
  );

  const deletionLoading = useTypedSelector((state) =>
    selectContactsLoading(ActionTypes.DELETE_CONTACT)(state)
  );

  const error = useTypedSelector((state) =>
    selectContactsError(ActionTypes.GET_CONTACT)(state)
  );

  const { getContactByID, deleteContact } = useActions();

  useEffect(() => {
    getContactByID(match.params.id);
  }, []);

  return (
    <>
      <h1>Détails de contact</h1>
      {loading && (
        <LoaderText
          action={ActionTypes.GET_CONTACT}
          message="Chargement en cours..."
        />
      )}
      {deletionLoading && (
        <LoaderText
          action={ActionTypes.DELETE_CONTACT}
          message="Suppression en cours..."
        />
      )}
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
          <Link
            className="btn btn--primary"
            to={`${PAGES.CONTACTS_LIST}/${match.params.id}/edit`}
          >
            Modifier
          </Link>
          <button
            className="btn btn--danger"
            onClick={() => deleteContact(match.params.id)}
          >
            Supprimer
          </button>
        </>
      )}
    </>
  );
};

export default ContactShow;
