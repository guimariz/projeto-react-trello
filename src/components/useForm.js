import { useState, useEffect } from 'react';

let cardsFinal = {};

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    userName: '',
    email: '',
    textArea: '',
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    cardsFinal = {
      id: 1,
      name: event.target[0].value,
      desc: `E-mail: ${event.target[1].value}\n Descrição: ${event.target[2].value}\n Checkbox1: ${event.target[3].value}\n Checkbox2: ${event.target[4].value}\n Checkbox3: ${event.target[5].value}\n Dropdown: Opção 2\n tag: 1`,
    };
    console.log(cardsFinal);

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
    cardsFinal,
    values,
    errors,
  };
};

export default useForm;
