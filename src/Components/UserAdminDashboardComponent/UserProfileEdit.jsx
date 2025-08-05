import React, { useState } from "react";

import SideBarSpace from "./UserSideBarSpace"


export default function UserProfileEdit() {

    const [formStatus, setFormStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        // You can grab form data like this:
        const formData = new FormData(e.target);
        const values = Object.fromEntries(formData.entries());

        console.log("Form submitted with values:", values);

        setFormStatus("Data updated successfully ✅");

        // Optional: reset form
        // e.target.reset();

        // Hide the message after a few seconds
        setTimeout(() => {
            setFormStatus("");
        }, 3000);
    };
    return (
        <>
            <div className="flex ">
                <SideBarSpace></SideBarSpace>
                {/* div for edit profile */}
                <div className="flex flex-col items-center m-4 mt-10 justify-center w-full ">
                    <h1 className="text-3xl  text-trinidad-500">Edit Profile <i class="fa-regular fa-pen-to-square"></i></h1>

                    <div className="mt-10 w-full max-w-4xl mx-auto p-6 rounded-xl border border-black-200 bg-amber-50">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* First Name */}
                            <div>
                                <label htmlFor="firstName" className="block font-semibold">First Name</label>
                                <input type="text" id="firstName" name="firstName" required minLength={5} maxLength={10}
                                    className="w-full p-3 border border-black-400 rounded mt-1 focus:ring-2 focus:ring-black-400" />
                            </div>

                            {/* Last Name */}
                            <div>
                                <label htmlFor="lastName" className="block font-semibold">Last Name</label>
                                <input type="text" id="lastName" required name="lastName"
                                    className="w-full p-3 border border-black-400 rounded mt-1 focus:ring-2 focus:ring-black-400" />
                            </div>

                            {/* Middle Name */}
                            <div>
                                <label htmlFor="middleName" className="block font-semibold">Middle Name</label>
                                <input type="text" id="middleName" required name="middleName"
                                    className="w-full p-3 border border-black-400 rounded mt-1 focus:ring-2 focus:ring-black-400" />
                            </div>

                            {/* Gender */}
                            <div>
                                <label htmlFor="gender" className="block font-semibold">Gender</label>
                                <select id="gender" required name="gender"
                                    className="w-full p-3 border border-black-400 rounded mt-1 focus:ring-2 focus:ring-black-400">
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>



                            {/* Address */}
                            <div className="md:col-span-2">
                                <label htmlFor="address" required className="block font-semibold">Address</label>
                                <input type="text" id="address" required name="address"
                                    className="w-full p-3 border border-black-400 rounded mt-1 focus:ring-2 focus:ring-black-400" />
                            </div>

                            {/* Phone Number */}
                            <div>
                                <label htmlFor="phone" className="block font-semibold">Phone Number</label>
                                <input type="tel" id="phone" required name="phone" maxLength={10}
                                    className="w-full p-3 border border-black-400 rounded mt-1 focus:ring-2 focus:ring-black-400" />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block font-semibold">Email</label>
                                <input type="email" required id="email" name="email"
                                    className="w-full p-3 border border-black-400 rounded mt-1 focus:ring-2 focus:ring-black-400" />
                            </div>

                            {/* Education Type */}
                            <div>
                                <label htmlFor="eduType" className="block font-semibold">Education Type</label>
                                <select id="eduType" required name="eduType"
                                    className="w-full p-3 border border-black-400 rounded mt-1 focus:ring-2 focus:ring-black-400">
                                    <option value="">Select Education Type</option>
                                    <option value="Engineering">Engineering</option>
                                    <option value="Medical">Medical</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            {/* College */}
                            <div>
                                <label htmlFor="college" className="block font-semibold">College</label>
                                <select id="college" required name="college"
                                    className="w-full p-3 border border-black-400 rounded mt-1 focus:ring-2 focus:ring-black-400">
                                    <option value="">Select College</option>
                                    <option value="GCOEARA">Government College of Engineering, Avsari</option>
                                    <option value="COEP">COEP</option>
                                    <option value="PuneUniv">Savitribai Phule Pune University</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            {/* Branch */}
                            <div>
                                <label htmlFor="branch" className="block font-semibold">Branch</label>
                                <select id="branch" required name="branch"
                                    className="w-full p-3 border border-black-400 rounded mt-1 focus:ring-2 focus:ring-black-400">
                                    <option value="">Select Branch</option>
                                    <option value="Computer">Computer Engineering</option>
                                    <option value="Mechanical">Mechanical Engineering</option>
                                    <option value="Civil">Civil Engineering</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>


                            {/* Roll Number */}
                            <div>
                                <label htmlFor="rollNo" className="block font-semibold">Roll No</label>
                                <input type="text" required id="rollNo" name="rollNo" minLength={8} maxLength={8}
                                    className="w-full p-3 border border-black-400 rounded mt-1 focus:ring-2 focus:ring-black-400" />
                            </div>
                            {/* Submit Button */}
                            <div className="md:col-span-2 text-center mt-4">
                                <button type="submit"
                                    className="bg-yellow-500  px-6 py-2 rounded hover:bg-yellow-300 text-black-600 transition duration-300">
                                    Save Data
                                </button>
                            </div>
                        </form>
                        {/* Success Message */}
                        {formStatus && (
                            <p className="text-green-600 text-center mt-4 font-semibold">
                                {formStatus}
                            </p>
                        )}
                    </div>


                </div>

            </div>
        </>
    )
}