import useNavigateToProduct from "../../hooks/useNavigateToProduct";
import { Product } from "../../models/product";
import styles from "./Autocomplete.module.scss";

const Autocomplete: React.FC<Product> = (product) => {
    const goToProduct = useNavigateToProduct();

    return (
        <div className={styles.card} onClick={() => goToProduct(product.code)}>
            <img src={product.imgUrl} alt="product-image" className={styles.image}/>
            <p className={`subtitle-xs ${styles.name}`}>{product.name}</p>
        </div>
    );
}

export default Autocomplete;