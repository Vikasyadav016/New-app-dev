
import React from "react";
import TextInputField from "../CommonComponents/CustomTextInputField/CustomTextInputField";
import NumberInputField from "../CommonComponents/CustomNumberInputField/NumberInputField";
import CheckboxInputField from "../CommonComponents/CustomCheckboxInputField/CheckboxInputfield";
import DropdownField from "../CommonComponents/CustomDropdownField/WithoutCheckboxField/DropDownWithoutCheckbox";
import MultipleOptionSelection from "../CommonComponents/CustomDropdownField/WithCheckBox/DropDownFieldWithCheckbox";

type FieldType = "text" | "number" | "checkbox" | "dropdown" | "multi-dropdown";

interface MasterControllerProps {
  type: FieldType;
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  defaultValue?: string | number | string[] | boolean;
  length?: number;
  options?: string[]; 
  onChange?: (value: any) => void;
}

const MasterController: React.FC<MasterControllerProps> = ({
  type,
  name,
  label,
  placeholder = "",
  required = false,
  disabled = false,
  error = "",
  className = "",
  defaultValue = "",
  length,
  options = [],
  onChange,
}) => {
  const commonProps = {
    name,
    label: required ? `${label} *` : label,
    placeholder,
    disabled,
    error,
    className,
    onChange,
  };

  switch (type) {
    case "text":
      return (
        <TextInputField
          {...commonProps}
          type="text"
          defaultValue={defaultValue as string}
        />
      );

    case "number":
      return (
        <NumberInputField
          {...commonProps}
          defaultValue={defaultValue as string | number}
        />
      );

    case "checkbox":
      return (
        <CheckboxInputField
          {...commonProps}
          defaultChecked={defaultValue as boolean}
        />
      );

    case "dropdown":
      return (
        <DropdownField
          options={options}
          selectedOption={defaultValue as string}
          {...commonProps}
        />
      );

    case "multi-dropdown":
      return (
        <MultipleOptionSelection
          options={options}
          selectedOptions={defaultValue as string[]}
          {...commonProps}
        />
      );

    default:
      return <p>Invalid field type: {type}</p>;
  }
};

export default MasterController;

