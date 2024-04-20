import css from './contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';

import Contact from './Contact/Contact';
import { useEffect } from 'react';
import { getContactsList } from 'src/redux/contacts/operations';
import Loader from '../Loader/Loader';
import { selectContacts, selectLoading } from 'src/redux/contacts/selectors';
import { selectFilteredContacts } from 'src/redux/filters/selectors';

const ContactList = () => {
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectLoading);
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsList());
  }, [dispatch]);

  const isFilteredContactsEmpty = filteredContacts.length === 0;
  const isContactsEmpty = items.length === 0;

  return (
    <>
      {isLoading && <Loader />}
      {!isContactsEmpty && (
        <ul className={css.list}>
          {!isFilteredContactsEmpty && <Contact data={filteredContacts} />}
        </ul>
      )}
    </>
  );
};

export default ContactList;
