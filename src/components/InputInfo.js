import React from 'react';

export default function InputInfo({ label, name, value, onChange, id }) {
  return (
    <div>
      <div className="formInputs">
        <label htmlFor="email" className="formLabel">
          {id}
        </label>
        <input
          value={value}
          name={name}
          type="text"
          placeholder={`Digite aqui o seu ${label}`}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
