import React from 'react';

export default function CheckBox({
  id,
  name,
  type,
  value,
  isChecked,
  onChange,
}) {
  return (
    <div>
      <label>
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          checked={isChecked}
          className="filled-in"
          onChange={onChange}
        />
        <span>{name}</span>
      </label>
    </div>
  );
}
