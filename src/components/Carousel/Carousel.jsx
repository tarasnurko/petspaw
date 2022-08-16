import React, { useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styles from "./Carousel.module.scss";

const Carousel = (props) => {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (prev, next) => {
      setCurrentSlide(next);
    },
    appendDots: (dots) => (
      <ul>
        {dots.map((item, index) => (
          <li key={index}>{item.props.children}</li>
        ))}
      </ul>
    ),
    dotsClass: styles.dots,
    customPaging: (index) => (
      <div
        className={
          index === currentSlide ? `${styles.dot} ${styles.active}` : styles.dot
        }
      ></div>
    ),
  };

  return (
    <div
      className={`${
        !darkMode ? styles.container : `${styles.container} ${styles.dark}`
      }`}
    >
      <Slider {...settings}>
        {props.images.map((image) => (
          <img
            key={image.id}
            className={styles.img}
            src={image.url}
            alt="cat"
          />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
