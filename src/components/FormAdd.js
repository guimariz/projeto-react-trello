import React, { useState, useEffect } from 'react';
import CheckBox from './CheckBox';
import Dropdown from './Dropdown';
import InputInfo from './InputInfo';
import TextArea from './TextArea';
import useForm from './useForm';
import validate from './validateInfo';
import './FormAdd.scss';
import Chips from './Chips';

const items = [
  {
    id: 1,
    value: 'Select 1',
  },
  {
    id: 2,
    value: 'Select 2',
  },
  {
    id: 3,
    value: 'Select 3',
  },
];

export default function FormAdd({ submitForm }) {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className="flex-wrap">
      <form className="form" onSubmit={handleSubmit} noValidate>
        <h3>Trello Form</h3>
        <div className="flex-row col s12">
          <div className="dataContainer col m6 ">
            <div className="input">
              <InputInfo
                name="userName"
                label="nome"
                id="Name"
                value={values.userName}
                onChange={handleChange}
              />
              {errors.userName && <p>{errors.userName}</p>}
            </div>
            <div className="input">
              <InputInfo
                name="email"
                label="email"
                type="email"
                id="E-mail"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && <p>{errors.email}</p>}
            </div>
            <TextArea />
          </div>

          <div className="dataContainer col m6">
            <div className="flex-row checkboxTotal">
              <div className="checkbox">
                <CheckBox
                  name="Opção 1"
                  onChange={handleChange}
                  checked={values.isChecked}
                  type="checkbox"
                />
              </div>
              <div className="checkbox">
                <CheckBox
                  name="Opção 2"
                  onChange={handleChange}
                  checked={values.isChecked}
                  type="checkbox"
                />
              </div>
              <div className="checkbox">
                <CheckBox
                  name="Opção 3"
                  onChange={handleChange}
                  checked={values.isChecked}
                  type="checkbox"
                />
              </div>
            </div>
            <div className="dropdown">
              <Dropdown title="Dropdown" items={items} />
            </div>
            <div className="flex-wrap row">
              <Chips />
            </div>
          </div>
        </div>
        <a className="waves-effect waves-light btn" type="submit">
          Enviar
        </a>
      </form>
    </div>
  );
}
