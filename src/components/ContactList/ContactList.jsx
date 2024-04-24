import css from './contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';

import Contact from './Contact/Contact';
import { useEffect } from 'react';
import { getContactsList } from 'src/redux/contacts/operations';
import Loader from '../Loader/Loader';
import { selectLoadingContacts } from 'src/redux/contacts/selectors';
import { selectFilteredContacts } from 'src/redux/filters/selectors';
import toast from 'react-hot-toast';

const ContactList = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectLoadingContacts);
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(getContactsList());
    toast('At this page you can modify your contact list', { duration: 10000 });
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
