import { useParams } from "react-router-dom";
import "./Singlecontent.css";
import { FaClipboardList } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import {
  useGetmoviedataQuery,
  useGetsimilarmoviedataQuery,
} from "../../../Service/Fetchapi";
// import YouTube from "react-youtube";

const Singlecontent = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  goToTop();
  const { id } = useParams();
  // console.log(id);
  const { data } = useGetmoviedataQuery(id);
  // console.log(data);
  const { data: similar } = useGetsimilarmoviedataQuery(id);

  // const height = window.innerHeight;
  // console.log(height);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    <div
      className="siglecontainer"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${data?.backdrop_path}")`,
        backgroundSize: "100% 100%",
        objectFit: "cover",
        height: similar?.results?.length > 0 ? "392vh" : "90vh",
      }}
    >
      <div
        className="bg_container"
        style={{
          height: similar?.results?.length > 0 ? "auto" : "auto",
        }}
      >
        <div className="content">
          <div className="left">
            <img
              src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${data?.poster_path}`}
              alt=""
            />
          </div>
          <div className="right">
            <h1>{data?.title}</h1>

            <div className="info">
              <div className="info_aside">
                <div className="left_info_aside">
                  <p style={{ display: data?.tagline === "" ? "none" : "" }}>
                    <span className="Heading"> Tagline:</span>
                    <br></br>
                    {data?.tagline}
                  </p>
                </div>
                <div className="right_info_aside">
                  <p>
                    <span className="Heading"> Status:</span>
                    <br></br>
                    {data?.status}
                  </p>
                </div>
              </div>
              {/* //second part */}
              <div className="info_aside">
                <div className="left_info_aside">
                  <p>
                    {" "}
                    <span className="Heading"> Rating:</span>
                    <br></br>
                    {data?.vote_average}/10
                  </p>
                </div>
                <div className="right_info_Aside">
                  <p>
                    {" "}
                    <span className="Heading"> Release date:</span>
                    <br></br>
                    {data?.release_date}
                  </p>
                </div>
              </div>
              {/* //thiird part */}
              <p>
                {" "}
                <span className="Heading"> Small overview:</span>
                <br></br>
                {data?.overview}
              </p>
              <p className="circlebox">
                <div className="circle">
                  <FaClipboardList size={20} />
                </div>
                <div className="circle">
                  <AiFillHeart size={20} />
                </div>
                <div className="circle">
                  <BsFillBookmarkFill size={20} />
                </div>
                <div className="circle">
                  <AiFillStar size={20} />
                </div>
              </p>
              <div className="info_aside">
                <div className="left_info_aside">
                  <div className="category">
                    <span className="Heading"> Category:</span>
                    <br></br>
                    {data?.genres?.map((item, index) => {
                      return <button key={index}>{item.name}&nbsp;</button>;
                    })}
                  </div>
                </div>
                <div className="right_info_aside">
                  <div className="production">
                    <span className="Heading">Production Company:</span>
                    <br></br>
                    {data?.production_companies?.map((item, index) => {
                      return <button key={index}>{item.name}&nbsp;</button>;
                    })}
                  </div>
                </div>
              </div>
              <div className="info_aside">
                <div className="left_info_aside">
                  <p style={{ display: data?.budget === 0 ? "none" : "" }}>
                    <span className="Heading"> budget</span>:<br></br>$
                    {data?.budget}/-&nbsp;
                  </p>
                </div>
                <div className="right_info_aside">
                  <p style={{ display: data?.revenue === 0 ? "none" : "" }}>
                    <span className="Heading"> revenue:</span>
                    <br></br>${data?.revenue}
                    /-&nbsp;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {similar?.results?.length > 0 && (
          <div className="similarmovie">
            <h1 className="similarmovieheading">Similar Movies</h1>
            <div className="container_similar">
              {similar?.results?.map((item) => {
                return (
                  <div className="demo" key={item.id}>
                    <img
                      src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}
                      alt=""
                    />
                    <h3>{item.original_title}</h3>
                    <p>release_date:{item.release_date}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Singlecontent;
