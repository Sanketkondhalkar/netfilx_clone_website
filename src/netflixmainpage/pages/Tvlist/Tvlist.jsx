import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Tvlist.css";

const Tvlist = ({ mapdata }) => {
  // console.log(mapdata);
  return (
    <div className="movilist_container">
      <div className="flex">
        {mapdata?.map((item) => {
          return (
            <div className="demo" key={item?.id}>
              <Link to={`/Singlecontent/${item?.id}`}>
                <img
                  src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item?.poster_path}`}
                  alt=""
                />

                <p>{item?.original_name}</p>
                <p>{item?.original_title}</p>
              </Link>
            </div>
          );
        })}
      </div>
      {/* <div className="buttons">
        {buttondata.map((item, index) => {
          return (
            <button key={index} onClick={() => getdata(item)}>
              {item}
            </button>
          );
        })}
      </div> */}
    </div>
  );
};

export default Tvlist;
