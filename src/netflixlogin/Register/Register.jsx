import React, { useState } from "react";
import "./Register.css";
import Navbar from "../Navbar/Navbar";
import { registerApi } from "../Api";
import { Link } from "react-router-dom";
import Mainpage from "../../netflixmainpage/Mainpage/Mainpage";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { confidential } from "../../slicer/Loginslicer";

const Register = ({ loginflag }) => {
  const dispatch=useDispatch();
  const [inputfild, setinputfild] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const registerinput = (e) => {
    setinputfild({ ...inputfild, [e.target.name]: e.target.value });
  };
  const submitRegister = async () => {
    const data = await registerApi(inputfild);
    
    if (data.success) {
      Swal.fire("Good job!", "New user successfully registered!", "success");
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: data?.message,
        // footer: '<a href="">Why do I have this issue?</a>'
      });
    }
    // console.log(data);
  };
  return (
    <>
      {loginflag ? (
        <Mainpage />
      ) : (
        <>
          <div className="Register_conatiner">
            <Navbar />
            <div className="conatiner_Register">
              <div className="Register_box">
                <h1>Create a New User</h1>
                <div className="inputbox">
                  <div className="input1">
                    <div className="left">
                      <input
                        type="text"
                        placeholder="Enter your First name"
                        name="firstname"
                        onChange={registerinput}
                        value={inputfild.firstname}
                      />
                    </div>
                    <div className="right">
                      <input
                        type="text"
                        placeholder="Enter your Last name"
                        name="lastname"
                        onChange={registerinput}
                        value={inputfild.lastname}
                      />
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    className="inputdemo"
                    name="email"
                    onChange={registerinput}
                    value={inputfild.email}
                  />
                  <input
                    type="password"
                    placeholder="Enter your Password"
                    className="inputdemo"
                    name="password"
                    onChange={registerinput}
                    value={inputfild.password}
                  />

                  <Link to="/signin">
                    <button className="submitRegister" onClick={submitRegister}>
                      Sign up
                    </button>
                  </Link>
                  <p>
                    Allready to Netflix?
                    <span> Sign In now.</span>
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

export default Register;
