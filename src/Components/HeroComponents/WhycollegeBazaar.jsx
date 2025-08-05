import React from "react";
import hand_shaking_img from "./Design/hand_shaking_img.png"
function WhycollegeBazaar() {
    const features = [
        {
            title: "Student‑to‑Student",
            description: "No middlemen. Keep prices low and trust high.",
        },
        {
            title: "Eco‑Friendly",
            description: "Give your gently‑used items a second life and reduce waste.",
        },
        {
            title: "All Campus, All Categories",
            description: "From textbooks to dorm décor—find what you need and make space for what matters.",
        },
    ];

    return (
        <>
            <div className=" mt-10 flex justify-center">
                <p className="text-4xl font-bold">Why CollegeBazaar?</p>
            </div>
            <div className="container flex flex-col md:flex-row m-auto justify-center items-center">
                <div className="w-full mt-10 flex flex-col w-1/2 m-10">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="white p-5 mx-5 mt-10 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-l-4 border-blue-500"
                        >
                            <h3 className="text-lg font-semibold text-blue-700 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className=" w-1/2 ">
                    <img className="" src={hand_shaking_img}></img>
                </div>
            </div>
        </>
    )
}
export default WhycollegeBazaar;