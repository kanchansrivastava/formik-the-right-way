import React from "react";
import { Input } from "antd";
import { useField } from "formik";
import ErrorMessage from "./ErrorMessage";

const TextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <Input type="text" className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? <ErrorMessage error={meta.error} /> : null}
      <br />
    </div>
  );
};

export default TextField;
