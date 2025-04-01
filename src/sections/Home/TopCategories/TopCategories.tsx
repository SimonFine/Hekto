import Slider from "react-slick";
import styles from "./TopCategories.module.scss";
import { useRef } from "react";
import CategoryCircle, { CategoryCircleProps } from "../../../components/CategoryCircle/CategoryCircle";

const CATEGORIES: CategoryCircleProps[] = [
    {
        imgUrl: "/product_images/black-watches.png",
        categoryName: "Watches"
    },
    {
        imgUrl: "/product_images/headphones.png",
        categoryName: "Headphones"
    },  
    {
        imgUrl: "/product_images/laptop.png",
        categoryName: "Laptop"
    },
    {
        imgUrl: "/product_images/game-console.png",
        categoryName: "Game Console"
    }, 
    {
        imgUrl: "/product_images/shoes.png",
        categoryName: "Clothe"
    },
    {
        imgUrl: "/product_images/ring.png",
        categoryName: "Jewellery"
    },
    {
        imgUrl: "/product_images/perfume.png",
        categoryName: "Perfume"
    },
];

const TopCategories: React.FC = () => {
    const currSlide = useRef(0); // replaces usestate to track index idk if its best solution

    const settings = {
        customPaging: function (slide: number) {
            return <div className={`top-categories-dot${currSlide.current === slide ? '-active' : ''}`}></div>;
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
        dotsClass: "slick-dots top-categories-dots",
    };

    return (
        <div className={styles.topCategories}>
            <h2>Top Categories</h2>
            <div className={styles.slider}>
                <Slider {...settings}>
                    {CATEGORIES.map(category => 
                        <CategoryCircle imgUrl={category.imgUrl} categoryName={category.categoryName} key={category.categoryName}/>
                    )}
                </Slider>
            </div>
        </div>
    );
}

export default TopCategories;