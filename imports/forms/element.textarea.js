import React from 'react';
import FormFieldError from './element.field.error';

const FormInputTextarea = ({ input, label, type, meta }) => {
  const cId = `cId${Math.round(Math.random() * 100)}`;
  return (
    <div>
      <label>
        {label}
      </label>
      <div>
        <textarea
          {...input}
          placeholder={label}
          type="textarea"
          id={cId}
          className="materialize-textarea"
        />
        <FormFieldError {...meta} />
      </div>
    </div>
  );
};
export default FormInputTextarea;
