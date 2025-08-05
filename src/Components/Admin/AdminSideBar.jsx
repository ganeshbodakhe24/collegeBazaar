import userImg from "../../assets/Dashboard/userImg.jpg";

export default function AdminSideBar() {
    return (
        <>
            <div className="hidden md:flex absolute  w-20 group hover:w-70 group :hover p-3 h-dvh border-r-1 border-black-100 bg-white shadow-2xl overflow-hidden flex-wrap scroll-auto">
                {/* user img */}
                <div className="flex items-center justify-start w-full bg-amber-200 p-3 rounded-2xl">
                <div className="rounded-[50%] h-8 w-8 group-hover:mx-5  border-1 border-black-400  overflow-hidden">
                    <img className="object-cover w-full h-full " src={userImg}></img>
                    
                </div>
                <p className=" hidden group-hover:flex">Ganesh Bodakhe </p>

                </div>
                {/* user logo */}
                <ul className="flex mt-5 flex-col h-full w-full  overflow-y-auto scrollbar-hidden" >
                    <li className=""><a className="dashboardsideIcon " href="#"><i className="fa-regular fa-house"></i>Home </a></li>
                    <li><a className="dashboardsideIcon " href=""><i className="fa-regular fa-user"></i>Profile</a></li>
                    <li><a className="dashboardsideIcon " href=""><i className="fa-solid fa-list"></i>Approve Products</a></li>
                    <li><a className="dashboardsideIcon " href=""><i className="fa-regular fa-pen-to-square"></i>Invite Sub Admin</a></li>
                    <li><a className="dashboardsideIcon " href=""><i className="fa-solid fa-magnifying-glass"></i>Search Products</a></li>
                    <li><a className="dashboardsideIcon " href=""><i className="fa-solid fa-key"></i>Change Password</a></li>

                </ul>

            </div>
        </>
    )
}