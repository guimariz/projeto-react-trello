import { useState, useEffect } from 'react';
import axios from 'axios-hooks';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    userName: '',
    email: '',
    textArea: '',
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const token =
    '389a35ce910852e1d98eef5589e4b5c239378b38171973fb6ee2fca59495667b';
  const key = '803b3f5cbb8e033ce69e114c370cad70';
  const idList = '601eebb5e1ad525657d47a0a';

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [cards, setCards] = useState({ id: 0, name: '', desc: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleDropdownChange = (event) => {
    console.log(+event.target.value);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setValues({
      ...values,
      [name]: checked,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validate(values));

    console.log(cards);

    setCards({
      ...cards,
      cardsFinal: {
        id: 1,
        name: event.target[0].value,
        desc: `E-mail: ${event.target[1].value}\n Descrição: ${event.target[2].value}\n Checkbox1: ${event.target[3].value}\n Checkbox2: ${event.target[4].value}\n Checkbox3: ${event.target[5].value}\n Dropdown: Opção 2\n tag: 1`,
      },
    });
    console.log(cards.cardsFinal);

    axios
      .post(
        `https://api.trello.com/1/cards?key=${key}&token=${token}&idList=${idList}&name=${cards.name}&desc=${cards.desc}`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return {
    handleChange,
    handleSubmit,
    handleCheckboxChange,
    handleDropdownChange,
    values,
    errors,
  };
};

export default useForm;
