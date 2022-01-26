import Product from "../product/Product";
import style from "./Products.module.css";

const Products = (props) => {
  return (
    <div>
      <div className={style.wrapper}>
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
  );
};

export default Products;
