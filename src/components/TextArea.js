import React from 'react';

export default function TextArea({ name, value, onChange }) {
  return (
    <div>
      <textarea
        value={value}
        name={name}
        type="textarea"
        placeholder="Type something..."
        onChange={onChange}
      ></textarea>
    </div>
  );
}
