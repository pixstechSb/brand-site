import React from 'react';
import '../style.css';


 interface FormFieldProps {
    label: string;
    type?: string;
    isRequired?: boolean;
  }
 const FormField: React.FC<FormFieldProps> = ({ label, type = "text", isRequired = false }) => {
  const id = label.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className={"formField"}>
      <div className={"fieldIndicator"} />
      <label htmlFor={id} className={"fieldLabel"}>
        {label}
        {isRequired && <span className="visually-hidden">(required)</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className={"fieldInput"}
        required={isRequired}
        aria-required={isRequired}
      />
    </div>
  );
};

export default FormField;