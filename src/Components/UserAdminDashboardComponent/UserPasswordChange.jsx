import React, { useState } from "react";

import SideBarSpace from "./UserSideBarSpace"


export default function UserPasswordChange() {

    const [formStatus, setFormStatus] = useState("");
    const [password, setPassword] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const passwordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(password);


    function validConfirmPass(password,confirmPassword){
        if(password===confirmPassword){
            return true;
        }
        else{
            return false;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!password || !confirmPassword || !passwordValid || !passwordsMatch) {
            alert("error");
            return;
        }
        // Continue with form submission logic
    };

    return (
        <>
            <div className="flex ">
                <SideBarSpace></SideBarSpace>
                {/* div for edit profile */}
                <div className="flex flex-col items-center m-4 mt-10 justify-center w-full ">
                    <h1 className="text-3xl  text-trinidad-500">Change Password <i class="fa-regular fa-pen-to-square"></i></h1>

                    <div className="mt-10 w-full max-w-4xl mx-auto p-6 rounded-xl border border-black-200 bg-amber-50">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            {/* old  pass */}
                            <div>
                                <label htmlFor="oldPass" className="block font-semibold "> Old Password</label>
                                <input type="password" id="oldPass" name="oldPass" required
                                    onChange={(e) => setOldPassword(e.target.value)}
                                    className="w-full p-3 border border-black-400 rounded mt-1 focus:ring-2 focus:ring-black-400" />
                            </div>

                            {/* new pass */}
                            <br></br>
                            <div>
                                <label htmlFor="password" className="block font-semibold">New Password</label>
                                <input type="password" id="password" required name="password"
                                    value={password}
                                    onChange={(e) => { setPassword(e.target.value) }}
                                    className="w-full p-3 border border-black-400 rounded mt-1 focus:ring-2 focus:ring-black-400" />
                                {!passwordValid && password && (
                                    <p className="text-red-500 text-sm mt-1">Enter a valid password (min 8 characters, 1 number, 1 symbol)</p>
                                )}
                            </div>

                            {/* comfirm  pass */}
                            <div>
                                <label htmlFor="confirmPassword" className="block font-semibold">Confirm Password</label>
                                <input type="password" id="confirmPassword" required name="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                                    className="w-full p-3 border border-black-400 rounded mt-1 focus:ring-2 focus:ring-black-400" />
                                   {!validConfirmPass(password, confirmPassword) && confirmPassword && (
  <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
)}
                            </div>
                            {/* Submit Button */}
                            <div className="md:col-span-2 text-center mt-4">
                                <button type="submit"
                                    className="bg-yellow-300  px-6 py-2 rounded hover:bg-yellow-200 text-black-600 transition duration-300">
                                    Change Password
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