import React from 'react';

export default function InputInfo({ label, name }) {
  return (
    <div>
      <div className="formInputs">
        <label htmlFor="email" className="formLabel">
          {name}
        </label>
        <input
          id={label}
          type="text"
          placeholder={`Digite aqui o seu ${label}`}
        />
      </div>
    </div>
  );
}
