import React from "react";
import { Input } from "antd";
import { useField } from "formik";
import ErrorMessage  from "./ErrorMessage";
import hasValidationFailed from "./../FormHandler/validator";

const TextField = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    let failedValidation = hasValidationFailed(field.value, props.validation);
    let errorMessage = "";
    if (failedValidation && failedValidation.errorMessage)
        errorMessage = failedValidation.errorMessage;
    console.log(failedValidation);

    return (
        <div>
            <label htmlFor={props.id || props.name}>{label}</label>
            <Input type="text" className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? <ErrorMessage error={meta.error} /> : null}
            {errorMessage ? <ErrorMessage error={errorMessage} /> : null}
            <br />
        </div>
    );
};

export default TextField;
