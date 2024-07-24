import { useId } from "react";
import css from "./searchBox.module.css";

function SearchBox({ value, onFilter }) {
  const id = useId();

  return (
    <label htmlFor={id} className={css.box}>
      Find contacts by name
      <input
        type="text"
        id={id}
        className={css.filter}
        value={value}
        onChange={onFilter}
      />
    </label>
  );
}

export default SearchBox;
