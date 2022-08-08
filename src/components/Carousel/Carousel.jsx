import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import styles from "./Carousel.module.scss";

const Carousel = () => {
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
    <div className={styles.container}>
      <Slider {...settings}>
        <img
          className={styles.img}
          src="https://images.pexels.com/photos/12577819/pexels-photo-12577819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        />

        <img
          className={styles.img}
          src="https://images.pexels.com/photos/13064584/pexels-photo-13064584.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        />

        <img
          className={styles.img}
          src="https://images.pexels.com/photos/7008379/pexels-photo-7008379.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        />

        <img
          className={styles.img}
          src="https://images.pexels.com/photos/9320207/pexels-photo-9320207.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        />
      </Slider>
    </div>
  );
};

export default Carousel;
