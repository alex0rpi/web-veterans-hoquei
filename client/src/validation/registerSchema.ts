import * as Yup from 'yup';
import { valMessages } from './valMessages';

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, valMessages.name.min)
    .max(50, valMessages.name.max)
    .required(valMessages.name.required),
  email: Yup.string()
    .email(valMessages.email.notValidEmail)
    .max(100, valMessages.email.max)
    .required(valMessages.email.required),
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      valMessages.password.weak
    )
    .max(100, valMessages.email.max)
    .required(valMessages.password.required),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], valMessages.confirmPassword.match)
    .required(valMessages.confirmPassword.required),
});
