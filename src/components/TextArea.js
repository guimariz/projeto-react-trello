import React from 'react';

export default function TextArea({ name, label, value, onChange }) {
  return (
    <div>
      <textarea
        value={value}
        id={name}
        name={name}
        label={label}
        type="textarea"
        placeholder="Type something..."
        onChange={onChange}
      ></textarea>
    </div>
  );
}
