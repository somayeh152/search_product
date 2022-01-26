import Product from "../product/Product";
import style from "./Products.module.css";

const Products = (props) => {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.row}>
          {props.products.map((item) => (
            <Product
              key={item.id}
              image={item.image}
              title={item.name}
              price={item.price}
              // category={item.category}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
