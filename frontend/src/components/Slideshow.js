import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const slides = [
  {
    image:
      "https://i0.wp.com/www.japancitytour.com/wp/wp-content/uploads/2021/02/dragon-ball.jpeg?resize=300%2C400&ssl=1",
    alt: "Slideshow 1",
  },
  {
    image:
      "https://bloximages.newyork1.vip.townnews.com/tampabeacon.com/content/tncms/assets/v3/editorial/e/b7/eb7cf2de-014d-11ee-bbb7-d784027099d2/6479f623017a8.image.jpg?resize=375%2C500",
    alt: "Slideshow 2",
  },
  {
    image:
      "https://sightseeingexpress.com/wp-content/uploads/2019/09/jump-shop-daimaru-shinsaibashi-33.jpg",
    alt: "Slideshow 3",
  },
  {
    image:
      "https://i0.wp.com/www.japancitytour.com/wp/wp-content/uploads/2021/02/dragon-ball.jpeg?resize=300%2C400&ssl=1",
    alt: "Slideshow 4",
  },
  {
    image:
      "https://bloximages.newyork1.vip.townnews.com/tampabeacon.com/content/tncms/assets/v3/editorial/e/b7/eb7cf2de-014d-11ee-bbb7-d784027099d2/6479f623017a8.image.jpg?resize=375%2C500",
    alt: "Slideshow 5",
  },
  {
    image:
      "https://lemiapp.com/api/v3/fullsize?url=https://lemi.travel/uploads/picture-1586698314653.jpg",
    alt: "Slideshow 6",
  },
  {
    image:
      "https://i0.wp.com/www.japancitytour.com/wp/wp-content/uploads/2021/02/dragon-ball.jpeg?resize=300%2C400&ssl=1",
    alt: "Slideshow 7",
  },
  {
    image:
      "https://bloximages.newyork1.vip.townnews.com/tampabeacon.com/content/tncms/assets/v3/editorial/e/b7/eb7cf2de-014d-11ee-bbb7-d784027099d2/6479f623017a8.image.jpg?resize=375%2C500",
    alt: "Slideshow 8",
  },
  {
    image:
      "https://thumbs.dreamstime.com/b/one-piece-characters-tokyo-tower-japan-201172278.jpg",
    alt: "Slideshow 9",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Slideshow = () => {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={3000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        containerClass="carousel-container"
        style={{ height: "100%" }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: "relative",
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slideshow;
