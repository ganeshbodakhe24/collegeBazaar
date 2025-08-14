import useritem from "../../assets/Dashboard/item.jpg";

import { useState } from "react";
import SideBarSpace from "./UserSideBarSpace";
import Nav from "../BasicComponents/Nav";
import Footer from "../BasicComponents/footer";
import UserSideBar from "./UserSideBar";
import UserSideBarSpace from "./UserSideBarSpace";
import ImagePopUp from "../ImagePopUP";

export default function UserProductsListDetail() {
     const [popupImage, setPopupImage] = useState(null);
    const leftSpace = 20;

    function PopupImgFunction(imageUrl){
            setPopupImage(`https://res.cloudinary.com/demo/image/fetch/q_1/https://upload.wikimedia.org/wikipedia/commons/0/0f/Grosser_Panda.JPG`)
    }
    return (
        <>
            <Nav leftSpace={leftSpace}></Nav>
            <UserSideBar></UserSideBar>
            {/* show an pop up img */}
            {
            popupImage? <ImagePopUp popupImage={popupImage} onClose={()=>{setPopupImage(null)}}/>:""

            }
           
            <div className="flex m-4">
                <UserSideBarSpace></UserSideBarSpace>
                <div className="flex flex-col md:flex-row container my-5   m-auto p-4 items-center w-full bg-amber-100 rounded-lg shadow-md group  hover:bg-amber-200">
                    {/* Image Section */}
                    <div>
                        <div className="w-[100%] h-50 md:max-h-50 rounded-xl overflow-hidden transform  transition duration-150  group-hover:scale-105 ">
                            <img className="w-full h-full object-cover  hover:" onClick={(e)=>{PopupImgFunction(e)}} src={useritem} alt="Item Image" />
                        </div>
                        <div className="flex mt-1">
                            <div className="m-2 size-12 border border-black-400  md:max-h-50 rounded  overflow-hidden transform  transition duration-150 hover:scale-105  ">
                                <img className="w-full h-full object-cover  hover:" onClick={(e)=>{PopupImgFunction(e)}}  src={useritem} alt="Item Image" />
                            </div>
                            <div className="m-2  size-12 border border-black-400  md:max-h-50 rounded  overflow-hidden transform  transition duration-150 hover:scale-105  ">
                                <img className="w-full h-full object-cover  hover:" src={useritem} alt="Item Image" />
                            </div>
                            <div className="m-2 size-12 border border-black-400  md:max-h-50 rounded  overflow-hidden transform  transition duration-150 hover:scale-105  ">
                                <img className="w-full h-full object-cover  hover:" src={useritem} alt="Item Image" />
                            </div>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="ml-6 md:mt-0 text-gray-800 w-full">
                        <p className="text-2xl ml-5 font-semibold mb-1"><span className="text-gray-700">Mathemathics 3 Book</span><i class="ml-4 text-green-600 fa-solid fa-certificate"></i></p>
                        <p className="text-md mb-1"><i className=" mr-3  fa-solid fa-clipboard-list"></i> Description: <span className="text-gray-600">Very well maintained Mechanics Sem 2 book.</span></p>
                        <p className="text-md  mb-1"><i className="mr-3 fa-solid fa-dice"></i>Category: <span className="text-gray-600">Mechanics Sem 2</span></p>
                        <p className="text-md  mb-1"><i className=" mr-3  fa-solid fa-calendar"></i>Added On: <span className="text-gray-600">26/06/2003</span></p>
                        <p className="text-md  mb-1"><i className=" mr-3  fa-solid fa-location-dot"></i>Address: <span className="text-gray-600">Government College of engineering and research avasari</span></p>
                        <p className="text-md  mb-1"><i className=" mr-3  fa-solid fa-phone"></i>Contact: <span className="text-gray-600">9356297133</span></p>
                        <p className="text-md font-medium text-green-700 mb-2"> <i className=" mr-3  fa-solid fa-coins"></i> Price: ₹434 only</p>
                        <span className="text-md font-medium text-orange-700 mb-2 cursor-pointer"> <i className=" mr-3  fa-solid fa-question-circle"></i> Enquiry: 5</span>
                        <span className="text-md font-medium text-black-600 mb-2 ml-4"> <i className=" mr-3  fa-solid fa-sort-numeric-down"></i> Quantity: 5</span>
                        <br></br>


                        {/* Status Row */}
                        <button className=" m-2 bg-amber-300 text-sm font-medium px-4 py-2 rounded hover:bg-red-500 transition">mark as sold</button>
                        <button className=" m-2 bg-amber-300 text-sm font-medium px-4 py-2 rounded hover:bg-red-500 transition">Negotiating</button>
                        <button className=" m-2 bg-amber-300 text-sm font-medium px-4 py-2 rounded hover:bg-red-500 transition">Edit</button>
                        <button className=" m-2 bg-amber-300 text-sm font-medium px-4 py-2 rounded hover:bg-red-500 transition">Delete</button>

                    </div>
                </div>

            </div>
            <Footer leftSpace={leftSpace}></Footer>

        </>
    )
}