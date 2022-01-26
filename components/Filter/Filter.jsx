import Selector from "../../ui-kit/selector/Selector";
import style from "./Filter.module.css";

const Filter = ({
  value = {
    sort: "bestsell",
    category: "all",
  },
  onChange,
}) => {
  const onSortHandler = (event) => {
    onChange({ ...value, sort: event.target.value });
  };
  const onCategoryHandler = (event) => {
    onChange({ ...value, category: event.target.value });
  };
  return (
    <div className={style.filterHolder}>
      <div className={style.filter}>
        <div className={style.sort}>
          <label htmlFor="" className={style.label}>
            ترتیب نمایش
          </label>
          <Selector
            options={[
              { text: "جدیدترین", value: "newest" },
              { text: "پرفروش‌‌ترین", value: "bestselling" },
            ]}
            value={value.sort}
            onChange={onSortHandler}
          />
        </div>
        <div className={style.category}>
          <label htmlFor="" className={style.label}>
            دسته‌بندی
          </label>
          <Selector
            options={[
              { text: "همه", value: "all" },
              { text: "کلاس A", value: "classA" },
              { text: "کلاس B", value: "classB" },
              { text: "کلاس C", value: "classC" },
            ]}
            value={value.category}
            onChange={onCategoryHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Filter;
