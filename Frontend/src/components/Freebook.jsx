// import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"; // Ensure the correct path to list.json
import Cards from "./Cards";

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");
  console.log("Filtered Data:", filterData);

  const settings = {
    dots: true,
    infinite: filterData.length > 3, // Infinite only if items > 3
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: filterData.length > 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 slider-container">
      <div>
        <h1 className="font-semibold text-xl pb-2 ">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis esse
          asperiores tenetur. Ab non vero error saepe necessitatibus quasi nam
          velit dolores itaque officia autem fugit, molestias consequatur
          ratione magni deserunt? Quam quis earum aliquid ea a, incidunt
          maiores sint.
        </p>
      </div>

      <div className="slider-container">
        {filterData.length > 0 ? (
          <Slider {...settings}>
            {filterData.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        ) : (
          <p>No Free Courses Available</p>
        )}
      </div>
    </div>
  );
}

export default Freebook;
