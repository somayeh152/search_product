import style from "./Selector.module.css";

const Selector = ({ value, onChange, options = [] }) => {
  return (
    <select
      className={style.selected_option}
      name="category"
      id="category"
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option
          className={style.option}
          value={option.value}
          key={option.value}
        >
          {option.text}
        </option>
      ))}
    </select>
  );
};

export default Selector;
