import * as yup from 'yup';

const contacts = yup.object().shape({
  id: yup.string(),
  name: yup
    .string()
    .min(3, 'At least 3 characters')
    .max(50, 'You`ve typed more than 50 characters')
    .required('This input is required'),
  number: yup
    .string()
    .matches(
      /^\d{1,10}-\d{1,10}-\d{1,10}$/,
      'Your phone number should have up to 10 digits between each hyphen, and it should not contain any other characters',
    )
    .required('This input is required'),
});

const registrationForm = yup.object().shape({
  name: yup
    .string()
    .min(3, 'At least 3 characters')
    .max(50, 'You`ve typed more than 50 characters')
    .required('This input is required'),
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Your email must be ***@***.***',
    )
    .required('This input is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(50, 'Password must be at most 50 characters long')
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$/,
      'Password must contain at least 1 uppercase letter, 1 number, and 1 special character (!@#$%^&*)',
    )
    .required('This input is required'),
});

const loginForm = yup.object().shape({
  email: yup
    .string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Your email must be ***@***.***',
    )
    .required('This input is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(50, 'Password must be at most 50 characters long')
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$/,
      'Password must contain at least 1 uppercase letter, 1 number, and 1 special character (!@#$%^&*)',
    )
    .required('This input is required'),
});

export const validationSchema = {
  contacts,
  registrationForm,
  loginForm,
};
