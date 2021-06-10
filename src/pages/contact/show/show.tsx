import { RouteComponentProps } from "react-router-dom";

type ContactIdParam = { id: string };

type ContactDetailsRouterProps = RouteComponentProps<ContactIdParam>;

const ContactShow: React.FC<ContactDetailsRouterProps> = ({ match }) => {
  return (
    <h1>
      Bienvenu dans la page détails de contact, mon id est : {match.params.id}
    </h1>
  );
};

export default ContactShow;
