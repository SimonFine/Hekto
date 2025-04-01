
import { Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductDescription from "../sections/Product/ProductDescription/ProductDescription";
import ProductHero from "../sections/Product/ProductHero/ProductHero";
import RelatedProducts from "../sections/Product/RelatedProducts/RelatedProducts";
import Error from "../sections/Error/Error";
import { useContext } from "react";
import { ProductContext } from "../store/ProductContext";

const ProductPage: React.FC = () => {
    const params = useParams();
    const {productData, isLoading, error} = useContext(ProductContext);
  
    if (error) return <Error message={error} />
    
    const product = productData?.find(product => product.code === params.productCode);

    if (isLoading && !product) {
        return (
            <div style={{ display: "flex", justifyContent: "space-around", padding: "5rem" }}>
                <Skeleton variant="rectangular" sx={{ width: "40vw", height: "30vw", borderRadius: "2rem" }} />
                <Skeleton variant="rectangular" sx={{ width: "40vw", height: "30vw", borderRadius: "2rem" }} />
            </div>
        );
    }

    if (!product) return <Error message="Product not found" />;

    return (
        <>
            <ProductHero {...product} />
            <ProductDescription {...product} />
            <RelatedProducts />
        </>
    );
}

export default ProductPage;
