import { useContext } from "react";
import styles from "./Trending.module.scss";
import { ProductContext } from "../../../store/ProductContext";
import { Product } from "../../../models/product";
import ProductCardSmall from "../../../components/ProductCardSmall/ProductCardSmall";
import { Skeleton } from "@mui/material";
import Error from "../../Error/Error";

const Trending: React.FC = () => {
    const productsContext = useContext(ProductContext);
    
    const { productData, isLoading, error } = productsContext;
    
    if (error) return <Error message={error} />

    return (
        <div className={styles.trending}>
            <h2>Trending Products</h2>
            <div className={styles.cards}>
            {
                isLoading ? (
                    <>
                    <Skeleton variant="rectangular" sx={{ width: "30.4rem", height: "34.4rem" }} />
                    <Skeleton variant="rectangular" sx={{ width: "30.4rem", height: "34.4rem" }} />
                    <Skeleton variant="rectangular" sx={{ width: "30.4rem", height: "34.4rem" }} />
                    <Skeleton variant="rectangular" sx={{ width: "30.4rem", height: "34.4rem" }} />
                    </>
                ) : (
                    productData ?? []).slice(0, 4).map((product: Product, index: number) => 
                        <ProductCardSmall {...product} key={index}/>
                )
            }
            </div>
        </div>
    );
}

export default Trending;