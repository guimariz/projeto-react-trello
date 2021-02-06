import { useState, useEffect } from 'react';

const useForm = (callback, validate, onChange) => {
  const [values, setValues] = useState({
    userName: '',
    email: '',
    textArea: '',
    checkBox: false,
    dropDown: false,
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
  const handleBoxChange = () => {};

  const handleSubmit = (event) => {
    event.preventDefault();

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
    handleBoxChange,
    values,
    errors,
  };
};

export default useForm;
