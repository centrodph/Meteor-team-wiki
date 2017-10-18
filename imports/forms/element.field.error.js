import React from 'react';

const FormFieldError = props => {
  const { touched, error, warning } = props;
  if (touched && error) {
    return (
      <div className="field-error red-text text-lighten-1">
        {error}
      </div>
    );
  }
  return null;
};
export default FormFieldError;
