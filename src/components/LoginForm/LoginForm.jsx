import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './loginForm.module.css';
import { validationSchema } from 'src/utils/yup/validationSchema';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };
  const handleSubmit = (values, { resetForm }) => {
    resetForm();
  };

  return (
    <Formik
      validationSchema={validationSchema.loginForm}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isValid, isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.wrapper}>
            <label className={css.label}>
              Email:
              <Field type="text" name="email" />
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
              <Field type="text" name="password" />
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
            Log in
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
