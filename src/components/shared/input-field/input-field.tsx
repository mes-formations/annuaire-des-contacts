import React from "react";
import "./style.scss";
interface InputFieldProps {
  id?: string;
  label: string;
  type: string;
  placeholder?: string;
  name: string;
  value: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  name,
  value = "",
  onChange,
  id,
  label,
}) => {
  return (
    <div className="form-field">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={"form-input"}
        id={id}
      />
    </div>
  );
};

export default InputField;
