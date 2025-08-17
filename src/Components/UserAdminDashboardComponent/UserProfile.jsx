import React, { useState, useRef } from "react"


import SideBarSpace from "./UserSideBarSpace"
import Nav from "../BasicComponents/Nav";
import UserSideBar from "./UserSideBar";
import Loading from "../Loading";
import MsgPopUp from "../MsgPopUp";

import userBg from "../../assets/Dashboard/profile_bg.jpg";
import UserProfileEdit from "./UserProfileEdit";
import { useQuery } from "@tanstack/react-query";
import API from "../API";

const fetchDashboardData = async () => {
    const response = await API.get("user/profile"); // protected endpoint
    return response.data;
};


export default function UserProfile() {
    const [image, setImage] = useState(null);
    const [msg, setMsg] = useState(null);
    const [profile, setPrifile] = useState(null);
    const [isLoadingProfile, setisLoadingProfile] = useState(false);
    const [megType, setMsgType] = useState("error");


    // fetch data of user profile
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["userProfile"], // unique key
        queryFn: fetchDashboardData,
        retry: false, // optional: don’t retry if token is invalid
    });

    const handleImageChange = (e) => {
        setImage(e.target.files[0]); // store only one file
        if (e.target.files[0]) {
            setPrifile(URL.createObjectURL(e.target.files[0])); // create temporary URL for preview
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image); // key name must match backend multer.single("image")
        setisLoadingProfile(true);
        setMsg(null);

        try {
            const res = await API.post("user/updateProfilePhoto", formData);
            console.log("Response:", res.data);
            setMsg(res.data.message);
            setMsgType("success");
            setisLoadingProfile(false);

        } catch (err) {
            setMsg("Upload failed !!" + err.message);
            setMsgType("error");
            setisLoadingProfile(false);
            setPrifile(null);

        }
    };
    //if no redential present
    if (isLoading) { return <Loading></Loading> }
    if (isError) return <MsgPopUp message={error.message || "Error"} msgType="error" />;

    return (
        <>
            <Nav></Nav>
            {isLoadingProfile ? <Loading></Loading> : ""}
            {msg ? <MsgPopUp msgType={megType} message={msg} /> : ""}
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
                        <div className="relative size-30 flex-shrink-0 rounded-full overflow-hidden border border-black shadow-2xl group">
                            {/* Display Image */}
                            <img
                                src={profile || data.profile_photo}
                                alt="Profile"
                                className="w-full h-full object-cover cursor-pointer"
                            />
                        </div>


                        {/* information */}
                        <div className="flex flex-col md:flex-row  ml-5 text-black-500">
                            <div className=" flex ml-1 flex-col">
                                <p className="text-2xl text-black-800 font-semibold"><label className="" htmlFor="fileInput" style={{ cursor: 'pointer' }}>  <i className="fa-solid hover:text-black-600 text-2xl fa-user-edit"></i></label> 
                               &nbsp; {data.full_name} {data.when_verified ? <i class="ml-4 text-green-600 fa-solid fa-certificate"></i> : ""}</p>
                                <p className=" mt-1 hover:text-amber-800"><i class="fas  fa-graduation-cap"></i> {data.education_type}, year :- {data.year_of_study}</p>
                                <p className=" mt-1"><i class="fas fa-chair"></i> {data.roll_no}</p>
                                <p className=" mt-1"><i class="fa-solid fa-building-columns"></i> {data.college}</p>
                                <div className="flex md:hidden mt-3 mb-3 border-b border-black-200">
                                </div>
                            </div>
                            <div className="flex ml-1 flex-col">
                                <span className="mt-2"><i class="fa-solid fa-location-crosshairs"></i><span> {data.address}</span></span>
                                <span className="mt-2"><i class="fa-solid fa-phone"></i><span> {data.phone_no}</span></span>
                                <span className="mt-2"><i class="fa-solid fa-envelope"></i><span> {data.email}</span></span>
                                <div className="flex w-full  justify-end">
                                    <button className=" mt-4 bg-amber-300 text-sm font-medium px-4 py-2 rounded hover:bg-red-500 transition">Edit Profile</button><br></br>
                                     

                                </div>
                                <form onSubmit={handleSubmit}>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        id="fileInput"
                                        onChange={(e) => {
                                            handleImageChange(e);
                                            // Auto-submit immediately after file selection
                                            setTimeout(() => handleSubmit(e), 100);
                                        }}
                                        style={{ display: 'none' }} // hide the default input

                                    />
                                </form>

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