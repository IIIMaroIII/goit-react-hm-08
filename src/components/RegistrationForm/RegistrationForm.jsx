import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './registrationForm.module.css';
import { validationSchema } from 'src/utils/yup/validationSchema';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { register } from 'src/redux/auth/operations';
import toast from 'react-hot-toast';
import { useState } from 'react';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [disabledBtn, setDisabledBtn] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values))
      .unwrap()
      .then(() => {
        toast.success(`User ${values.name} has been created 🎊 `);
      })
      .catch(err => {
        console.log(err);
        toast.error('User already exist 😬');
      });
    resetForm();
  };

  return (
    <Formik
      validationSchema={validationSchema.registrationForm}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isValid, isSubmitting }) => (
        <div className={css.mainWrapper}>
          <Form className={css.form}>
            <div className={css.wrapper}>
              <label className={css.label}>
                Name:
                <Field className={css.input} type="text" name="name" />
                <ErrorMessage
                  className={css.error}
                  name="name"
                  component="span"
                />
              </label>
            </div>
            <div className={css.wrapper}>
              <label className={css.label}>
                Email:
                <Field className={css.input} type="text" name="email" />
                <ErrorMessage
                  className={css.error}
                  name="email"
                  component="span"
                />
              </label>
            </div>
            <div className={css.wrapper}>
              <label className={css.label}>
                Password:
                <Field className={css.input} type="password" name="password" />
                <ErrorMessage
                  className={css.error}
                  name="password"
                  component="span"
                />
              </label>
            </div>
            <Button
              addClass={css.button}
              type="submit"
              disabled={!isValid || isSubmitting}
            >
              Submit your registration
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default RegistrationForm;
