import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import API from "../API";

import Loading from "../Loading";
import MsgPopUp from "../MsgPopUp";
import SideBarSpace from "./UserSideBarSpace";
import UserSideBar from "./UserSideBar";
import Nav from "../BasicComponents/Nav";
import Footer from "../BasicComponents/footer";
import StaticProductUploader from "./StaticProductUploader";

const fetchDashboardData = async () => {
    const response = await API.get("user/profile"); // protected endpoint
    return response.data;
};

const getCategory = async () => {
    const response = await API.get("getCategory"); // protected endpoint
    return response.data;
};

const getEnquiryTime = async () => {
    const response = await API.get("getEnquiryTime"); // protected endpoint
    return response.data;
};

export default function UserProductAdd() {
    const [images, setImages] = useState([]);
    const [productUplaodMag, SetProductUplaodMag] = useState(null);
    const [productUploadLoading, setProductUploadLoading] = useState(false);
    const [msgType, setMsgType] = useState("error");

    // fetch data of user profile
    // fetch user profile data
    const {
        data: userProfile,
        isLoading: isUserProfileLoading,
        isError: isUserProfileError,
        error: userProfileError,
    } = useQuery({
        queryKey: ["userProfile"],
        queryFn: fetchDashboardData,
        retry: false,
    });

    // fetch enquiry time data
    const {
        data: enquiryTime,
        isLoading: isEnquiryLoading,
        isError: isEnquiryError,
        error: enquiryError,
    } = useQuery({
        queryKey: ["enquiryTime"],
        queryFn: getEnquiryTime,
        retry: false,
    });

    // fetch product category data
    const {
        data: productCategory,
        isLoading: isCategoryLoading,
        isError: isCategoryError,
        error: categoryError,
    } = useQuery({
        queryKey: ["productCategory"],
        queryFn: getCategory,
        retry: false,
    });

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const previews = files.map((file) => ({
            file,
            url: URL.createObjectURL(file),
        }));
        setImages(previews);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        SetProductUplaodMag(null);
        setProductUploadLoading(true);

        const formData = new FormData(e.target); // Automatically collects input fields if `name` attributes match
        const files = e.target.querySelector('input[type="file"]').files;

        // If you have images separately, append them:
        Array.from(files).forEach((file) => {
            if (file.size > 1 * 1024 * 1024) { // >1 MB
                alert(`File ${file.name} exceeds 1 MB and won't be uploaded.`);
                setImages([]);       // clear images if stored in state
                return;
            } else {
                formData.append('images', file);
            }
        });
        for (let [key, value] of formData.entries()) {
            console.log(`${key}:`, value);
        }
        try {
            const res = await API.post("user/addProduct", formData)
            setMsgType("success")
            SetProductUplaodMag("Product uploaded successfully!");
            setProductUploadLoading(false);
            e.target.reset();    // clears all <input>, <textarea>, <select>
            setImages([]);       // clear images if stored in state
        } catch (error) {
            if (error.response) {
                // Server sent an error
                const serverMessage = error.response.data.message;
                setMsgType("error")
                SetProductUplaodMag(serverMessage);
                setProductUploadLoading(false);
                console.error("Client error:", error);
            } else {
                // Network or unexpected error
                setMsgType("error")
                SetProductUplaodMag("Error uploading product. Please try again.");
                setProductUploadLoading(false);
                console.error("Client error:", error);
            }
        }
    };


    //if no redential present
    if (isUserProfileLoading) {
        return <Loading></Loading>;
    }
    if (isUserProfileError)
        return (
            <MsgPopUp message={userProfileError.message || "Error"} msgType="error" />
        );

    return (
        <>
            <Nav></Nav>
            {productUploadLoading ? <Loading></Loading> : ""}
            {productUplaodMag ? <MsgPopUp message={productUplaodMag} msgType={msgType}></MsgPopUp> : ""}
            <UserSideBar
                userImg={userProfile.profile_photo || "img"}
                userName={userProfile.full_name || "img"}
            ></UserSideBar>

            <div className="flex ">
                <SideBarSpace></SideBarSpace>
                {/* div for edit profile */}
                <div className="flex flex-col items-center m-4 mt-10 justify-center w-full ">
                    <h1 className="text-3xl  text-trinidad-500">
                        Add Product <i class="fa-solid fa-cart-plus"></i>
                    </h1>

                    <div className="mt-10 w-full max-w-4xl mx-auto p-6 rounded-xl border border-black-200 bg-amber-50">
                        <form onSubmit={handleSubmit}>
                            <div className=" container w-full m-auto items-center grid grid-cols-12 gap-4 rounded-2xl m-4 p-6">
                                {/* Title */}
                                <div className="col-span-12 md:col-span-6">
                                    <label className="font-semibold" htmlFor="productTitle">
                                        Title{" "}
                                        <i className="ml-2 fa-solid text-sm text-red-500 fa-star"></i>
                                    </label>
                                    <input
                                        className="mt-1 w-full p-3 outline-none border rounded border-black-400 focus:ring-2 focus:ring-black-400 "
                                        required
                                        maxLength={20}
                                        minLength={5}
                                        type="text"
                                        name="product_name"
                                    />
                                </div>

                                {/* Quantity */}
                                <div className="col-span-12 md:col-span-6">
                                    <label className="font-semibold" htmlFor="quantity">
                                        Quantity{" "}
                                        <i className="ml-2 fa-solid text-sm text-red-500 fa-star"></i>
                                    </label>
                                    <input
                                        className="mt-1 w-full p-3 outline-none border rounded border-black-400 focus:ring-2 focus:ring-black-400 "
                                        required
                                        min={1}
                                        type="number"
                                        name="quantity"
                                    />
                                </div>

                                {/* Description */}
                                <div className="col-span-12">
                                    <label className="font-semibold" htmlFor="description">
                                        Description{" "}
                                        <i className="ml-2 fa-solid text-sm text-red-500 fa-star"></i>
                                    </label>
                                    <textarea
                                        className="mt-1 w-full p-3 outline-none border rounded border-black-400 focus:ring-2 focus:ring-black-400 "
                                        required
                                        minLength={10}
                                        maxLength={50}
                                        name="description"
                                        rows={4}
                                    />
                                </div>

                                {/* Category */}
                                {/* <div className="col-span-12 md:col-span-6">
                                    <label className="font-semibold" htmlFor="category">
                                        Category <i className="ml-2 fa-solid text-sm text-red-500 fa-star"></i>
                                    </label>
                                    <select
                                        className="mt-1 w-full p-3 outline-none border rounded border-black-400 focus:ring-2 focus:ring-black-400 "
                                        required
                                        id="category"
                                        name="category"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Select a Category
                                        </option>
                                        <option value="electronics">Electronics</option>
                                        <option value="mechanics">Mechanics</option>
                                    </select>
                                </div> */}
                                {/* Category */}
                                <div className="col-span-12 md:col-span-6">
                                    <label className="font-semibold" htmlFor="category">
                                        Category{" "}
                                        <i className="ml-2 fa-solid text-sm text-red-500 fa-star"></i>
                                    </label>

                                    {isCategoryLoading ? (
                                        <p className="text-gray-500 mt-1">Loading categories...</p>
                                    ) : isCategoryError ? (
                                        <p className="text-red-500 mt-1">
                                            Unable to load categories.
                                        </p>
                                    ) : (
                                        <select
                                            className="mt-1 w-full p-3 outline-none border rounded border-black-400 focus:ring-2 focus:ring-black-400"
                                            required
                                            id="category"
                                            name="category"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>
                                                Select a Category
                                            </option>
                                            {productCategory?.map((cat) => (
                                                <option key={cat.category_id} value={cat.category_id}>
                                                    {cat.category}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                </div>

                                {/* Price */}
                                <div className="col-span-12 md:col-span-6">
                                    <label className="font-semibold" htmlFor="price">
                                        Price{" "}
                                        <i className="ml-2 fa-solid text-sm text-red-500 fa-star"></i>
                                    </label>
                                    <input
                                        className="mt-1 w-full p-3 outline-none border rounded border-black-400 focus:ring-2 focus:ring-black-400 "
                                        required
                                        type="number"
                                        min={1}
                                        name="price_per_piece"
                                    />
                                </div>

                                {/* Address */}
                                <div className="col-span-12">
                                    <label className="font-semibold" htmlFor="address">
                                        Address{" "}
                                        <i className="ml-2 fa-solid text-sm text-red-500 fa-star"></i>
                                    </label>
                                    <input
                                        className="mt-1 w-full p-3 outline-none border rounded border-black-400 focus:ring-2 focus:ring-black-400 "
                                        required
                                        type="text"
                                        name="address"
                                    />
                                </div>

                                {/* Phone Number */}
                                <div className="col-span-12 md:col-span-6">
                                    <label className="font-semibold" htmlFor="phonenumber">
                                        Phone Number{" "}
                                        <i className="ml-2 fa-solid text-sm text-red-500 fa-star"></i>
                                    </label>
                                    <input
                                        className="mt-1 w-full p-3 outline-none border rounded border-black-400 focus:ring-2 focus:ring-black-400 "
                                        required
                                        type="tel"
                                        name="phone_no"
                                        pattern="[0-9]{10}"
                                        inputMode="numeric"
                                        placeholder="Enter 10-digit number"
                                    />
                                </div>

                                {/* Enquiry Time */}
                                {/* <div className="col-span-12 md:col-span-6">
                                    <label className="font-semibold" htmlFor="enquiryTime">
                                        Enquiry Time <i className="ml-2 fa-solid text-sm text-red-500 fa-star"></i>
                                    </label>
                                    <select
                                        className="mt-1 w-full p-3 outline-none border rounded border-black-400 focus:ring-2 focus:ring-black-400 "
                                        required
                                        id="enquiryTime"
                                        name="enquiry"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Select Time
                                        </option>
                                        <option value="anytime">Anytime</option>
                                        <option value="noon">Noon</option>
                                        <option value="evening">Evening</option>
                                    </select>
                                </div> */}
                                <div className="col-span-12 md:col-span-6">
                                    <label className="font-semibold" htmlFor="enquiryTime">
                                        Enquiry Time{" "}
                                        <i className="ml-2 fa-solid text-sm text-red-500 fa-star"></i>
                                    </label>

                                    {isEnquiryLoading ? (
                                        <p className="text-gray-500 mt-1">
                                            Loading enquiry times...
                                        </p>
                                    ) : isEnquiryError ? (
                                        <p className="text-red-500 mt-1">
                                            Unable to load enquiry time.
                                        </p>
                                    ) : (
                                        <select
                                            className="mt-1 w-full p-3 outline-none border rounded border-black-400 focus:ring-2 focus:ring-black-400"
                                            required
                                            id="enquiryTime"
                                            name="enquiry_time"
                                            defaultValue=""
                                        >
                                            <option value="" disabled>
                                                Select Time
                                            </option>
                                            {enquiryTime?.map((item) => (
                                                <option key={item.enquiry_id} value={item.enquiry_id}>
                                                    {item.time}
                                                </option>
                                            ))}
                                        </select>
                                    )}
                                </div>

                                <div className="col-span-12 mb-4">
                                    <label className="font-semibold block mb-2">
                                        Upload Images{" "}
                                        <i className="ml-2 fa-solid fa-star text-sm text-red-500"></i>
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        multiple
                                        onChange={handleImageChange}
                                        className="block w-full p-2 border rounded border-black-400 focus:ring-2 focus:ring-black-400 "
                                    />
                                </div>

                                {/* Preview Section */}

                                {images.map((img, index) => (
                                    <div
                                        key={index}
                                        className="col-span-6 flex justify-center items-center border border-black-400 rounded overflow-hidden"
                                    >
                                        <img
                                            src={img.url}
                                            alt={`preview-${index}`}
                                            className="size-30 object-cover"
                                        />
                                    </div>
                                ))}

                                {/* Submit Button */}
                                <div className="col-span-12 m-auto mt-4">
                                    <button
                                        type="submit"
                                        className="bg-yellow-500  px-6 py-2 rounded hover:bg-yellow-300 text-black-600 transition duration-300"
                                    >
                                        Add Product
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* footer */}
            <Footer></Footer>
        </>
    );
}
