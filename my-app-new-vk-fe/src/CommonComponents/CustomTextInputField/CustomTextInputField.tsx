// src/components/TextInputField.tsx
import React, { useState, ChangeEvent, FocusEvent } from "react";
import "./TextInputField.css";

interface TextInputFieldProps {
  id?: string;
  name: string;
  label?: string | React.ReactNode;
  placeholder?: string;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  error?: string | null;
  disabled?: boolean;
  className?: string;
  defaultValue?: string | number;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
  id,
  name,
  label = "",
  placeholder = "",
  type = "text",
  onChange = null,
  onBlur = () => {},
  error = null,
  disabled = false,
  className = "",
  defaultValue = "",
}) => {
  const [value, setValue] = useState<string | number>(defaultValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={`custom-text-input-field ${className}`}>
      {label && (
        <label htmlFor={id || name} className="input-label">
          {label}
        </label>
      )}
      <input
        id={id || name}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={onBlur}
        disabled={disabled}
        className={`input-element ${error ? "input-error" : ""}`}
      />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default TextInputField;
