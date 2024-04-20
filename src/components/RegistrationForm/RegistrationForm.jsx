import { ErrorMessage, Field, Form, Formik } from 'formik';
import css from './registrationForm.module.css';
import { validationSchema } from 'src/utils/yup/validationSchema';
import Button from '../Button/Button';
import { useDispatch } from 'react-redux';
import { register } from 'src/redux/auth/operations';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      validationSchema={validationSchema.registrationForm}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ isValid, isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.wrapper}>
            <label className={css.label}>
              Name:
              <Field type="text" name="name" />
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
            Submit your registration
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default RegistrationForm;
