import React, { useState } from 'react';
import CheckBox from './CheckBox';
import Dropdown from './Dropdown';
import InputInfo from './InputInfo';
import TextArea from './TextArea';
import useForm from './useForm';
import validate from './validateInfo';

export default function FormAdd(submitForm) {
  const {
    handleChange,
    handleSubmit,
    handleBoxChange,
    values,
    errors,
  } = useForm(submitForm, validate);
  console.log(values.email);
  return (
    <form className="form" onSumit={handleSubmit}>
      <h1>Trello Form</h1>
      <div className="dadosUsuario">
        <InputInfo
          name="Name"
          label="nome"
          value={values.userName}
          onChange={handleChange}
        />
        {errors.userName && <p>{errors.userName}</p>}
        <InputInfo
          name="Email"
          label="e-mail"
          type="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
        <TextArea />
      </div>

      <div className="opcoesUsuario">
        <CheckBox
          id="checkBox1"
          name="Opção 1"
          value={values.checkBox}
          onChange={handleBoxChange}
        />
        <CheckBox
          id="checkBox2"
          name="Opção 2"
          value={values.checkBox}
          onChange={handleBoxChange}
        />
        <CheckBox
          id="checkBox2"
          name="Opção 3"
          value={values.checkBox}
          onChange={handleBoxChange}
        />

        <Dropdown value={values.dropDown} onChange={handleChange} />
      </div>

      <a className="waves-effect waves-light btn" type="submit">
        Enviar
      </a>
    </form>
  );
}
