// src/components/CustomDropDownWithCheckBoxForMultipleOptionSelection.tsx
import React, { useState, useRef, useEffect } from "react";
import "./CustomDropDownWithCheckBoxForMultipleOptionSelection.css";

interface Props {
  options: string[];
  selectedOptions?: string[];
  onChange?: (selected: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const MultipleOptionSelection: React.FC<Props> = ({
  options,
  selectedOptions = [],
  onChange,
  placeholder = "Select options",
  disabled = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>(selectedOptions);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleOptionChange = (option: string) => {
    const newSelected = selected.includes(option)
      ? selected.filter((item) => item !== option)
      : [...selected, option];

    setSelected(newSelected);
    if (onChange) onChange(newSelected);
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
      className={`custom-dropdown-multiselect ${className} ${
        disabled ? "disabled" : ""
      }`}
      ref={dropdownRef}
    >
      <div className="dropdown-header" onClick={toggleDropdown}>
        <div className="selected-text">
          {selected.length > 0 ? selected.join(", ") : placeholder}
        </div>
        <div className="dropdown-arrow">{isOpen ? "▲" : "▼"}</div>
      </div>

      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <label key={option} className="dropdown-option">
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => handleOptionChange(option)}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultipleOptionSelection;
