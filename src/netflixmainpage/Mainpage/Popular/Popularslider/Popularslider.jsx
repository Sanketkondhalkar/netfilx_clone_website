import axios from "axios";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./Popularslider.css";
import { useTvQuery, useWebseriesQuery } from "../../../../Service/Fetchapi";

const Popularslider = ({ flag }) => {
  const {
    data: webseries,
    isError: webseriesIsError,
    isLoading: webseriesIsLoading,
  } = useWebseriesQuery();
  const { data: Tv, isError: TvIsError, isLoading: TvIsLoading } = useTvQuery();

  // console.log(webseries);
  // if (TvIsLoading) {
  //   return <h1>Loading data.........</h1>;
  // }
  // if (webseriesIsLoading) {
  //   return <h1>Loading data.........</h1>;
  // }
  var settings = {
    dots: false,
    infinite: true,
    pauseOnHover: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
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
      {flag ? (
        <div>
          <Slider {...settings}>
            {webseries?.results?.map((item) => {
              return (
                <div key={item?.id} className="box">
                  <Link to={`/singlecontent/${item?.id}`}>
                    <img
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                      alt=""
                    />
                    <p>{item?.original_title}</p>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      ) : (
        <div>
          <Slider {...settings}>
            {Tv?.results?.map((item) => {
              return (
                <div key={item?.id} className="box">
                  <Link to={`/singlecontent/${item?.id}`}>
                  <img
                    src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                    alt=""
                  />
                  <p>{item?.original_name}</p>
                  </Link>
                </div>
              );
            })}
          </Slider>
        </div>
      )}
    </>
  );
};

export default Popularslider;
