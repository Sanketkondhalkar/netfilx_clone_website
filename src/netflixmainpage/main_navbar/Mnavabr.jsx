import React, { useEffect, useState } from "react";
import "./Mavbar.css";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
// import Mininavbar from "./mininavbar/Mininavbar";

const Mnavabr = ({ rendervalue, getmenu }) => {
  const navigate = useNavigate();
  const {
    loginApidata: { userdata },
  } = useSelector((state) => state);
  console.log(userdata?.data?.firstname);

  const logout = (data) => {
    Swal.fire("Good job !", "You heve successfully logout!", "success");
    localStorage.clear();
    navigate("/");
    rendervalue(false);
  };

  return (
    <>
      <div className="navbar_cntainer">
        <Link to="/netflix_home">
          <div className="left">
            <img src="\public\logo\logo.png" alt="" />
          </div>
        </Link>
        <div className="right">
          <ul>
            <Link to="/treanding_movie">
              <li onClick={() => getmenu("Trending")}> Trending</li>
            </Link>
            <Link to="/tv">
              <li onClick={() => getmenu("Tv")}>Tv </li>
            </Link>
            <Link to="/movielist">
              <li onClick={() => getmenu("Movielist")}>Movielist </li>
            </Link>
            <Link to="/webseries">
              <li onClick={() => getmenu("Webseries")}>Webseries </li>
            </Link>
          </ul>

          <div className="user">
            <div className="user_profile">
              <img
                src="https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png"
                alt=""
              />
            </div>
            <span>{userdata?.data?.firstname}</span>
          </div>
          <div className="search_input">
            <button onClick={() => logout(false)}>Logout</button>
          </div>
        </div>
      </div>
      {/* <Mininavbar  getmenu={getmenu}/> */}
    </>
  );
};

export default Mnavabr;
