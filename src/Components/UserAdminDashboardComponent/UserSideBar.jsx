import Nav from "../BasicComponents/Nav";
import { Link, NavLink, Outlet } from "react-router";
export default function UserSideBar({userImg,userName}) {
    return (
        <>
            <div className="hidden md:flex  fixed top-0 z-[1000] w-20 group hover:w-70 p-3 h-dvh border-r border-black-100 bg-white shadow-2xl overflow-y-auto scrollbar-hidden  flex-wrap gap-0   scroll-auto">
                {/* user img */}
                <div className="flex items-center justify-start w-full h-14 bg-amber-200 p-3 rounded-2xl">
                    <div className="rounded-[50%] h-8 w-8 group-hover:mx-5  border-1 border-black-400  overflow-hidden">
                        <img className="object-cover w-full h-full " src={userImg}></img>

                    </div>
                    <p className=" hidden group-hover:flex">   {userName ? (userName.length > 12 ? userName.slice(0, 12) + "..." : userName) : ""}
 </p>

                </div>
                {/* user logo */}
                <ul className="flex mt-5 h-[80%]  flex-col w-full   overflow-y-auto scrollbar-hidden" >
                    <li ><NavLink to="/userDashboard/dashboard" className="dashboardsideIcon " href="#"><i className="fa-regular fa-house"></i>Dashboard </NavLink></li>
                    <li><NavLink to="/userDashboard/userProfile" className="dashboardsideIcon " href=""><i className="fa-regular fa-user"></i>Profile</NavLink></li>
                    <li><NavLink to="/userDashboard/productsListDetail" className="dashboardsideIcon " href=""><i className="fa-solid fa-list"></i>Products List</NavLink></li>
                    <li><NavLink to="/userDashboard/addProducts" className="dashboardsideIcon " href=""><i className="fa-regular fa-pen-to-square"></i>Add Products</NavLink></li>
                    <li><NavLink to="/userDashboard/searchProducts" className="dashboardsideIcon " href=""><i className="fa-solid fa-magnifying-glass"></i>Search Products</NavLink></li>

                </ul>
                <div  className="dashboardsideIcon  w-full">
                    <i className="fa-solid fa-right-from-bracket"></i> LogOut
                </div>

            </div>


            <Outlet></Outlet>
        </>
    )
}