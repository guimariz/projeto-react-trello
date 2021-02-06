import React from 'react';

export default function Dropdown(value) {
  return (
    <div>
      <div className="input-field col s12">
        <select>
          <option value={value} disabled selected>
            Choose your option
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label>Materialize Select</label>
      </div>
    </div>
  );
}
