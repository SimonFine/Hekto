
import { Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";
import { useProductCodeFetch } from "../hooks/useProductCodeFetch";
import ProductDescription from "../sections/Product/ProductDescription/ProductDescription";
import ProductHero from "../sections/Product/ProductHero/ProductHero";
import RelatedProducts from "../sections/Product/RelatedProducts/RelatedProducts";
import Error from "../sections/Error/Error";

const ProductPage: React.FC = () => {
    const params = useParams();
    const {productData, isLoading, error} = useProductCodeFetch(params.productCode ?? '');  
  
    if (error) return <Error message={error} />
    
    const [product] = productData ?? [];

    return (
        <>
            {
                isLoading ? (
                    <div style={{display: "flex", justifyContent: "space-around", padding: "5rem"}}>
                        <Skeleton variant="rectangular" sx={{ width: "40vw", height: "30vw", borderRadius: "2rem"}} />
                        <Skeleton variant="rectangular" sx={{ width: "40vw", height: "30vw", borderRadius: "2rem"}} />
                    </div>
                ) : (
                    <>
                        <ProductHero {...product}/>
                        <ProductDescription {...product} />
                        <RelatedProducts />
                    </>
                )
            }
        </>
    );
}

export default ProductPage;
