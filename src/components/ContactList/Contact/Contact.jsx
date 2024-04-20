import css from './contact.module.css';
import { IoIosContact } from 'react-icons/io';
import { FaPhoneAlt } from 'react-icons/fa';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'src/redux/contacts/operations';

const Contact = ({ data }) => {
  const dispatch = useDispatch();
  const onDeleteBtn = id => {
    dispatch(deleteContact(id));
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
        <button
          onClick={() => onDeleteBtn(id)}
          className={css.btn}
          type="button"
        >
          Delete
        </button>
      </li>
    );
  });
};

export default Contact;
