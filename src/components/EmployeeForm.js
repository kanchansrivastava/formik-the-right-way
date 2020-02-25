import React from "react";
import TextField from "./FormComponents/TextField";
// import formWrapper from "./FormHandler/index";
import { useField, useFormik, Formik, Form } from "formik";
import * as Yup from "yup";

// And now we can use these
const EmployeeForm = () => {
  const initialValues = {
    name: "",
    id: "",
    department: "",
    dateOfJoining: "",
    gender: "",
    isContractor: "",
    age: ""
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    id: Yup.number()
      .max(20, "Must be 20 characters or less")
      .required("Required"),
    department: Yup.string()
      .oneOf(
        ["IT Admin", "Software Development", "Software Testing", "UI/UX"],
        "Invalid Job Type"
      )
      .required("Required"),
    dateOfJoining: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    isContractor: Yup.bool().required("Required"),
    age: Yup.number()
      .max(20, "Must be 20 characters or less")
      .required("Required")
  });

  const formHandler = useFormik({
    initialValues: initialValues,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: validationSchema
  });

  return (
    <div>
      <h1>Employee Form!</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={values => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <TextField
            label="Employee Name"
            name="name"
            type="text"
            // onChange={formHandler.handleChange}
            placeholder="Sample Name"
          />
          <TextField
            label="Employee Id"
            name="id"
            type="text"
            // onChange={formHandler.handleChange}
            placeholder="123455"
            disabled={true}
          />
          <TextField
            label="Age"
            name="age"
            type="number"
            placeholder="28"
            // onChange={formHandler.handleChange}
          />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default EmployeeForm;
