import { useState, useEffect } from 'react';

const useForm = () => {
  const [values, setValues] = useState({
    userName: '',
    email: '',
    textArea: '',
    checkBox: false,
    dropDown: false,
  });

  const [errors, setErros] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return { handleChange, values, handleSubmit };
};

export default useForm;
