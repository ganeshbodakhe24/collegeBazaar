import React from "react"
import AdminSideBarSpace from "./AdminSideBarSpace"

export default function AdminHome() {
    return (
        <>
            <div className="flex flex-row">
                {/* to give left margin for left slider */}
                <AdminSideBarSpace></AdminSideBarSpace>
                {/* for contain */}
                <div className="flex flex-col my-4 mx-4 w-full">
                    <div className="border  border-amber-300 flex p-3 rounded">
                        <span className=" font-bold text-2xl">Welcome </span>
                        <span className="text-2xl ml-2"> Admin </span>
                    </div>
                    {/* second section */}
                    <div className="mt-4 flex flex-wrap w-full justify-around ">
                        <div className="cursor-pointer h-25 w-35 md:h-30 md:w-50 group m-4  bg-amber-100 hover:bg-amber-200 hover:shadow-xl text-black-400 hover:text-black-600 rounded-xl flex flex-col p-4 ">
                            <p className="flex justify-between items-center">Total Students<i class="fa-solid fa-users text-lg"></i> </p>
                            <p className=" group-hover:text-amber-700 w-full flex justify-center text-2xl font-bold">4324</p>
                        </div>
                         <div className="cursor-pointer h-25 w-35 md:h-30 md:w-50 group m-4  bg-amber-100 hover:bg-amber-200 hover:shadow-xl text-black-400 hover:text-black-600 rounded-xl flex flex-col p-4 ">
                            <p className="flex justify-between items-center">Total Sub Admins<i class="fa-solid fa-user-tie text-lg"></i> </p>
                            <p className=" group-hover:text-amber-700 w-full flex justify-center text-2xl font-bold">4324</p>
                        </div>
                         <div className="cursor-pointer h-25 w-35 md:h-30 md:w-50 group m-4  bg-amber-100 hover:bg-amber-200 hover:shadow-xl text-black-400 hover:text-black-600 rounded-xl flex flex-col p-4 ">
                            <p className="flex justify-between items-center">Total Products<i class="fa-solid fa-box-open text-lg"></i> </p>
                            <p className=" group-hover:text-amber-700 w-full flex justify-center text-2xl font-bold">4324</p>
                        </div>
                         <div className="cursor-pointer h-25 w-35 md:h-30 md:w-50 group m-4  bg-amber-100 hover:bg-amber-200 hover:shadow-xl text-black-400 hover:text-black-600 rounded-xl flex flex-col p-4 ">
                            <p className="flex justify-between items-center">Unapproved Products<i class="fa-solid fa-receipt text-lg"></i> </p>
                            <p className=" group-hover:text-amber-700 w-full flex justify-center text-2xl font-bold">4324</p>
                        </div>
                          <div className="cursor-pointer h-25 w-35 md:h-30 md:w-50 group m-4  bg-amber-100 hover:bg-amber-200 hover:shadow-xl text-black-400 hover:text-black-600 rounded-xl flex flex-col p-4 ">
                            <p className="flex justify-between items-center">Approved Products<i class="fa-solid fa-certificate text-green-500 text-lg"></i> </p>
                            <p className=" group-hover:text-amber-700 w-full flex justify-center text-2xl font-bold">4324</p>
                        </div>
                           <div className="cursor-pointer h-25 w-35 md:h-30 md:w-50 group m-4  bg-amber-100 hover:bg-amber-200 hover:shadow-xl text-black-400 hover:text-black-600 rounded-xl flex flex-col p-4 ">
                            <p className="flex justify-between items-center">Rejected Products<i class="fa-solid   fa-certificate text-red-500 text-lg"></i> </p>
                            <p className=" group-hover:text-amber-700 w-full flex justify-center text-2xl font-bold">4324</p>
                        </div>
                    </div>
                    <br></br>
                    {/* products status*/}
                    <div className="m-auto my-4 font-bold text-2xl text-trinidad-500">
                        Items List <i class="fa-regular fa-truck"></i>
                    </div>

                </div>

            </div>
        </>
    )
}