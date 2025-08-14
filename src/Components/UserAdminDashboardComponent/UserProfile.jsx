import React, { useState, useRef } from "react"


import SideBarSpace from "./UserSideBarSpace"
import Nav from "../BasicComponents/Nav";
import UserSideBar from "./UserSideBar";
import Loading from "../Loading";
import MsgPopUp from "../MsgPopUp";

import userImg from "../../assets/Dashboard/userImg.jpg";
import userBg from "../../assets/Dashboard/profile_bg.jpg";
import UserProfileEdit from "./UserProfileEdit";
import { useQuery } from "@tanstack/react-query";
import API from "../API";

const fetchDashboardData = async () => {
    const response = await API.get("user/profile"); // protected endpoint
    return response.data;
};


export default function UserProfile() {

    const [profileImage, setProfileImage] = useState(null);
    const fileInputRef = useRef();


    // fetch data of user profile
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["userProfile"], // unique key
        queryFn: fetchDashboardData,
        retry: false, // optional: don’t retry if token is invalid
    });

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = () => {
        // You can perform submit action here (e.g., upload to server)
        console.log("Form auto-submitted with image");
    };

    
    if(isLoading){ return <Loading></Loading>}
    if (isError) return <MsgPopUp message={error.message || "Error"} msgType="error" />;


    return (
        <>
            <Nav></Nav>
            <UserSideBar userImg={data.profile_photo || "img"} userName={data.full_name || "img"}  ></UserSideBar>
           

            <div className="absolute full w-full  -z-20">
                <img className="w-full object-cover h-40 " src={userBg}></img>
            </div>
            <div className="flex mt-8 container justify-center  m-auto w-full ">
                {/* profile contain */}
                <SideBarSpace></SideBarSpace>
                <div className="flex w-[90%] justify-center  items-center  ">

                    <div className=" bg-amber-100 rounded-2xl flex flex-col justify-center items-center  sm:flex-row p-4">
                        {/* photo */}
                        <form onSubmit={handleSubmit}>
                            <div className="relative size-30 flex-shrink-0 rounded-full overflow-hidden border border-black shadow-2xl group">

                                {/* Hidden File Input */}
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    onChange={(e) => {
                                        handleImageChange(e);
                                        // Auto-submit the form when file selected
                                        setTimeout(() => handleSubmit(), 100);
                                    }}
                                    className="hidden"
                                />

                                {/* Display Image */}
                                <img
                                    src={profileImage || userImg}
                                    alt="Profile"
                                    className="w-full h-full object-cover cursor-pointer"
                                    onClick={() => fileInputRef.current.click()}
                                />

                                {/* Edit Icon Overlay on Hover */}
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer transition-opacity"
                                    onClick={() => fileInputRef.current.click()}
                                >
                                    <i class=" text-white fas fa-edit"></i>
                                </div>
                            </div>
                        </form>

                        {/* information */}
                        <div className="flex flex-col md:flex-row  ml-5 text-black-500">
                            <div className=" flex ml-1 flex-col">
                                <p className="text-2xl text-black-800 font-semibold">{data.full_name}</p>
                                <p className=" mt-1"><i class="fas fa-graduation-cap"></i> {data.education_type}+""+{data.year}<i class="ml-4 text-green-600 fa-solid fa-certificate"></i></p>
                                <p className=" mt-1"><i class="fas fa-chair"></i> {data.roll_no} <i class="ml-4 text-green-600 fa-solid fa-certificate"></i></p>
                                <p className=" mt-1"><i class="fa-solid fa-building-columns"></i> Government college of engineering and research avasari</p>
                                <div className="flex md:hidden mt-3 mb-3 border-b border-black-200">
                                </div>
                            </div>
                            <div className="flex ml-1 flex-col">
                                <span className="mt-2"><i class="fa-solid fa-location-crosshairs"></i><span>{data.address}</span></span>
                                <span className="mt-2"><i class="fa-solid fa-phone"></i><span>{data.email}</span></span>
                                <span className="mt-2"><i class="fa-solid fa-envelope"></i><span> {data.email}</span></span>
                                <div className="flex w-full justify-end">
                                    <button className=" mt-4 bg-amber-300 text-sm font-medium px-4 py-2 rounded hover:bg-red-500 transition">Edit Profile</button>

                                </div>

                            </div>
                            {/* buttons */}

                        </div>
                    </div>
                </div>
            </div>
            <UserProfileEdit></UserProfileEdit>
        </>
    )
}