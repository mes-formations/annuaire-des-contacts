import { IContact } from "../../../interfaces/i-contact";
import Form from "../../../components/contact/contact-form/contact-form";
import FormWrapper from "../../../components/contact/contact-form/Formwrapper";
import { useActions } from "../../../hook/use-actions";
import { useTypedSelector } from "../../../hook/use-typed-selector";
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
  const formData = useTypedSelector((state) => state.form);
  const { createContact } = useActions();
  //   const [status, setStatus] = useState<IStatusMessage>({
  //     style: "",
  //     message: "",
  //   });
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createContact(formData);
  };

  return (
    <FormWrapper>
      <h1 className="title">Créer un nouveau contact</h1>
      <Form
        // isLoading={isLoading}
        isUpdate={false}
        contact={formData}
        buttonLabel={"Créer"}
        submitForm={submitForm}
        // status={status}
      />
    </FormWrapper>
  );
};

export default CreateContact;
