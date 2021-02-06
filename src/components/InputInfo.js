import React from 'react';

export default function InputInfo({ label, name, value, onChange }) {
  const handleChange = () => {
    console.log(value);
    onChange(value);
  };

  return (
    <div>
      <div className="formInputs">
        <label htmlFor="email" className="formLabel">
          {name}
        </label>
        <input
          value={value}
          id={label}
          type="text"
          placeholder={`Digite aqui o seu ${label}`}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
