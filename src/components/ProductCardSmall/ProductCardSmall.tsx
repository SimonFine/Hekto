import { Product } from "../../models/product";
import styles from "./ProductCardSmall.module.scss";

const ProductCardSmall: React.FC<Product> = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.imgUrl} alt="product-image" className={styles.card__img}/>
            <p className={`label-bold label-bold--primary ${styles.card__name}`}>{props.name}</p>
            <div className={styles.card__prices}>
                <p className={`label-default ${styles.card__price}`}>{`$${props.price.toFixed(2)}`}</p>
                <p className={`label-s label-s--grey-3 ${styles.card__oldPrice}`}><s>{props.oldPrice.toFixed(2)}</s></p>
            </div>
        </div>
    );
}

export default ProductCardSmall;