import { IContact } from "../../../interfaces/i-contact";
import Form from "../../../components/contact/contact-form/contact-form";
import FormWrapper from "../../../components/contact/contact-form/Formwrapper";
import { useActions } from "../../../hook/use-actions";
import { useTypedSelector } from "../../../hook/use-typed-selector";
import { selectForm } from "../../../state/contact-form/form.select";
import { selectContactsLoading } from "../../../state/contacts/contacts.selectors";
import { ActionTypes } from "../../../state/contacts/contacts.action-types";
// import IStatusMessage from "../../../interfaces/IStatusMessage";

const CreateContact: React.FC = () => {
  const formData = useTypedSelector(selectForm);
  const loading = useTypedSelector((state) =>
    selectContactsLoading(ActionTypes.CREATE_CONTACT)(state)
  );
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
        loading={loading}
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
