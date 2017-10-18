import React from 'react';

const FormInputTextarea = ({
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
        <textarea
          {...input}
          placeholder={label}
          type="textarea"
          id={cId}
          className="materialize-textarea"
        />
        {error}
      </div>
    </div>
  );
};
export default FormInputTextarea;
