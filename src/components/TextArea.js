import React from 'react';

export default function TextArea() {
  return (
    <div>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="textarea1"
                className="materialize-textarea"
              ></textarea>
              <label htmlFor="textarea1">Textarea</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
