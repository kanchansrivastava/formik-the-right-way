import React from "react";

import TextField from "./FormComponents/TextField";
import SelectField from "./FormComponents/SelectField";
import RadioButton from "./FormComponents/RadioButton";

import { withFormik } from "formik";
// import { isRequired, maxValue } from "./FormHandler/validator";

import * as Yup from "yup";

class EmployeeForm extends React.Component {
  constructor(props) {
    super(props);
  }

  getPayload = () => {
    return this.props.values;
  };

  submitForm = e => {
    e.preventDefault();
    const employeeFormPayload = this.getPayload();
    console.log("\n\nTo be sent:", employeeFormPayload);
    this.clearForm(e);
  };

  clearForm = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Employee Form!!!</h1>
        <div>
          <form onSubmit={this.submitForm}>
            <TextField
              label="Employee Name"
              name="name"
              validation={["isRequired", "maxValue"]}
            />
            <TextField label="Employee Id" name="id" disabled={true} />
            <TextField label="Age" name="age" />
            <SelectField label="Department" name="department">
              <option value="">Select</option>
              <option value="it admin">IT Admin</option>
              <option value="sd">Software Development</option>
              <option value="st">Software Testing</option>
              <option value="ui">UI/UX</option>
            </SelectField>
            <label>Gender</label>
            <br />
            <label htmlFor="gender">Male</label>
            <RadioButton name="gender" value="male" />
            <label htmlFor="gender">Female</label>
            <RadioButton name="gender" value="female" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("This field is Required."),
  id: Yup.number()
    .max(20, "Must be 20 characters or less")
    .required("This field is Required."),
  department: Yup.string()
    .oneOf(
      ["IT Admin", "Software Development", "Software Testing", "UI/UX"],
      "Invalid Job Type"
    )
    .required("This field is Required."),
  dateOfJoining: Yup.string().required("This field is Required."),
  gender: Yup.string().required("This field is Required."),
  isContractor: Yup.bool().required("This field is Required."),
  age: Yup.number()
    .max(20, "Must be 20 characters or less")
    .required("This field is Required.")
});

export const EmployeeView = withFormik({
  // validationSchema,
  enableReinitialize: true,
  mapPropsToValues: props => props.initialValues
})(EmployeeForm);

export default EmployeeView;
