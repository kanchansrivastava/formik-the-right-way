import React from "react";
import { Input } from "antd";
import { useField } from "formik";
import ErrorMessage from "./ErrorMessage";
import hasValidationFailed from "./../FormHandler/validator";

const TextFieldWithValidation = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  let failedValidation = null;
  if (props.validations) {
    failedValidation = hasValidationFailed(field.value, props.validations);
  }

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Input type="text" className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? <ErrorMessage error={meta.error} /> : null}
      {failedValidation && failedValidation.errorMessage ? (
        <ErrorMessage error={failedValidation.errorMessage} />
      ) : null}
      <br />
    </div>
  );
};

export default TextFieldWithValidation;
