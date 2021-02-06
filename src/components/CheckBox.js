import React from 'react';

export default function CheckBox({ name, id }) {
  return (
    <div>
      <input id={id} type="checkbox" className="filled-in" checked="checked" />
      <span>{name}</span>
    </div>
  );
}
