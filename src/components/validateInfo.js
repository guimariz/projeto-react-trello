export default function validateInfo(values) {
  let errors = {};

  if (!values.userName.trim()) {
    errors.userName = 'Nome obrigatório!';
  }

  if (!values.email) {
    errors.email = 'Email obrigatório!';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Endereço de E-mail inválido!';
  }

  return errors;
}
