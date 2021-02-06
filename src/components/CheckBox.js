import React from 'react';

export default function CheckBox({ name, id, handleBoxChange, value }) {
  const onChange = () => {
    handleBoxChange(value);
  };

  return (
    <div>
      <input id={id} type="checkbox" className="filled-in" checked={value} />
      <span>{name}</span>
    </div>
  );
}
