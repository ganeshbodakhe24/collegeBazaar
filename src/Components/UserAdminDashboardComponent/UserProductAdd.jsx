import React, { useState } from "react";

import SideBarSpace from "./UserSideBarSpace";
export default function UserProductAdd() {

    const [images, setImages] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const previews = files.map((file) => ({
            file,
            url: URL.createObjectURL(file),
        }));
        setImages(previews);
    };

     const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    const formData = new FormData(e.target);

    // Append images to formData manually
    images.forEach((imgObj, index) => {
      formData.append("images", imgObj.file);
    });

    // Convert to object (optional, for debugging)
    const dataObject = Object.fromEntries(formData.entries());
    console.log("Form Data:", dataObject);

    // Example: send to backend
    // fetch('/api/products', {
    //   method: 'POST',
    //   body: formData
    // });

    alert("Form submitted successfully!");
  };

    return (
        <>
            <div className="flex ">
                <SideBarSpace></SideBarSpace>
                {/* div for edit profile */}
                <div className="flex flex-col items-center m-4 mt-10 justify-center w-full ">
                    <h1 className="text-3xl  text-trinidad-500">Add Product <i class="fa-solid fa-cart-plus"></i></h1>

                    <div className="mt-10 w-full max-w-4xl mx-auto p-6 rounded-xl border border-black-200 bg-amber-50">
                        <form onSubmit={handleSubmit}>
                            <div className=" container w-full m-auto items-center grid grid-cols-12 gap-4 rounded-2xl m-4 p-6">
                                {/* Title */}
                                <div className="col-span-12 md:col-span-6">
                                    <label className="font-semibold" htmlFor="productTitle">
                                        Title <i className="ml-2 fa-solid text-sm text-red-500 fa-star"></i>
                                    </label>
                                    <input
                                        className="mt-1 w-full p-3 outline-none border rounded border-black-400 focus:ring-2 focus:ring-black-400 "
                                        required
                                        maxLength={20}
                                        minLength={5}
                                        type="text"
                                    
                                        name="productTitle"
                                    />
                                </div>

                                {/* Quantity */}
                                <div className="col-span-12 md:col-span-6">
                                    <label className="font-semibold" htmlFor="quantity">
                                        Quantity <i className="ml-2 fa-solid text-sm text-red-500 fa-star"></i>
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
                                        Description <i className="ml-2 fa-solid text-sm text-red-500 fa-star"></i>
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
                                <div className="col-span-12 md:col-span-6">
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
                                </div>

                                {/* Price */}
                                <div className="col-span-12 md:col-span-6">
                                    <label className="font-semibold" htmlFor="price">
                                        Price <i className="ml-2 fa-solid text-sm text-red-500 fa-star"></i>
                                    </label>
                                    <input
                                        className="mt-1 w-full p-3 outline-none border rounded border-black-400 focus:ring-2 focus:ring-black-400 "
                                        required
                                        type="number"
                                        min={1}
                                        name="price"
                                    />
                                </div>

                                {/* Address */}
                                <div className="col-span-12">
                                    <label className="font-semibold" htmlFor="address">
                                        Address <i className="ml-2 fa-solid text-sm text-red-500 fa-star"></i>
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
                                        Phone Number <i className="ml-2 fa-solid text-sm text-red-500 fa-star"></i>
                                    </label>
                                    <input
                                        className="mt-1 w-full p-3 outline-none border rounded border-black-400 focus:ring-2 focus:ring-black-400 "
                                        required
                                        type="tel"
                                        name="phonenumber"
                                        pattern="[0-9]{10}"
                                        inputMode="numeric"
                                        placeholder="Enter 10-digit number"
                                    />
                                </div>

                                {/* Enquiry Time */}
                                <div className="col-span-12 md:col-span-6">
                                    <label className="font-semibold" htmlFor="enquiryTime">
                                        Enquiry Time <i className="ml-2 fa-solid text-sm text-red-500 fa-star"></i>
                                    </label>
                                    <select
                                        className="mt-1 w-full p-3 outline-none border rounded border-black-400 focus:ring-2 focus:ring-black-400 "
                                        required
                                        id="enquiryTime"
                                        name="enquiryTime"
                                        defaultValue=""
                                    >
                                        <option value="" disabled>
                                            Select Time
                                        </option>
                                        <option value="anytime">Anytime</option>
                                        <option value="noon">Noon</option>
                                        <option value="evening">Evening</option>
                                    </select>
                                </div>

                                <div className="col-span-12 mb-4">
                                    <label className="font-semibold block mb-2">
                                        Upload Images <i className="ml-2 fa-solid fa-star text-sm text-red-500"></i>
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
                                        <div key={index} className="col-span-6 flex justify-center items-center border border-black-400 rounded overflow-hidden">
                                            <img
                                                src={img.url}
                                                alt={`preview-${index}`}
                                                className="size-30 object-cover"
                                            />
                                        </div>
                                    ))}
                                                           
                                {/* Submit Button */}
                                <div className="col-span-12 m-auto mt-4">
                                    <button type="submit"
                                        className="bg-yellow-500  px-6 py-2 rounded hover:bg-yellow-300 text-black-600 transition duration-300">
                                        Add Product
                                    </button>
                                </div>

                            </div>
                        </form>


                    </div>
                </div>

            </div>
        </>
    )

}