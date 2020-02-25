import React from "react";
import TextField from "./FormComponents/TextField";
import SelectField from "./FormComponents/SelectField";
import RadioButton from "./FormComponents/RadioButton";
// import formWrapper from "./FormHandler/index";
import { useFormik, Formik, Form, withFormik } from "formik";
import * as Yup from "yup";

// And now we can use these
class EmployeeForm extends React.Component {
  render() {
    return (
      <div>
        <h1>Employee Form!</h1>
        <form onSubmit={this.props.handleSubmit}>
          <TextField
            label="Employee Name"
            name="name"
            type="text"
            placeholder="Sample Name"
            value={this.props.values.name}
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            errors={this.props.errors}
            touched={this.props.touched}
          />
          <TextField
            label="Employee Id"
            name="id"
            type="text"
            placeholder="123455"
            disabled={true}
            value={this.props.values.id}
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            errors={this.props.errors}
            touched={this.props.touched}
          />
          <TextField
            label="Age"
            name="age"
            type="number"
            placeholder="28"
            value={this.props.values.age}
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            errors={this.props.errors}
            touched={this.props.touched}
          />
          <SelectField
            label="Department"
            name="Department"
            placeholder="28"
            options={[
              "IT Admin",
              "Software Development",
              "Software Testing",
              "UI/UX"
            ]}
            value={this.props.values.age}
            onChange={this.props.handleChange}
            onBlur={this.props.handleBlur}
            errors={this.props.errors}
            touched={this.props.touched}
          />
          <label>Gender</label>
          <br />
          <label for="male">Male</label>
          <RadioButton name="gender" value="male" />
          <label for="femla">FeMale</label>
          <RadioButton name="gender" value="female" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const initialValues = {
  name: "",
  id: "123455",
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

export const EmployeeView = withFormik({
  validationSchema,
  mapPropsToValues: () => initialValues,
  handleSubmit: (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }
})(EmployeeForm);

export default EmployeeView;
