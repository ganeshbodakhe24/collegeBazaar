import React from "react"
import UserProductList from "./UserProductList"
import SideBarSpace from "./UserSideBarSpace"
export default function UserHome({userName}) {

    
    return (
        <>
        
            <div className="flex flex-row">
                {/* to give left margin for left slider */}
                <SideBarSpace></SideBarSpace>
                {/* for contain */}
                <div className="flex flex-col my-4 mx-4 w-full">
                    <div className="border  border-amber-300 flex p-3 rounded">
                        <span className=" font-bold text-2xl">Welcome </span>
                        <span className="text-2xl ml-2"> {userName} </span>
                    </div>
                    {/* second section */}
                    <div className="mt-4 flex flex-wrap w-full justify-around ">
                        <div className=" h-25 w-35 md:h-30 md:w-50 group m-4  bg-amber-100 hover:bg-amber-200 hover:shadow-xl text-black-400 hover:text-black-600 rounded-xl flex flex-col p-4 ">
                            <p className="flex justify-between items-center">Listed Product <i class="fa-solid fa-receipt text-lg"></i> </p>
                            <p className=" group-hover:text-amber-700 w-full flex justify-center text-2xl font-bold">4324</p>
                        </div>
                         <div className=" h-25 w-35 md:h-30 md:w-50 group m-4  bg-amber-100 hover:bg-amber-200 hover:shadow-xl text-black-400 hover:text-black-600 rounded-xl flex flex-col p-4 ">
                            <p className="flex justify-between items-center">sold Product <i class="fa-solid fa-basket-shopping text-lg"></i> </p>
                            <p className=" group-hover:text-amber-700 w-full flex justify-center text-2xl font-bold">4324</p>
                        </div>
                         <div className=" h-25 w-35 md:h-30 md:w-50 group m-4  bg-amber-100 hover:bg-amber-200 hover:shadow-xl text-black-400 hover:text-black-600 rounded-xl flex flex-col p-4 ">
                            <p className="flex justify-between items-center">Negotiating product<i class="fa-solid fa-receipt text-lg"></i> </p>
                            <p className=" group-hover:text-amber-700 w-full flex justify-center text-2xl font-bold">4324</p>
                        </div>
                         <div className=" h-25 w-35 md:h-30 md:w-50 group m-4  bg-amber-100 hover:bg-amber-200 hover:shadow-xl text-black-400 hover:text-black-600 rounded-xl flex flex-col p-4 ">
                            <p className="flex justify-between items-center">My Cart <i class="fa-solid fa-receipt text-lg"></i> </p>
                            <p className=" group-hover:text-amber-700 w-full flex justify-center text-2xl font-bold">4324</p>
                        </div>
                        
                        
                    </div>
                    <br></br>
                    {/* products status*/}
                    <UserProductList ></UserProductList>

                </div>

            </div>
        </>
    )
}