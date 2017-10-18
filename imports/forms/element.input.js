import React from 'react';

const FormInputText = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => {
  const cId = `cId${Math.round(Math.random() * 100)}`;
  return (
    <div>
      <label>
        {label}
      </label>
      <div>
        <input {...input} placeholder={label} type="text" id={cId} />
        {error}
      </div>
    </div>
  );
};
export default FormInputText;
