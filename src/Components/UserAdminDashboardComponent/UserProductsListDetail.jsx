import { useQuery } from '@tanstack/react-query';
import API from "../API";

import { useState } from "react";
import SideBarSpace from "./UserSideBarSpace";
import Nav from "../BasicComponents/Nav";
import Footer from "../BasicComponents/footer";
import UserSideBar from "./UserSideBar";
import UserSideBarSpace from "./UserSideBarSpace";
import ImagePopUp from "../ImagePopUP";
import Loading from "../Loading";
import MsgPopUp from "../MsgPopUp";
import Pagination from "../pagination";

const fetchDashboardData = async () => {
    const response = await API.get("user/profile"); // protected endpoint
    return response.data;
};


const fetchProducts = async (page) => {
    const res = await API.get(`user/productsListDetail?page=${page}`, {

    });
    return res.data;
};

export default function UserProductsListDetail() {
    const [popupImage, setPopupImage] = useState(null);
    const leftSpace = 20;
    const [page, setPage] = useState(1);

    function PopupImgFunction(imageUrl) {
        setPopupImage(imageUrl)
    }
   function changePage(newPage) {
        setPage(newPage);
    }

    //fetch url
    // fetch data of user profile
    // Fetch user profile
    const {
        data: userProfile,
        isLoading: userProfileLoading,
        isError: userProfileError,
        error: userProfileErrorObj
    } = useQuery({
        queryKey: ["userProfile"],
        queryFn: fetchDashboardData,
        retry: false
    });

    // Fetch products with pagination
    const {
        data: productData,
        isLoading: productsLoading,
        isError: productsError,
        error: productsErrorObj
    } = useQuery({
        queryKey: ['products', page],
        queryFn: () => fetchProducts(page),
        keepPreviousData: true
    });

    // Handle loading state (either query still fetching)
    if (userProfileLoading || productsLoading) {
        return <Loading />;
    }

    // Handle errors (either query failed)
    if (userProfileError) {
        return <MsgPopUp message={userProfileErrorObj.message || "Error loading profile"} msgType="error" />;
    }
    if (productsError) {
        return <MsgPopUp message={productsErrorObj.message || "Error loading products"} msgType="error" />;
    }
    return (
        <>
            <Nav leftSpace={leftSpace}></Nav>
            <UserSideBar userImg={userProfile.profile_photo || "img"} userName={userProfile.full_name || "img"}  ></UserSideBar>
            {/* show an pop up img */}
            {
                popupImage ? <ImagePopUp popupImage={popupImage} onClose={() => { setPopupImage(null) }} /> : ""
            }

            {/* detail list div */}
           {productData.productList.map((product,index) => (
                        
            <div className="flex  m-4" key={index} >
                <UserSideBarSpace></UserSideBarSpace>
                <div className="flex flex-col md:flex-row container my-5   m-auto p-4 items-center w-full bg-amber-100 rounded-lg shadow-md group  hover:bg-amber-200">
                    {/* Image Section */}
                    <div >
                        <div className="w-[100%] h-50 md:max-h-50 rounded-xl overflow-hidden transform  transition duration-150  group-hover:scale-105 ">
                            <img className="w-full h-full object-cover  hover:" onClick={(e) => { PopupImgFunction(e.target.src) }} src={product.image_1} alt="Item Image" />
                        </div>
                        <div className="flex mt-1 justify-center ">
                            {product.image_2?
                            <div className="m-2 size-12 border border-black-400  md:max-h-50 rounded  overflow-hidden transform  transition duration-150 hover:scale-105  ">
                                <img className="w-full h-full object-cover  hover:"onClick={(e) => { PopupImgFunction(e.target.src) }} src={product.image_2} alt="Item Image" />
                            </div>
                            :""
                            }
                            {product.image_3?
                            <div className="m-2 size-12 border border-black-400  md:max-h-50 rounded  overflow-hidden transform  transition duration-150 hover:scale-105  ">
                                <img className="w-full h-full object-cover  hover:"onClick={(e) => { PopupImgFunction(e.target.src) }} src={product.image_3} alt="Item Image" />
                            </div>
                            :""
                            }
                          
                            
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="ml-6 md:mt-0 text-gray-800 w-full">
                        <p className="text-2xl ml-5 font-semibold mb-1"><span className="text-gray-700">{product.product_name}</span>{product.product_verified?<i class="ml-4 text-green-600 fa-solid fa-certificate"></i>:""}</p>
                        <p className="text-md mb-1"><i className=" mr-3  fa-solid fa-clipboard-list"></i> Description:<span className="text-gray-600">{product.description} </span></p>
                        <p className="text-md  mb-1"><i className="mr-3 fa-solid fa-dice"></i>Category: <span className="text-gray-600">{product.category}</span></p>
                        <p className="text-md  mb-1"><i className=" mr-3  fa-solid fa-calendar"></i>Added On: <span className="text-gray-600">{new Date(product.product_added_date).toLocaleString("en-IN", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                            })}</span></p>
                        <p className="text-md  mb-1"><i className=" mr-3  fa-solid fa-location-dot"></i>Address: <span className="text-gray-600">{product.address}</span></p>
                        <p className="text-md  mb-1"><i className=" mr-3  fa-solid fa-phone"></i>Contact: <span className="text-gray-600">{product.phone_no}</span></p>
                        <p className="text-md font-medium text-green-700 mb-2"> <i className=" mr-3  fa-solid fa-coins"></i> Price: ₹{product.price_per_piece} only</p>
                         <span className="text-md font-medium text-orange-700  cursor-pointer"> <i className="   fa-solid fa-question-circle"></i> Enquiry: {product.total_enquiries}</span>
                        <span className="text-md font-medium text-black-600 mb-2 ml-4"> <i className=" mr-3  fa-solid fa-sort-numeric-up"></i> Quantity: {product.quantity}</span><br></br>
                        <span className="text-md font-medium text-orange-500 mb-2 "> <i className="  text-red-500  fa-solid fa-ban"></i> Sold: {product.quantity-product.quantity_remain}</span>
                        <span className="text-md font-medium  text-amber-800 mb-2 ml-4"> <i className=" mr-3 text-amber-800 fa-solid fa-ban"></i> Remain: {product.quantity_remain}</span>


                        <br></br>


                        {/* Status Row */}
                        <button className=" m-2 bg-amber-300 text-sm font-medium px-4 py-2 rounded hover:bg-red-500 transition">mark as sold</button>
                        <button className=" m-2 bg-amber-300 text-sm font-medium px-4 py-2 rounded hover:bg-red-500 transition">Negotiating</button>
                        <button className=" m-2 bg-amber-300 text-sm font-medium px-4 py-2 rounded hover:bg-red-500 transition">Edit</button>
                        <button className=" m-2 bg-amber-300 text-sm font-medium px-4 py-2 rounded hover:bg-red-500 transition">Delete</button>

                    </div>
                </div>

            </div>
                      ))}


            {/* degail list div end*/}

            <Pagination changePage={changePage} page={page} totalCount={ productData.totalCount}></Pagination>

           
            <Footer leftSpace={leftSpace}></Footer>

        </>
    )
}