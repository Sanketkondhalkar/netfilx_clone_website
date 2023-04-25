import React, { useEffect, useState } from "react";
import "./Login.css";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";
import { loginApi } from "../Api";
import { useDispatch, useSelector } from "react-redux";
import { confidential, flag, logindata } from "../../slicer/Loginslicer";
import { useNavigate } from "react-router-dom";
import Mainpage from "../../netflixmainpage/Mainpage/Mainpage";

const Login = ({ rendervalue }) => {
  const dispatch = useDispatch();
  const { loginflag } = useSelector((state) => state.loginApidata);
  const navigate = useNavigate();
  const [name, setname] = useState();
  // console.log("loginflag", loginflag);
  const [loginfield, setloginfield] = useState({
    email: "",
    password: "",
  });

  const logininput = (e) => {
    setloginfield({ ...loginfield, [e.target.name]: e.target.value });
  };

  const submitLogin = async () => {
    const data = await loginApi(loginfield);
    dispatch(confidential(data));

    if (data.success) {
      Swal.fire("Good job!", data?.message, "success");
      dispatch(logindata(data.success));
      localStorage.setItem("flag", true);
      localStorage.setItem("userdata", data.data);

      rendervalue(true);
      navigate("/netflix_home");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data?.message,
      });
    }
  };

  // console.log(loginfield);
  return (
    <>
      {loginflag ? (
        <Mainpage />
      ) : (
        <>
          <div className="Login_conatiner">
            <Navbar />
            <div className="conatiner_login">
              <div className="login_box">
                <h1>Sign in</h1>
                <div className="inputbox">
                  <div className="email">
                    <input
                      type="text"
                      placeholder="Enter your Email Id"
                      name="email"
                      onChange={logininput}
                      value={loginfield.email}
                    />
                  </div>
                  <div className="password">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={logininput}
                      value={loginfield.password}
                    />
                  </div>
                  <button className="submitlogin" onClick={submitLogin}>
                    Sign in
                  </button>
                  {/* <div className="buttondata">
              <div className="left">
                <input type="checkbox" name="" id="" />
                <lable className="need">Remember me</lable>
              </div>
              <div className="right">
                <p className="need">Need Help?</p>
              </div>
            </div> */}
                  <p>
                    New to Netflix?
                    <span> Sign up now.</span>
                  </p>

                  <lable>
                    This page is protected by Google reCAPTCHA to ensure you're
                    not a bot. Learn more.
                  </lable>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
