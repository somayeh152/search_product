import Image from "next/image";
import style from "./Product.module.css";

const Product = (props) => {
  return (
    <div className={style.productHolder}>
      <div className={style.product}>
        <Image src={props.image} alt={props.title} width="220" height="220" />
        <div className={style.title}>{props.title}</div>
        <div className={style.info}>
          {props.price} <span>تومان</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
