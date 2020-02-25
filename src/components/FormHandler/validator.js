const validateRequiredValidation = value => {
  return value && value.toString().length ? false : true;
};

const validateMinLengthValidation = (value, minLength) => {
  return value ? (value.toString().length >= minLength ? false : true) : false;
};

const validateMaxLengthValidation = (value, maxLength) => {
  return value ? (value.toString().length <= maxLength ? false : true) : false;
};

const validateRegexValidation = (value, regex) => {
  return value ? (value.match(regex) ? false : true) : false;
};

const validateMinValueValidation = (value, minValue) => {
  return value ? (+value >= minValue ? false : true) : false;
};

const validateMaxValueValidation = (value, maxValue) => {
  return value ? (+value <= maxValue ? false : true) : false;
};

const validateIsNumberValidation = value => {
  return value ? (typeof value === "number" ? false : true) : false;
};

const isValidationFailed = (value, validation) => {
  switch (validation.name) {
    case "required":
      return validateRequiredValidation(value);
    case "minLength":
      return validateMinLengthValidation(value, validation.value);
    case "maxLength":
      return validateMaxLengthValidation(value, validation.value);
    case "isNumber":
      return validateIsNumberValidation(value, validation.value);
    case "minValue":
      return validateMinValueValidation(value, validation.value);
    case "maxValue":
      return validateMaxValueValidation(value, validation.value);
    case "regex":
      return validateRegexValidation(value, validation.value);
    default:
      return false;
  }
};
export default isValidationFailed;

// export const validation = (validations, values) => (value)  => {
//   for (let validation of validations) {
//     const error = validation(value, values);
//     if (error) {
//       return error;
//     }
//   }
//   return null;

// }

// const getFailedValidation = (value, validations) => {
//   const failedValidation = validations.find(validation => {
//     return isValidationFailed(value, validation);
//   });
//   return failedValidation;
// };

// export const validateTextField = (
//   value,
//   validations,
//   isFormSubmitted,
//   name,
//   isTextFieldDirty
// ) => {
//   let validationMessage = "";
//   let shouldErrorMessageShown = isTextFieldDirty || isFormSubmitted;

//   let failedValidation = getFailedValidation(
//     value && value.trim && value.trim(),
//     validations
//   );

//   if (failedValidation) {
//     validationMessage = failedValidation.message;
//   } else {
//     validationMessage = "";
//   }
//   return { validationMessage, shouldErrorMessageShown };
// };
