import React from "react";
import catimg from "./Design/cat_img_3.png";
import questionMark from "./Design/question_mark.png";
import catfoot from "./Design/cat_foot.jpg"
function HowItWorks() {
  const infoList = [
    {
      title: "Create Your Free Account",
      description: "Sign up with your college email in seconds.",
    },
    {
      title: "Post or Browse Items",
      description: "Upload photos, set your price, and list easily.",
    },
    {
      title: "Connect & Trade",
      description:
        "Message sellers, arrange pick‑up, and enjoy great deals on campus.",
    },
    // You can add more items here
  ];
  return (
    <>
      <div className="  bg-cover bg-center mt-20  " style={{backgroundImage:`url(${catfoot})`}}>
        <div className=" container flex flex-col md:flex-row mx-auto px-4  flex ">
          <div className=" relative flex flex-col w-1/4">
            <div className=" flex relative justify-end p-2">
              <div className="absolute left-full w-[200px] md:w-full p-4 -top-20 bg-gradient-to-r  to-white  border-2 border-black-400 border-b-4 border-r-4 rounded-e-xl rounded-t-xl shadow-xl hover:shadow-2xl transition-all duration-300">
  <h1 className="text-xl md:text-2xl font-semibold text-yellow-900">How it's Works ?</h1>
</div>
              <img
                className="w-20 animate-wiggle-rotate"
                src={questionMark}
                alt="Question Mark"
              />
            </div>

            <div className="flex justify-center items-center ">
              <img className="w-60" src={catimg} alt="Cat" />
            </div>
          </div>

          <div className=" flex mt-10  flex-col   w-1/1 justify-end  items-end">
          {infoList.map((data,index)=>(
                <div key={index} className="bg-gradiant w-3/4  shadow-lg  m-3 border-gray-200 px-5 py-4 rounded-3xl  space-y-2 hover:shadow-xl transition duration-200">
              <p className="font-bold text-2xl  text-gray-800">
                {index+1}. {data.title}
              </p>
              <p className="text-gray-700">
                {data.description}
              </p>
            </div>
          ))}
          
          </div>
        </div>
      </div>
    </>
  );
}
export default HowItWorks;
