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
  //   const [status, setStatus] = useState<IStatusMessage>({
  //     style: "",
  //     message: "",
  //   });
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleInput = (e: any) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  return (
    <FormWrapper>
      <h1 className="title">Créer un nouveau contact</h1>
      <Form
        isLoading={isLoading}
        isUpdate={false}
        contact={contact}
        buttonLabel={"Créer"}
        submitForm={submitForm}
        handleInput={handleInput}
        // status={status}
      />
    </FormWrapper>
  );
};

export default CreateContact;
