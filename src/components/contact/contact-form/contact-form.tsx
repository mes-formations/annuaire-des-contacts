import { useActions } from "../../../hook/use-actions";
import { IContact } from "../../../interfaces/i-contact";
import InputField from "../../shared/input-field/input-field";
import "./style.scss";

interface FormProps {
  isUpdate: boolean;
  contact: IContact;
  submitForm: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonLabel: string;
  loading: boolean | undefined;
}

const Form: React.FC<FormProps> = ({
  contact,
  submitForm,
  buttonLabel,
  loading,
}) => {
  const { updateContactForm } = useActions();
  const handleFormInput = (e: React.ChangeEvent<HTMLFormElement>): void => {
    updateContactForm(e);
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={submitForm} onChange={handleFormInput} action="">
        <InputField
          label="Prénom"
          id="first_name"
          type="text"
          name="first_name"
          value={contact ? contact["first_name"] : ""}
          required
        />
        <InputField
          label="Nom"
          id="last_name"
          type="text"
          name="last_name"
          value={contact ? contact["last_name"] : ""}
          required
        />
        <InputField
          label="Email"
          id="email"
          type="text"
          name="email"
          value={contact ? contact["email"] : ""}
          required
        />
        <InputField
          label="Numéro de contact"
          id="telephone"
          type="text"
          name="phone_number"
          value={contact ? contact["phone_number"] : ""}
          required
        />
        <InputField
          label="Poste"
          id="position"
          type="text"
          name="position"
          value={contact ? contact["position"] : ""}
          required
        />
        <InputField
          label="Adresse"
          id="address"
          type="text"
          name="work_address"
          value={contact ? contact["work_address"] : ""}
          // onChange={handleFormInput}
          required
        />

        <br />
        <button className="btn btn-create" type="submit">
          {loading ? (
            <>
              <span
                className="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Envoi en cours...
            </>
          ) : (
            buttonLabel
          )}
        </button>
      </form>
    </div>
  );
};

export default Form;
