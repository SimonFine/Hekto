import styles from "./Products.module.scss";
import ProductsList from "./ProductsList";

const Products: React.FC = () => {

    return (
        <div className={styles.products}>
            <h2>Products</h2>
            <p className="body-default body-default--grey-3">
                Home &nbsp;&nbsp;&middot;&nbsp;&nbsp; <span className="body-default--primary">Products</span>
            </p>
            <ProductsList />
        </div>
    );
}

export default Products;