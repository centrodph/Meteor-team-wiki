const validators = {};
validators.required = (value, param) => {
  if (!value) {
    return 'error required';
  }
};

validators.minlenght = (value, param) => {
  if (value && value.length < 10) {
    return 'error minlenght';
  }
};

validators.maxlenght = (value, param) => {
  if (value && value.length > 100) {
    return 'error maxlenght';
  }
};

export default validators;
