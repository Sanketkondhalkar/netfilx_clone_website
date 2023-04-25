import React, { useEffect } from "react";
import "./Mainpage.css";
import Popular from "./Popular/Popular";
import Top from "./Top/Top";
import Trending from "./Trending/Trending";
import Main from "../../netflixlogin/Main/Main";
import { useNavigate } from "react-router-dom";

const Mainpage = () => {
  const loginflag = localStorage.getItem("flag");

  // console.log("main page me aaya");
  // console.log(loginflag);
  const navigate = useNavigate();
  const data = [
    "https://v3img.voot.com/resizMedium,w_1280,h_720/v3Storage/assets/16x9-1674813309656.jpg",
    "https://m.media-amazon.com/images/G/31/AmazonVideo/2019/MLP.jpg",
  ];
  const randomindex = () => {
    const index = Math.floor(Math.random() * data.length);
    return index;
  };

  useEffect(() => {
    const flag = localStorage.getItem("flag");
    // console.log(flag);
    if (flag === null) {
      navigate("/");
    }
  }, []);

  return (
    <>
      {loginflag ? (
        <>
          <div className="Mainpage_home" style={{ background: "red" }}>
            <img src={data[randomindex()]} alt="" />
          </div>
          <Trending />
          <Top />
          <Popular />
        </>
      ) : (
        <Main />
      )}
    </>
  );
};

export default Mainpage;
