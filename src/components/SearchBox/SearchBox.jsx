import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilterName } from "../../redux/filters/selectors";
import css from "./searchBox.module.css";

function SearchBox() {
  const id = useId();

  const dispatch = useDispatch();
  const filter = useSelector(selectFilterName);

  function handleChange(e) {
    dispatch(changeFilter(e.target.value));
  }

  return (
    <label htmlFor={id} className={css.box}>
      Find contacts by name
      <input
        type="text"
        id={id}
        value={filter}
        className={css.filter}
        onChange={handleChange}
      />
    </label>
  );
}

export default SearchBox;
