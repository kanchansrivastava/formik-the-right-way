import React from "react";
import { withFormik } from "formik";

// export function FormWrapper(WrappedComponent) {
//   return withFormik({
//     initialValues: initialValues,
//     validationSchema: validationSchema
//   })(WrappedComponent);
// }

const FormWrapper = withFormik({
  validationSchema: props => props.validationSchema,
  mapPropsToValues: props => props.initialValues,
  enableReinitialize: true
});

export default FormWrapper;
