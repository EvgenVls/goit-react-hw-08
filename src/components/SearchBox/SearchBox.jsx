import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChangeFilter = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchBox}>
      <p className={css.searchTitle}>Find contacts by name or number</p>
      <input
        className={css.searchField}
        type="text"
        onChange={handleChangeFilter}
      />
    </div>
  );
}
