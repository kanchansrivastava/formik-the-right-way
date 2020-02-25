import React from "react";
import { Radio } from "antd";
import { useField } from "formik";

const RadioButton = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "radio" });
  return (
    <div>
      <label className="radio">
        <Radio {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error" style={{ color: "red" }}>
          {meta.error}
        </div>
      ) : null}
      <br />
    </div>
  );
};

export default RadioButton;
