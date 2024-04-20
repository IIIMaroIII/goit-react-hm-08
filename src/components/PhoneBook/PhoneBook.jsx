import css from './phoneBook.module.css';
import PropTypes from 'prop-types';

const PhoneBook = props => {
  return (
    <>
      <h1 className={css.title}>PhoneBook</h1>
    </>
  );
};

PhoneBook.propTypes = {};

export default PhoneBook;
