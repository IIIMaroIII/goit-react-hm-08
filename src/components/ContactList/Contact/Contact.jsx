import css from './contact.module.css';
import { IoIosContact } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'src/redux/contacts/operations';
import toast from 'react-hot-toast';
import Button from 'src/components/Button/Button';
import { selectLoadingContacts } from 'src/redux/contacts/selectors';

const Contact = ({ data }) => {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(selectLoadingContacts);
  const onDeleteBtn = id => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success('You`ve successfully deleted a contact 🤓'))
      .catch(() =>
        toast.error('Oops, something went wrong, please try again!🤨'),
      );
  };

  return data.map(({ id, name, number }) => {
    return (
      <li key={id} className={css.contact}>
        <div className={css.wrapper}>
          <p className={css.name}>
            <IoIosContact className={clsx(css.logo, css.contact)} />
            {name}
          </p>
          <p className={css.phone}>
            <FaPhoneAlt className={clsx(css.logo, css.phone)} />
            {number}
          </p>
        </div>
        <Button onClick={() => onDeleteBtn(id)} disabled={isLoadingContacts}>
          Delete contact
        </Button>
        {/* <button
          onClick={() => onDeleteBtn(id)}
          className={css.btn}
          type="button"
        >
          Delete
        </button> */}
      </li>
    );
  });
};

export default Contact;
