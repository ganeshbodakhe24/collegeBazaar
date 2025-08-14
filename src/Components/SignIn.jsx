import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import API from "./API";

import person_1 from "../assets/SignUpLogin/person_1.png";
import person_2 from "../assets/SignUpLogin/person_2.png";
import person_3 from "../assets/SignUpLogin/person_3.png";
import bg_blur from "../assets/SignUpLogin/bg_blur.svg";

import random_shape from "../assets/SignUpLogin/random_shape.svg";
import Footer from "./BasicComponents/footer";
import Nav from "./BasicComponents/Nav";
import Loading from "./Loading";
import MsgPopUp from "./MsgPopUp";


export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [personImg, setPersonImg] = useState(person_2);
  const personImages = [person_1, person_2, person_3];
  const [emailValid, setEmailValid] = useState(true);

  const [loading, setLoading] = useState(false);
  const [showMsg, setShowMsg] = useState(false);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("info");

  // Email validation
  const validateEmail = (email) => {
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setShowMsg(false);
    setLoading(true);

    const isEmailValid = validateEmail(email);

    setEmailValid(isEmailValid);

    if (isEmailValid && password) {

      try {
        // Send login data to backend
        const response = await API.post("user/login", {
          email,
          password,
        });

        // On success, store token
        const token = response.data.token; // adjust key based on your backend response
        localStorage.setItem("token", token);
        setLoading(false);
        alert("Login successful!");
      }
      catch (error) {
        if (error.response) {
          // Backend responded with error status (4xx, 5xx)
          setLoading(false);
          setShowMsg(true);
          setMsgType("error");
          console.log(error.response.data.error)
          setMsg(error.response.data.error);
        } else if (error.request) {
          // No response received
          setLoading(false);
          setShowMsg(true);
          setMsgType("error");
          setMsg("server not serponding");
        } else {
          // Any other error
          setLoading(false);
          setShowMsg(true);
          setMsgType("error");
          setMsg("Some thing went wrong");
        }
      }
    }
    else {
      setShowMsg(true);
      setMsgType("error");
      setMsg("Please fill all fields correctly.");
    }

  }


  useEffect(() => {
    let img_num = 0;
    const interval = setInterval(() => {
      setPersonImg(personImages[img_num]);
      img_num = (img_num + 1) % 3; // 0 → 1 → 2 → 0 ...
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);




  return (
    <>
      <Nav></Nav>
       {showMsg ? <MsgPopUp message={msg} msgType={msgType}></MsgPopUp> : ""}
      {loading ? <Loading></Loading> : ""}
    
      <div className=" bg-gradiant   lg:relative lg:top-0">
        <div className="flex relative z-1 h-full w-[80%] mx-auto justify-center items-center flex-col md:flex-row">
          <div className="   flex  m-6 justify-center items-center  ">
            <div className="w-full relative flex justify-center items-center ">
              <img className="w-full md:w-100" src={random_shape}></img>
              <img
                className="absolute h-full  "
                src={personImg}
                alt="person_1"
              ></img>
            </div>
          </div>

          {/* login form */}
          <div className=" relative my-5  md:w-100  p-5 rounded-3xl  flex flex-col justify-center items-center ">
            <img
              className="absolute object-cover  size-full -z-1"
              src={bg_blur}
            ></img>
            <p className="text-2xl font-bold">Sign in</p>
            <div className="mt-5 w-full flex   flex-col items-center   ">
              <form
                onSubmit={handleSubmit}
                className="flex  sm:w-150 flex-col items-center [&>input]:w-full sm:[&>input]:w-1/2  [&>input]:outline   [&>*]:p-3 [&>*]:px-6  [&>*]:rounded-3xl [&>*]:text-black-600"
              >
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Username"
                  className={`input-form-text ${!emailValid
                    ? "border-red-500 text-red-800"
                    : "border-black-400"
                    }`}
                />
                <br />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="input-form-text"
                />

                <br />

                <button
                  type="submit"
                  value="Login"
                  className="w-1/3 flex justify-center button-goldenflare-lite"
                >
                  Login
                </button>
              </form>
              <div className="mt-3 max-w-100 bg-amber-800 h-0.5 w-1/2 "></div>

              <div className="w-full flex flex-col items-center mt-2  ">
                <br></br>
                <a
                  className="bg-trinidad-400 p-3 px-5  text-black-600 hover:bg-trinidad-500 hover:text-white transition duration-200"
                  href="#"
                >
                  Or Login with{" "}
                  <i className="fab mt-1 fa-google text-xl  hover:text-black cursor-pointer"></i>
                </a>
              </div>
              <div className="w-full mt-3 flex flex-col items-center mt-2  ">
                <p>
                  Don’t have an account?{" "}
                  <Link to="/signUp" className="text-red-700 cursor-pointer underline">
                    {" "}
                    Sign Up
                  </Link>{" "}
                  now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
