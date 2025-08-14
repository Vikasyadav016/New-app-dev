// src/components/WithoutCheckBoxNormalDropdown.tsx
import React, { useState, useRef, useEffect } from "react";
import "./WithoutCheckBoxNormalDropdown.css";

interface Props {
  options: string[];
  selectedOption?: string;
  onChange?: (option: string) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const DropdownField: React.FC<Props> = ({
  options,
  selectedOption = "",
  onChange,
  placeholder = "Select an option",
  disabled = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>(selectedOption);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleOptionSelect = (option: string) => {
    setSelected(option);
    if (onChange) onChange(option);
    setIsOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`custom-dropdown-single ${className} ${
        disabled ? "disabled" : ""
      }`}
      ref={dropdownRef}
    >
      <div className="dropdown-header" onClick={toggleDropdown}>
        <div className="selected-text">{selected || placeholder}</div>
        <div className="dropdown-arrow">{isOpen ? "▲" : "▼"}</div>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
              key={option}
              className={`dropdown-option ${
                option === selected ? "selected" : ""
              }`}
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownField;
