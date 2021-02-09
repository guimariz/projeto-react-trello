import React from 'react';
import axios from 'axios';
import useForm from './useForm';

export default function FormSuccess() {
  const { cardsFinal } = useForm();
  const token =
    '389a35ce910852e1d98eef5589e4b5c239378b38171973fb6ee2fca59495667b';
  const key = '803b3f5cbb8e033ce69e114c370cad70';
  const idList = '601eebb5e1ad525657d47a0a';

  axios
    .post(
      `https://api.trello.com/1/cards?key=${key}&token=${token}&idList=${idList}&name=${cardsFinal.name}&desc=${cardsFinal.desc}`
    )
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div className="forContent">
      <div className="formSucess">
        <span>Formulário enviado com sucesso!</span>
      </div>
    </div>
  );
}
