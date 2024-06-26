import { useId } from 'react';
import { nanoid } from 'nanoid/non-secure';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import css from './contactForm.module.css';
import { addContact } from 'src/redux/contacts/operations';
import { validationSchema } from 'src/utils/yup/validationSchema';
import toast from 'react-hot-toast';
import Button from '../Button/Button';
import { selectLoadingContacts } from 'src/redux/contacts/selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(selectLoadingContacts);

  const values = {
    id: '',
    name: '',
    number: '',
  };

  const handleSubmit = (values, actions) => {
    const uniqId = nanoid();
    const newValues = { ...values, id: uniqId };
    dispatch(addContact(newValues))
      .unwrap()
      .then(() => toast.success('You`ve added a new contact 😃'))
      .catch(() =>
        toast.error('Oops, something went wrong, please try again!🤨'),
      );
    actions.resetForm();
  };

  const nameId = useId();
  const phoneId = useId();
  return (
    <Formik
      validationSchema={validationSchema.contacts}
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
        <Button type="submit" disabled={isLoadingContacts}>
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
