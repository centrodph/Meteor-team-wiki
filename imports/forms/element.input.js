import React from 'react';
import { getFieldClass, getInputClass } from './formhelper';
import FormFieldError from './element.field.error';

const FormInputText = ({ input, label, type, meta }) => {
  const cId = `cId${Math.round(Math.random() * 100)}`;
  return (
    <div className={getFieldClass(meta)}>
      <label>
        {label}
      </label>
      <div>
        <input
          {...input}
          placeholder={label}
          type="text"
          id={cId}
          className={getInputClass(meta)}
        />
        <FormFieldError {...meta} />
      </div>
    </div>
  );
};
export default FormInputText;
