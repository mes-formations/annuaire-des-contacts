import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { IContact } from "../../../interfaces/i-contact";
import contactAPI from "../../../configs/contact.api";
import Form from "../../../components/contact/contact-form/contact-form";
// import IStatusMessage from "../../../interfaces/IStatusMessage";

const initialState: IContact = {
  first_name: "",
  last_name: "",
  email: "",
  phone_number: "",
  position: "",
  work_address: "",
};

const CreateContact: React.FC = () => {
  const history = useHistory();
  const [contact, setContact] = useState<IContact>(initialState);
  const [isLoading, setLoadingStatus] = useState<boolean>(false);
  //   const [status, setStatus] = useState<IStatusMessage>({
  //     style: "",
  //     message: "",
  //   });
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadingStatus(!isLoading);
    contactAPI
      .post("/", contact)
      .then((res) => {
        console.log(res);
        setLoadingStatus(!isLoading);
        // setStatus({
        //   ...status,
        //   style: "text-success",
        //   message: "Contact créé avec succès",
        // });
        setTimeout(() => {
          history.push("/contacts");
        }, 2000);
      })
      .catch((err) => {
        console.log(err.response.data);
        // setStatus({
        //   ...status,
        //   style: "text-danger",
        //   message: "Erreur",
        // });
      });
  };

  const handleInput = (e: any) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h1>Créer un nouveau contact</h1>
      <Form
        isLoading={isLoading}
        isUpdate={false}
        contact={contact}
        buttonLabel={"Créer"}
        submitForm={submitForm}
        handleInput={handleInput}
        // status={status}
      />
    </div>
  );
};

export default CreateContact;
