const ContactShow: React.FC = (props: any) => {
  return (
    <h1>
      Bienvenu dans la page détails de contact, mon id est :{" "}
      {props.match.params.id}
    </h1>
  );
};

export default ContactShow;
