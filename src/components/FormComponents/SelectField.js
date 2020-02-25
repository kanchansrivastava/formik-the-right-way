import React from "react";
import { useField } from "formik";

const SelectField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props}>
        {props.children}
      </select>
      {meta.touched && meta.error ? (
        <div className="error" style={{ color: "red" }}>
          {" "}
          {meta.error}
        </div>
      ) : null}
      <br />
    </div>
  );
};

export default SelectField;
