import React from 'react';

export default function CheckBox({ name, onChange, isChecked, type }) {
  return (
    <div>
      <label>
        <input
          type={type}
          name={name}
          checked={isChecked}
          onChange={onChange}
          className="filled-in"
        />
        <span>{name}</span>
      </label>
    </div>
  );
}
