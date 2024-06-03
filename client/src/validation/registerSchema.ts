import * as Yup from 'yup';
import { valMessages } from './valMessages';

export const registerSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, valMessages.name.min)
    .test('noWhiteSpace', valMessages.noWhiteSpace, (value) => {
      if (value) {
        return !value.includes(' ');
      }
    })
    .max(50, valMessages.name.max)
    .required(valMessages.name.required),
  email: Yup.string()
    .trim()
    .matches(/\S+$/, valMessages.noWhiteSpace)
    .email(valMessages.email.notValidEmail)
    .max(100, valMessages.email.max)
    .required(valMessages.email.required),
  password: Yup.string()
    .trim()
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?!.*\s).{8,}$/,
      valMessages.password.weak
    )
    .test('noWhiteSpace', valMessages.noWhiteSpace, (value) => {
      if (value) {
        return !value.includes(' ');
      }
    })
    .max(100, valMessages.email.max)
    .required(valMessages.password.required),
  confirmPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref('password')], valMessages.confirmPassword.match)
    .required(valMessages.confirmPassword.required),
});
