import axios from "axios";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./Topslider.css";
import { useTopratedQuery } from "../../../../Service/Fetchapi";

const Topslider = () => {
  const { data, isLoading, isError } = useTopratedQuery();
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    pauseOnHover: false,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
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
    <>
      <div>
        <Slider {...settings}>
          {data?.results?.map((item) => {
            return (
              <div key={item?.id} className="box">
                <Link to={`/singlecontent/${item.id}`}>
                  <img
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                    alt=""
                  />
                  <p>{item?.title}</p>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Topslider;
