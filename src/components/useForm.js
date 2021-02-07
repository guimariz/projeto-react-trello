import { useState, useEffect } from 'react';

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
  const [dropdown, setDropDown] = useState(0);
  const [data, setData] = useState({});

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

    let data = {
      id: 1,
      name: values.userName,
      email: values.email,
      description: values.textArea,
      checkbox1: values.checkbox1,
      checkbox2: values.checkbox2,
      checkbox3: values.checkbox3,
      dropdown: dropdown,
      tag: 1,
    };

    setErrors(validate(values));
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
    dropdown,
    errors,
  };
};

export default useForm;
