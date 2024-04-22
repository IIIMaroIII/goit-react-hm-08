import css from './contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';

import Contact from './Contact/Contact';
import { useEffect } from 'react';
import { getContactsList } from 'src/redux/contacts/operations';
import Loader from '../Loader/Loader';
import { selectLoading } from 'src/redux/contacts/selectors';
import { selectFilteredContacts } from 'src/redux/filters/selectors';
import { selectUserIsLoggedIn } from 'src/redux/auth/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const isUserLoggedIn = useSelector(selectUserIsLoggedIn);
  const isLoading = useSelector(selectLoading);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(getContactsList());
  }, [dispatch]);

  const isFilteredContactsEmpty = filteredContacts.length === 0;

  return (
    <>
      {isLoading && <Loader />}

      <ul className={css.list}>
        {!isFilteredContactsEmpty && <Contact data={filteredContacts} />}
      </ul>
    </>
  );
};

export default ContactList;
