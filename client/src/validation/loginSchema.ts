import * as Yup from 'yup';
// import { valMessages } from './valMessages';

export const loginSchema = Yup.object().shape({
  // email: Yup.string()
  //   .email(valMessages.email.notValidEmail)
  //   .max(100, valMessages.email.max)
  //   .required(valMessages.email.required),
  // password: Yup.string()
  //   .required(valMessages.password.required)
  //   .max(100, valMessages.email.max),
});
