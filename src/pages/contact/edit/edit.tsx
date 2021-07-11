import { useEffect } from "react";
import Form from "../../../components/contact/contact-form/contact-form";
import FormWrapper from "../../../components/contact/contact-form/Formwrapper";
import { useActions } from "../../../hook/use-actions";
import { useTypedSelector } from "../../../hook/use-typed-selector";
import { selectForm } from "../../../state/contact-form/form.select";
import {
  selectContact,
  selectContactsLoading,
} from "../../../state/contacts/contacts.selectors";
import { ActionTypes } from "../../../state/contacts/contacts.action-types";
import { ContactDetailsRouterProps } from "../../../interfaces/contact-param";

// import IStatusMessage from "../../../interfaces/IStatusMessage";

const CreateContact: React.FC<ContactDetailsRouterProps> = ({ match }) => {
  const formData = useTypedSelector(selectForm);
  const loading = useTypedSelector((state) =>
    selectContactsLoading(ActionTypes.CREATE_CONTACT)(state)
  );
  const contact = useTypedSelector(selectContact);
  const { createContact, populateEditForm, getContactByID } = useActions();
  //   const [status, setStatus] = useState<IStatusMessage>({
  //     style: "",
  //     message: "",
  //   });
  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createContact(formData);
  };

  useEffect(() => {
    getContactByID(match.params.id);
  }, []);

  //   Si le contact est mise à jour, on met à jour le formulaire
  useEffect(() => {
    populateEditForm();
  }, [contact]);

  return (
    <FormWrapper>
      <h1 className="title">Mettre à jour contact</h1>
      <Form
        loading={loading}
        isUpdate={false}
        contact={formData}
        buttonLabel={"Mettre à jour"}
        submitForm={submitForm}
        // status={status}
      />
    </FormWrapper>
  );
};

export default CreateContact;
