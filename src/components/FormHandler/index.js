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

    getFieldValues() {
      return this.props.values;
    }

    isValid() {
      return this.props.isValid;
    }

    render() {
      return (
        <Formik
          initialValues={this.props.initialValues}
          validationSchema={validationSchema}
          enableReinitialize={true}
          // render={formikProps => // for older version
          children={formikProps =>
            <WrappedComponent
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