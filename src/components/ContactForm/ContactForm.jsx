import { useId } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';

import contactFormSchema from 'src/yup/contactFormSchema';

import css from './contactForm.module.css';
import { addContact } from 'src/redux/contactsOps';

const ContactForm = () => {
  const dispatch = useDispatch();

  const values = {
    id: '',
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    const uniqId = nanoid();
    const newValues = { ...values, id: uniqId };
    dispatch(addContact(newValues));
    actions.resetForm();
  };

  const nameId = useId();
  const phoneId = useId();
  return (
    <Formik
      validationSchema={contactFormSchema}
      initialValues={values}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.wrapper}>
          <label className={css.label} htmlFor={nameId}>
            Name
          </label>
          <Field className={css.input} type="text" name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.wrapper}>
          {' '}
          <label className={css.label} htmlFor={phoneId}>
            Number
          </label>
          <Field className={css.input} type="text" name="number" id={phoneId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
