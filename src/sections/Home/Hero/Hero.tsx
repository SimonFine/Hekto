import Slider from "react-slick";
import styles from "./Hero.module.scss";
import { useState } from "react";
import Slide, { SlideProps } from "./Slide";

const slide1: SlideProps = {
  mainImgUrl: "assets/images/headphones.png",
  bodyText: "Best Headphones For Your Life....",
  headerText: "New Trendy Collection Headphones",
  bgColor: "purple"
}

const slide2: SlideProps = {
  mainImgUrl: "assets/images/headphones-red.png",
  bodyText: "Whole Lotta Red Red....",
  headerText: "Too Pink, Could Blend Better",
  bgColor: "red"
}

const slide3: SlideProps = {
  mainImgUrl: "assets/images/headphones-yellow.png",
  bodyText: "Yellow Like Sunflower Or Sun Yay....",
  headerText: "This Yellow Is Not Bad",
  bgColor: "yellow"
}

const Hero: React.FC = () => {
  const [currSlide, setCurrSlide] = useState(0);

  const settings = {
    customPaging: function (slide: number) {
      return <div className={`hero-dot${currSlide === slide ? '-active' : ''}`}></div>;
    },
    beforeChange: (_: number, next: number) => {
      setCurrSlide(next);
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "slick-dots hero-dots",
  };

  return (
    <div className={styles["slider-container"]}>
      <Slider {...settings}>
        <Slide {...slide1}/>
        <Slide {...slide2}/>
        <Slide {...slide3}/>
      </Slider>
    </div>
  );
};

export default Hero;
