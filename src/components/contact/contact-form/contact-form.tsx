import { useActions } from "../../../hook/use-actions";
import { IContact } from "../../../interfaces/i-contact";
import InputField from "../../shared/input-field/input-field";
import "./style.scss";

interface FormProps {
  isUpdate: boolean;
  contact: IContact;
  submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonLabel: string;
  // isLoading: boolean;
}

const Form: React.FC<FormProps> = ({
  contact,
  // handleInput,
  submitForm,
  buttonLabel,
  // isLoading,
}) => {
  const { updateContactForm } = useActions();
  const handleFormInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    updateContactForm(e);
  };

  // TODO : Put handle form in the form component it self
  return (
    <div className="form-wrapper">
      <form onSubmit={submitForm} action="">
        <InputField
          label="Prénom"
          id="first_name"
          type="text"
          name="first_name"
          value={contact ? contact["first_name"] : ""}
          onChange={handleFormInput}
          required
        />
        <InputField
          label="Nom"
          id="last_name"
          type="text"
          name="last_name"
          value={contact ? contact["last_name"] : ""}
          onChange={handleFormInput}
          required
        />
        <InputField
          label="Email"
          id="email"
          type="text"
          name="email"
          value={contact ? contact["email"] : ""}
          onChange={handleFormInput}
          required
        />
        <InputField
          label="Numéro de contact"
          id="telephone"
          type="text"
          name="phone_number"
          value={contact ? contact["phone_number"] : ""}
          onChange={handleFormInput}
          required
        />
        <InputField
          label="Poste"
          id="position"
          type="text"
          name="position"
          value={contact ? contact["position"] : ""}
          onChange={handleFormInput}
          required
        />
        <InputField
          label="Adresse"
          id="address"
          type="text"
          name="work_address"
          value={contact ? contact["work_address"] : ""}
          onChange={handleFormInput}
          required
        />

        <br />
        <button className="btn btn-create" type="submit">
          {/* {isLoading ? (
            <>
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Envoi en cours...
            </>
          ) : ( */}
          Créer contact
          {/* )} */}
        </button>
      </form>
    </div>
  );
};

export default Form;
