import { useEffect, useState } from "react";
import "./App.css";
import Main from "./netflixlogin/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./netflixlogin/Login/Login";
import Register from "./netflixlogin/Register/Register";
import Mainpage from "./netflixmainpage/Mainpage/Mainpage";
import Mnavabr from "./netflixmainpage/main_navbar/Mnavabr";
import Tvlist from "./netflixmainpage/pages/Tvlist/Tvlist";
import {
  useDaycollectionmovieQuery,
  useTopratedQuery,
  useTreandingQuery,
  useTvQuery,
  useWeekcollectionmovieQuery,
} from "./Service/Fetchapi";
import Singlecontent from "./netflixmainpage/pages/Singlecontent/Singlecontent";

function App() {
  const [loginflag, setflag] = useState(localStorage.getItem("flag"));
  const [mapdata, setmapdata] = useState();
  const [segregate, setsegregate] = useState();
  const { data: treanding } = useTreandingQuery();
  // console.log(treanding?.results);
  const { data: Tv } = useTvQuery();
  const { data: movielist } = useTopratedQuery();
  const { data: webseries } = useWeekcollectionmovieQuery();
  // console.log(Tv);

  const getmenu = (name) => {
    if (name === "Trending") {
      setmapdata(treanding?.results);
    } else if (name === "Tv") {
      setmapdata(Tv?.results);
    } else if (name === "Movielist") {
      setmapdata(movielist?.results);
    } else {
      setmapdata(webseries?.results);
    }
  };

  const rendervalue = (value) => {
    setflag(value);
  };

  return (
    <BrowserRouter>
      {loginflag && <Mnavabr rendervalue={rendervalue} getmenu={getmenu} />}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/signin"
          element={<Login loginflag={loginflag} rendervalue={rendervalue} />}
        />
        <Route path="/signup" element={<Register loginflag={loginflag} />} />
        <Route path="/netflix_home" element={<Mainpage />} />
        <Route path="/treanding_movie" element={<Tvlist mapdata={mapdata} />} />
        <Route path="/tv" element={<Tvlist mapdata={mapdata} />} />
        <Route path="/movielist" element={<Tvlist mapdata={mapdata} />} />
        <Route path="/webseries" element={<Tvlist mapdata={mapdata} />} />
        <Route path="/singlecontent/:id" element={<Singlecontent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
