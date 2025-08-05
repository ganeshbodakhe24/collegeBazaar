import React from "react";
import welcomeImg from "../../assets/welcome_img.png";
import sigzagline from "./Design/sigzagline.svg";
import settingIcon from "./Design/setting_icon.svg"
function WelcomePoster() {
  const quots = [
    "Buy, sell, and swap textbooks, gadgets, gear, and more with fellow students.",
    "Turn your old stuff into someone’s new favorite",
    "Your clutter is another student’s treasure",
  ];
  return (
    <>
      <div className="relative w-9/10 mt-4 m-auto flex  justify-center">

        <img className="absolute top-3 right-7 w-20 md:w-30 brightness-200" src={sigzagline}></img>
        <img className="absolute  bottom-0.3 top-70 md:-top-5 md:right-100 right-20 brightness-105 w-50 md:w-20 -z-10 animate-spin "  style={{ animation: "spin 15s linear infinite" }} src={settingIcon}></img>
        <div className="  flex flex-col  justify-around md:flex-row md:items-center md:w-full  z-1">
            <div className="block md:hidden overflow">
            <img src={welcomeImg}></img>
          </div>
          <div className="flex mt-2 mb-5 flex-col ">
            <h1 className="font-bold text-goldenflare-900 text-5xl">
              Welcome to
            </h1>
        
            <h1 className="font-bold  text-4xl text-trinidad-400">CollegeBazaar</h1>
            <p className="tracking-wider text-xl font-thin pt-1">
              Your Campus Marketplace
            </p>
            <ul>
              {quots.map((data, index) => (
                <li className="pt-5 text-xl" key={index}>
                  {data}
                </li>
              ))}
            </ul>
            <br></br>
            <div className="w-full flex justify-center md:justify-start">
            <button className="getstart-btn animate-gradient-move ">Get Start Now</button>
            </div>
          </div>
          {/* poster img */}
          <div className="hidden  md:block ">
            <img  src={welcomeImg}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePoster;
