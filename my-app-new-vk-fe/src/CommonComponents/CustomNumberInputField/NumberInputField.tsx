// src/components/NumberInputField.tsx
import React, { useState, ChangeEvent, FocusEvent } from "react";
import "./NumberInputField.css";

interface NumberInputFieldProps {
  id?: string;
  name: string;
  label?: string | React.ReactNode;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  error?: string | null;
  disabled?: boolean;
  className?: string;
  defaultValue?: string | number;
  min?: number;
}

const NumberInputField: React.FC<NumberInputFieldProps> = ({
  id,
  name,
  label = "",
  placeholder = "",
  onChange = null,
  onBlur = () => {},
  error = null,
  disabled = false,
  className = "",
  defaultValue = "",
  min = 1,
}) => {
  const [value, setValue] = useState<string | number>(defaultValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    // Allow empty input
    if (val === "") {
      setValue("");
      if (onChange) onChange(e);
      return;
    }

    const numericVal = Number(val);
    if (!isNaN(numericVal) && numericVal >= min) {
      setValue(val);
      if (onChange) onChange(e);
    }
  };

  return (
    <div className={`number-input-field ${className}`}>
      {label && (
        <label htmlFor={id || name} className="input-label">
          {label}
        </label>
      )}
      <input
        id={id || name}
        name={name}
        type="number"
        value={value}
        min={min}
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

export default NumberInputField;
