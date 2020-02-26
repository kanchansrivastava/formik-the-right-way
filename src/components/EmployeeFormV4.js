import React from "react";

import TextField from "./FormComponents/TextField";
import SelectField from "./FormComponents/SelectField";
import RadioButton from "./FormComponents/RadioButton";
import TextFieldWithValidation from "./FormComponents/TextFieldWithValidation";

import FormWrapper from "./FormHandler/index";

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
    console.log(this.props);
    alert("form submitted");
    this.props.resetForm();
  };

  render() {
    return (
      <div>
        <h1>Employee Form!!!</h1>
        <div>
          <form onSubmit={this.submitForm}>
            <TextFieldWithValidation
              label="Employee Name"
              name="name"
              validations={[
                {
                  name: "required",
                  errorMessage: "Employee Name is required"
                },
                {
                  name: "maxLength",
                  errorMessage: "Max length should be 15",
                  limit: 15
                }
              ]}
            />
            <TextField label="Employee Id" name="id" disabled={true} />
            <TextField label="Age" name="age" />
            <SelectField label="Department" name="department">
              <option value="">Select</option>
              <option value="IT Admin">IT Admin</option>
              <option value="Software Development">Software Development</option>
              <option value="Software Testing">Software Testing</option>
              <option value="UI/UX">UI/UX</option>
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
  id: Yup.number().required("This field is Required."),
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
    .required()
    .positive()
    .integer()
    .label("Age")
    .min(1, "Age can't be less than 1.")
    .max(100, "Age can't be greater than 1.")
    .typeError("Age should be a positive number.")
});

const EmployeeView = FormWrapper(EmployeeForm, validationSchema);

export default EmployeeView;
