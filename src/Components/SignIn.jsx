import React, { useState,useEffect } from "react";

import person_1 from "../assets/SignUpLogin/person_1.png";
import person_2 from "../assets/SignUpLogin/person_2.png";
import person_3 from "../assets/SignUpLogin/person_3.png";
import bg_blur from "../assets/SignUpLogin/bg_blur.svg";
import random_shape from "../assets/SignUpLogin/random_shape.svg";


export default function SignIn() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [personImg, setPersonImg] = useState(person_2);
const personImages = [person_1, person_2, person_3];
  const [emailValid, setEmailValid] = useState(true);

  // Email validation
  const validateEmail = (email) => {
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isEmailValid = validateEmail(userName);

    setEmailValid(isEmailValid);

    if (isEmailValid && password) {
      alert("Login Successful!");
    }
  };

 
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
    <div className=" bg-gradiant  lg:h-dvh lg:relative lg:top-0">
      <div className="flex relative z-1 h-full w-[80%] mx-auto justify-center items-center flex-col md:flex-row">
        <div class="   flex  m-6 justify-center items-center  ">
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
        <div className=" relative mb-5  md:w-100  p-5 rounded-3xl border flex flex-col justify-center items-center ">
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
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Username"
                className={`input-form-text ${
                  !emailValid
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
                <i class="fab mt-1 fa-google text-xl  hover:text-black cursor-pointer"></i>
              </a>
            </div>
            <div className="w-full mt-3 flex flex-col items-center mt-2  ">
              <p>
                Don’t have an account?{" "}
                <a className="text-red-700 cursor-pointer underline">
                  {" "}
                  Sign up
                </a>{" "}
                now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
