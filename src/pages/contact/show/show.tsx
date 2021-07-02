import { useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getContactByID } from "../../../state/contacts/contacts.action-creators";
import { ActionTypes } from "../../../state/contacts/contacts.action-types";
import { Loader } from "../../../components/shared/loader/loader";

type ContactIdParam = { id: string };

type ContactDetailsRouterProps = RouteComponentProps<ContactIdParam>;

const ContactShow: React.FC<ContactDetailsRouterProps> = ({ match }) => {
  const { contact }: any = useSelector<any>((state) => state.contacts);
  const loading: any = useSelector<any>(
    (state) => state.apiLoading[ActionTypes.GET_CONTACT]
  );
  const error: any = useSelector<any>(
    (state) => state.apiError[ActionTypes.GET_CONTACT]
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactByID(match.params.id));
  }, []);

  return (
    <>
      <h1>Détails de contact</h1>
      {loading && <Loader />}
      {/* {error && } */}
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
