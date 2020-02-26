import React from "react";
import { withFormik, Formik } from "formik";


function FormWrapper1(WrappedComponent, validationSchema) {
  return withFormik({
    validationSchema,
    enableReinitialize: true,
    mapPropsToValues: props => props.initialValues,
  })(WrappedComponent);
}


function FormWrapper(WrappedComponent, validationSchema) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    handleSubmit() {
      return this.props.values;
    }

    getFieldValues() {
      return this.props.values;
    }

    isValid() {
      return this.props.isValid;
    }

    resetForm() {
      return this.props.resetForm();
    }


    render() {
      return (
          <Formik
              initialValues={this.props.initialValues}
              validationSchema={validationSchema}
              enableReinitialize={true}
              children={formikProps =>
                <WrappedComponent
                  resetForm={this.resetForm}
                  isValid={this.isValid}
                  getFieldValues={this.getFieldValues}
                  {...formikProps}
                  {...this.props}
                />
              }
          />
      );
    }
  };
}


export default FormWrapper;