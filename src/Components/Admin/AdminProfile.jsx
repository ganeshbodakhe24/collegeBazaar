import React, { useState, useRef } from "react"
import SideBarSpace from "./AdminSideBarSpace"
import userImg from "../../assets/Dashboard/userImg.jpg";
import userBg from "../../assets/Dashboard/profile_bg.jpg";

export default function AdminProfile() {

    const [profileImage, setProfileImage] = useState(null);
    const fileInputRef = useRef();

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


    return (
        <>
            <div className="absolute full w-full  -z-20">
                <img className="w-full object-cover h-40 " src={userBg}></img>
            </div>
            <div className="flex mt-8 container justify-center  m-auto w-full ">
                {/* profile contain */}
                <SideBarSpace></SideBarSpace>
                <div className="flex flex-col rounded-2xl justify-center  items-center bg-amber-50 hover:bg-amber-100  ">
 
                    <div className="  rounded-2xl flex flex-col justify-center items-center  sm:flex-row p-4">
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
                                    src={profileImage  || userImg}
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
                                <p className="text-2xl text-black-800 font-semibold">Ganesh Macchindra Bodakhe</p>
                                <p className=" mt-1"><i class="fas fa-graduation-cap"></i> BE<i class="ml-4 text-green-600 fa-solid fa-certificate"></i></p>
                                <p className=" mt-1"><i class="fas fa-chair"></i> 21121018 <i class="ml-4 text-green-600 fa-solid fa-certificate"></i></p>
                                <p className=" mt-1"><i class="fa-solid fa-building-columns"></i> Government college of engineering and research avasari</p>
                                <div className="flex md:hidden mt-3 mb-3 border-b border-black-200">
                                </div>
                            </div>
                            <div className="flex ml-1 flex-col">
                                <span className="mt-2"><i class="fa-solid fa-location-crosshairs"></i><span> At post kharadgaon taluka shevgaon</span></span>
                                <span className="mt-2"><i class="fa-solid fa-phone"></i><span> 9356297133</span></span>
                                <span className="mt-2"><i class="fa-solid fa-envelope"></i><span> bodakheganesh24@gmail.com</span></span>
                               

                            </div>
                           

                        </div>
                       
                    </div>
                       {/* buttons  must be desabled if required*/}
                             <div className="flex w-full  justify-end">
                                    <button className=" mt-4 mb-4 mx-2 bg-amber-300 text-sm font-medium px-4 py-2 rounded hover:bg-red-500 transition">Edit Profile</button>
                                    <button className=" mt-4 mb-4 mx-2 bg-amber-300 text-sm font-medium px-4 py-2 rounded hover:bg-red-500 transition">Delete Profile</button>
                                    <button className=" mt-4 mb-4 mx-2 bg-amber-300 text-sm font-medium px-4 py-2 rounded hover:bg-red-500 transition">Disable Account</button>


                                </div>
                   
                </div>
                
            </div>
        </>
    )
}