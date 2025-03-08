import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
  let images = [
    {
      id: 1,
      image:
        "https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2025%2F01%2F1920x490-2basic.png&w=1920&q=75",
    },
    {
      id: 2,
      image:
        "https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2025%2F01%2Fpink-beauty-jan.png&w=1920&q=75",
    },
    {
      id: 3,
      image:
        "https://shop.shajgoj.com/_next/image?url=https%3A%2F%2Fbk.shajgoj.com%2Fstorage%2F2025%2F02%2Fvalentines-day-hero-banner-1920x490.png&w=1920&q=75",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="py-2">
      <Slider {...settings}>
        {images.map((item, index) => (
          <img src={item.image} alt="" />
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
