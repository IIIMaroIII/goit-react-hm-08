import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "src/redux/filtersSlice";
import { selectNameFilter } from "src/redux/selectors";

import css from "./searchBox.module.css";

const SearchBox = () => {
  const filterId = useId();
  const dispatch = useDispatch();
  const filterName = useSelector(selectNameFilter);

  const onFilterInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label htmlFor={filterId} className={css.label}>
        Find contacts by name
      </label>
      <input
        id={filterId}
        className={css.input}
        type="text"
        value={filterName}
        onChange={onFilterInput}
      />
    </div>
  );
};

export default SearchBox;
