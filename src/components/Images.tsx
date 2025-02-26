import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImagesSlider: React.FC = () => {
  const images = [
    "/001.jpeg", "/002.jpeg", "/003.jpeg", "/004.jpeg", "/005.jpeg",
    "/006.jpeg", "/007.jpeg", "/008.jpeg", "/009.jpeg", "/010.jpeg"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="max-w-5xl mx-auto text-center py-8">
      <h2 className="text-3xl font-bold mb-6">Stories through images</h2>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <img src={src} alt={`Slide ${index + 1}`} className="rounded-xl w-full h-64 object-cover shadow-md" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImagesSlider;
