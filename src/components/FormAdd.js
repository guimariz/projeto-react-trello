import React, { useState, useEffect } from 'react';
import CheckBox from './CheckBox';
import Dropdown from './Dropdown';
import InputInfo from './InputInfo';
import TextArea from './TextArea';
import useForm from './useForm';
import validate from './validateInfo';
import './FormAdd.scss';

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

export default function FormAdd(submitForm) {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <form action="#" className="form" onSubmit={handleSubmit}>
      <h1>Trello Form</h1>
      <div className="dadosUsuario">
        <InputInfo
          name="userName"
          label="nome"
          id="Name"
          value={values.userName}
          onChange={handleChange}
        />
        {errors.userName && <p>{errors.userName}</p>}
        <InputInfo
          name="email"
          label="email"
          type="email"
          id="E-mail"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        {/* <TextArea /> */}
      </div>

      <div className="opcoesUsuario">
        <div>
          <CheckBox
            name="Opção 1"
            onChange={handleChange}
            checked={values.isChecked}
            type="checkbox"
          />
          <CheckBox
            name="Opção 2"
            onChange={handleChange}
            checked={values.isChecked}
            type="checkbox"
          />
          <CheckBox
            name="Opção 3"
            onChange={handleChange}
            checked={values.isChecked}
            type="checkbox"
          />
        </div>

        <Dropdown title="Dropdown" items={items} />
      </div>

      <a className="waves-effect waves-light btn" type="submit">
        Enviar
      </a>
    </form>
  );
}
