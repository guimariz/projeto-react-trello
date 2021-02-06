import React, { useState } from 'react';
import CheckBox from './CheckBox';
import Dropdown from './Dropdown';
import InputInfo from './InputInfo';
import TextArea from './TextArea';
import useForm from './useForm';

export default function FormAdd() {
  const { handleChange, values, handleSubmit } = useForm();

  return (
    <div className="formContent">
      <form className="form" onSumit={handleSubmit}>
        <h1>Trello Form</h1>
        <div className="dadosUsuario">
          <InputInfo
            name="Name"
            label="nome"
            value={values.userName}
            onChange={handleChange}
          />
          <InputInfo
            name="Email"
            label="e-mail"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
          <TextArea />
        </div>

        <div className="opcoesUsuario">
          <CheckBox
            id="checkBox1"
            name="Opção 1"
            value={values.checkBox}
            onChange={handleChange}
          />
          <CheckBox
            id="checkBox2"
            name="Opção 2"
            value={values.checkBox}
            onChange={handleChange}
          />
          <CheckBox
            id="checkBox2"
            name="Opção 3"
            value={values.checkBox}
            onChange={handleChange}
          />

          <Dropdown value={values.dropDown} onChange={handleChange} />
        </div>

        <a className="waves-effect waves-light btn" type="submit">
          Enviar
        </a>
      </form>
    </div>
  );
}
