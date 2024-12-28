import React from "react";
import "./InputField.css";

const InputField = ({
  name,
  value,
  onChange,
  onKeyDown,
  placeholder,
  maxLength,
}) => {
  return (
    <input
      name={name}
      value={value}
      className="input-field"
      onChange={onChange}
      onKeyDown={onKeyDown}
      placeholder={placeholder}
      maxLength={maxLength}
    />
  );
};

export default InputField;
