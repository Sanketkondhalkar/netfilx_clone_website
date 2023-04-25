import React, { useEffect } from "react";
import "./Main.css";
import Navbar from "../Navbar/Navbar";

import Separatore1 from "../separator1/Separatore1";
import Separatore2 from "../separator2/separator2";
import Separatore3 from "../separator3/Separatore3";
import Separatore4 from "../separator4/separator4";
import Mainpage from "../../netflixmainpage/Mainpage/Mainpage";
import { Link } from "react-router-dom";

const Main = () => {
  const loginflag = localStorage.getItem("flag");

  const CustomMain = () => {
    return (
      <>
        <div className="home_container">
          <Navbar />
          <div className="home_main_div">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h4>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            <Link to="/signin">
              {" "}
              <button className="home_button">Get started </button>
            </Link>
          </div>
        </div>
        <hr />
        <Separatore1 />
        <hr />
        <Separatore2 />
        <hr></hr>
        <Separatore3 />
        <hr></hr>
        <Separatore4 />
      </>
    );
  };
  // console.log(loginflag);
  return (
    <>
      {loginflag === true && <Mainpage />}
      {(loginflag === undefined || loginflag === null) && <CustomMain />}
    </>
  );
};

export default Main;
