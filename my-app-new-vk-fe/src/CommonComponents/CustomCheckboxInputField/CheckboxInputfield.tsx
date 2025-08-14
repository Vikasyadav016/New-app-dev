// src/components/CheckboxInputField.tsx
import React, { useState, ChangeEvent } from "react";
import "./CheckboxInputField.css";

interface CheckboxInputFieldProps {
  id?: string;
  name: string;
  label?: string | React.ReactNode;
  defaultChecked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  className?: string;
}

const CheckboxInputField: React.FC<CheckboxInputFieldProps> = ({
  id,
  name,
  label,
  defaultChecked = false,
  onChange,
  disabled = false,
  error = "",
  className = "",
}) => {
  const [checked, setChecked] = useState<boolean>(defaultChecked);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    if (onChange) onChange(e);
  };

  return (
    <div className={`checkbox-input-field ${className}`}>
      <input
        id={id || name}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
      />
      {label && <label htmlFor={id || name}>{label}</label>}
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default CheckboxInputField;
