import Slider from "react-slick";
import styles from "./Featured.module.scss";
import { useContext, useRef } from "react";
import { ProductContext } from "../../../store/ProductContext";
import ProductCardSimple from "../../../components/ProductCardSimple/ProductCardSimple";
import { Product } from "../../../models/product";
import { Skeleton } from "@mui/material";
import Error from "../../Error/Error";

const Featured: React.FC = () => {
    const productsContext = useContext(ProductContext);
    const currSlide = useRef(0); // replaces usestate to track index idk if its best solution
    
    const { productData, isLoading, error } = productsContext;
    
    const settings = {
        customPaging: function (slide: number) {
            return <div className={`featured-dot${currSlide.current === slide ? '-active' : ''}`}></div>;
        },
        beforeChange: (_: number, next: number) => {
            const slideIndex = next >= 4 ? next / 4 : next;
            currSlide.current = slideIndex;
        },
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        dotsClass: "slick-dots featured-dots",
    };

    if (error) return <Error message={error}/>

    return (
        <div className={styles.featured}>
            <h2>Featured Products</h2>
            { 
                isLoading ? (
                    <div className={styles.skeletons}>
                        <Skeleton variant="rectangular" sx={{ width: "30.4rem", height: "36.8rem" }} />
                        <Skeleton variant="rectangular" sx={{ width: "30.4rem", height: "36.8rem" }} />
                        <Skeleton variant="rectangular" sx={{ width: "30.4rem", height: "36.8rem" }} />
                        <Skeleton variant="rectangular" sx={{ width: "30.4rem", height: "36.8rem" }} />
                    </div>
                ) : (
                    <div className={styles.slider}>
                        <Slider {...settings}>
                            {(productData ?? []).map((product: Product) => 
                                <ProductCardSimple {...product} key={product.code}/>
                            )}
                        </Slider>
                    </div>
                )
            }
        </div>
    );
}

export default Featured;