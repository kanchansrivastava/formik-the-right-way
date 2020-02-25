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

const isValidationFailed = (fieldValue, validation) => {
  switch (validation.name) {
    case "required":
      return validateRequiredValidation(fieldValue);
    case "minLength":
      return validateMinLengthValidation(fieldValue, validation.limit);
    case "maxLength":
      return validateMaxLengthValidation(fieldValue, validation.limit);
    case "isNumber":
      return validateIsNumberValidation(fieldValue, validation.limit);
    case "minValue":
      return validateMinValueValidation(fieldValue, validation.limit);
    case "maxValue":
      return validateMaxValueValidation(fieldValue, validation.limit);
    case "regex":
      return validateRegexValidation(fieldValue, validation.limit);
    default:
      return false;
  }
};

const hasValidationFailed = (fieldValue, validations) => {
  for (let validation of validations) {
    if (isValidationFailed(fieldValue, validation)) {
      return validation;
    }
  }
  return null;
};
export default hasValidationFailed;
