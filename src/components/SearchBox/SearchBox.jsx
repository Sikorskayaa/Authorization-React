import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import css from "./searchBox.module.css";

function SearchBox() {
  const id = useId();

  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  return (
    <label htmlFor={id} className={css.box}>
      Find contacts by name
      <input
        type="text"
        id={id}
        className={css.filter}
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </label>
  );
}

export default SearchBox;
