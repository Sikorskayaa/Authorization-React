import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./searchBox.module.css";

function SearchBox() {
  const id = useId();

  const selectNameFilter = useSelector((state) => state.filterbox.filters.name);
  const dispatch = useDispatch();

  function onFilter(e) {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <label htmlFor={id} className={css.box}>
      Find contacts by name
      <input
        type="text"
        id={id}
        className={css.filter}
        value={selectNameFilter}
        onChange={onFilter}
      />
    </label>
  );
}

export default SearchBox;
