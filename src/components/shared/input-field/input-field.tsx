import React from "react";

interface InputFieldProps {
  id?: string;
  label: string;
  type: string;
  placeholder?: string;
  name: string;
  value: string;
  className?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  type,
  placeholder,
  name,
  value = "",
  onChange,
  className = "form-control",
  id,
  label,
}) => {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
        id={id}
      />
    </div>
  );
};

export default InputField;
