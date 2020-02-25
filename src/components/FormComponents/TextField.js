import React from "react";
import { Input } from "antd";
import { useField } from "formik";
import isValidationFailed from "./../FormHandler/validator";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  let v = isValidationFailed(field.value, {
    name: "isRequired",
    error: "I want this"
  });

  console.log(v, "&&&&&&&&");

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Input type="text" className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error" style={{ color: "red" }}>
          {meta.error}
        </div>
      ) : null}
      <br />
    </div>
  );
};

export default TextField;
