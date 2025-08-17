import item from "../../assets/Dashboard/item.jpg"
import React, { useEffect, useState } from "react";
import { useQuery } from '@tanstack/react-query';
import API from "../API";

import Loading from "../Loading";
import MsgPopUp from "../MsgPopUp";
import Pagination from "../pagination";

const fetchProducts = async (page) => {
    const res = await API.get(`user/productsListDetail?page=${page}`, {

    });
    return res.data;
};


export default function UserProductList() {
    const [popupImage, setPopupImage] = useState(null);
    const leftSpace = 20;
    const [page, setPage] = useState(1);

    function PopupImgFunction(imageUrl) {
        setPopupImage(imageUrl)
    }

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

    function changePage(newPage) {
        setPage(newPage);
    }

    useEffect(() => {
        console.log("Page changed:", page);
    }, [page]);



    if (productsLoading) { return <Loading></Loading> }


    return (
        <>
            {productsError ? <MsgPopUp message={productsErrorObj.message || "Error loading products"} msgType="error" /> : ""}
            <div className="m-auto my-4 font-bold text-2xl text-trinidad-500">
                Products List <i class="fa-regular fa-truck"></i>
            </div>
            {/* div of item */}
            {productData.productList.map((product, item) => (
                <div key={item} className="flex my-2 flex-col sm:flex-row container m-auto p-4 items-center w-full bg-amber-100 hover:bg-amber-200 rounded-lg shadow-md group text-black-600">
                    <div className="w-30 max-h-50 mr-4 rounded-xl overflow-hidden transform  transition duration-150  group-hover:scale-105 ">
                        <img className="w-full h-full object-cover  hover:" src={product.image_1} alt="Item Image" />
                    </div>
                    <div>
                        <p className="font-semibold text-xl text-black-700">
                            {product.product_name.length > 10
                                ? product.product_name.slice(0, 10) + "..."
                                : product.product_name
                            }
                            {" | "}
                            {product.category}
                            {" | ₹ "}
                            {product.price_per_piece}
                            {" | "}
                            {new Date(product.product_added_date).toLocaleString("en-IN", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </p>

                        <p className=" "><i class="fa-solid fa-location-dot"> </i>{product.address} | {product.phone_no}</p>
                        <span className="text-md font-medium text-orange-700  cursor-pointer"> <i className="   fa-solid fa-question-circle"></i> Enquiry: {product.total_enquiries}</span>
                        <span className="text-md font-medium text-black-600 mb-2 ml-4"> <i className=" mr-3  fa-solid fa-sort-numeric-up"></i> Quantity: {product.quantity}</span>
                        <span className="text-md font-medium text-orange-500 mb-2 ml-4"> <i className=" mr-3 text-red-500  fa-solid fa-ban"></i> Sold: {product.quantity-product.quantity_remain}</span>
                        <span className="text-md font-medium  text-amber-800 mb-2 ml-4"> <i className=" mr-3 text-amber-800 fa-solid fa-ban"></i> Remain: {product.quantity_remain}</span>


                        <br></br>
                        <button className=" m-2 bg-amber-300 text-sm font-medium px-4 py-2 rounded hover:bg-red-500 transition">mark as sold</button>
                        <button className=" m-2 bg-amber-300 text-sm font-medium px-4 py-2 rounded hover:bg-red-500 transition">Negotiating</button>
                        <button className=" m-2 bg-amber-300 text-sm font-medium px-4 py-2 rounded hover:bg-red-500 transition">Edit</button>
                        <button className=" m-2 bg-amber-300 text-sm font-medium px-4 py-2 rounded hover:bg-red-500 transition">Editing</button>

                    </div>
                </div>
            ))}



            {/* pagination */}
            <Pagination changePage={changePage} page={page} totalCount={productData.totalCount}></Pagination>
            {/* pagination end */}


            <br></br>

        </>
    )
}