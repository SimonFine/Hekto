import { useContext } from "react";
import styles from "./RelatedProducts.module.scss";
import { ProductContext } from "../../../store/ProductContext";
import ProductCardSimple from "../../../components/ProductCardSimple/ProductCardSimple";
import Error from "../../Error/Error";

const RelatedProducts: React.FC = () => {
    const productsContext = useContext(ProductContext);
    
    const { productData, error } = productsContext;
    
    if (error) return <Error message={error} />

    return (
        <div className={styles.related}>
            <h3>Related Products</h3>
            <div className={styles.cards}>
                {(productData ?? []).slice(0, 4).map((product, index) => {
                    return <ProductCardSimple {...product} key={index}/>
                })}
            </div>
        </div>
    );
}

export default RelatedProducts;