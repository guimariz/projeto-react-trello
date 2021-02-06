import React, { useState } from 'react';
import FormAdd from './FormAdd';
import FormSucess from './FormSuccess';

export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <div>
      {!isSubmitted ? <FormAdd submitForm={submitForm} /> : <FormSucess />}
    </div>
  );
}
