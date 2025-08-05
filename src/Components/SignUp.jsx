import React, { useState, useEffect } from "react";

import person_1 from "../assets/SignUpLogin/person_1.png";
import person_2 from "../assets/SignUpLogin/person_2.png";
import person_3 from "../assets/SignUpLogin/person_3.png";
import bg_blur from "../assets/SignUpLogin/bg_blur.svg";
import random_shape from "../assets/SignUpLogin/random_shape.svg";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [personImg, setPersonImg] = useState(person_2);
  const personImages = [person_1, person_2, person_3];

  // Rotate person image
  useEffect(() => {
    let img_num = 0;
    const interval = setInterval(() => {
      setPersonImg(personImages[img_num]);
      img_num = (img_num + 1) % 3;
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Validators
  const validateEmail = (email) => {
    const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return pattern.test(email);
  };

  const validatePassword = (pwd) => {
    const pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/;
    return pattern.test(pwd);
  };

  // Live validation
  useEffect(() => {
    setEmailValid(validateEmail(email));
    setPasswordValid(validatePassword(password));
    setPasswordsMatch(password === confirmPassword);
  }, [email, password, confirmPassword]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (email && password && confirmPassword && emailValid && passwordValid && passwordsMatch) {
      alert("Account Created!");
    } else {
      alert("Please fill all fields correctly.");
    }
  };

  return (
    <div className="bg-gradiant lg:h-dvh lg:relative lg:top-0">
      <div className="flex relative z-1 h-full w-[80%] mx-auto justify-center items-center flex-col md:flex-row">
        {/* Left illustration */}
        <div className="flex m-6 justify-center items-center">
          <div className="w-full relative flex justify-center items-center">
            <img className="w-full md:w-100" src={random_shape} alt="shape" />
            <img className="absolute h-full" src={personImg} alt="person" />
          </div>
        </div>

        {/* Sign up form */}
        <div className="relative mb-5 w-full md:w-140 overflow-hidden p-5 rounded-3xl border flex flex-col justify-center items-center">
          <img
            className="absolute object-cover size-full -z-1"
            src={bg_blur}
            alt="background blur"
          />
          <p className="text-2xl font-bold">Sign up</p>

          <div className="mt-5 w-full flex flex-col items-center">
            <form
              onSubmit={handleSubmit}
              className="flex sm:w-150 flex-col items-center [&>input]:w-full sm:[&>input]:w-1/2  [&>input]:outline [&>*]:p-3 [&>*]:px-6  [&>*]:rounded-3xl "
            >
              {/* Email */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className={`input-form-text ${
                  (!emailValid || (formSubmitted && !email))
                    ? "border-red-700"
                    : "border-black-400"
                }`}
              />
              {formSubmitted && !email && (
                <p className="text-red-500 text-sm mt-1">Email is required</p>
              )}

              {/* Password */}
              <br />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className={`input-form-text ${
                  (!passwordValid || (formSubmitted && !password))
                    ? "border-red-500"
                    : "border-black-400"
                }`}
              />
              {formSubmitted && !password && (
                <p className="text-red-500 text-sm mt-1">Password is required</p>
              )}
              {!passwordValid && password && (
                <p className="text-red-700 text-sm">
                  Min 8 chars, 1 number, 1 symbol
                </p>
              )}

              {/* Confirm Password */}
              <br />
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className={`input-form-text ${
                  (!passwordsMatch || (formSubmitted && !confirmPassword))
                    ? "border-red-500"
                    : "border-black-400"
                }`}
              />
              {formSubmitted && !confirmPassword && (
                <p className="text-red-500 text-sm mt-1">Confirm password is required</p>
              )}
              {!passwordsMatch && confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  Passwords do not match
                </p>
              )}

              {/* Submit */}
              <br />
              <button
                type="submit"
                className=" flex justify-center button-goldenflare-lite"
              >
                Sign Up
              </button>
            </form>

            <div className="mt-3 max-w-100 bg-amber-800 h-0.5 w-1/2"></div>

            {/* Alt sign up */}
            <div className="w-full flex flex-col items-center mt-2">
              <a
                className="bg-trinidad-400 p-3 px-5 text-black-600 hover:bg-trinidad-500 hover:text-white transition duration-200"
                href="#"
              >
                Or sign up with{" "}
                <i className="fab fa-google text-xl hover:text-black cursor-pointer"></i>
              </a>
            </div>

            {/* Link to sign in */}
            <div className="w-full mt-3 flex flex-col items-center">
              <p>
                Already have an account?{" "}
                <a className="text-red-700 cursor-pointer underline">Sign in</a>{" "}
                now
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
