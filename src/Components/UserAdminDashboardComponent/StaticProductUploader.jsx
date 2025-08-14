import React, { useState } from "react";

// export default function StaticProductUploader() {
//   const [images, setImages] = useState([]);

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();

//     // Static fields
//     formData.append("product_name", "python");
//     formData.append("description", "nice python book");
//     formData.append("quantity", "1");
//     formData.append("category", "2");
//     formData.append("price_per_piece", "3423");
//     formData.append("address", "gcoeara");
//     formData.append("phone_no", "434434");
//     formData.append("enquiry_time", "2");
//     formData.append("product_added_by", "18");


//     // Dynamic images
//     images.forEach((file) => {
//       formData.append("images", file);
//     });

//     try {
//       const res = await fetch("http://localhost:5000/user/addProduct",
//          {
//         method: "POST",
//         headers: {
//     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIwLCJlbWFpbCI6ImJvZGFraGVnYW5lc2gzNEBnbWFpbC5jb20iLCJpYXQiOjE3NTQ5OTIzODgsImV4cCI6MTc1NTAwMzE4OH0.8J7EjVeh60ta5iZCGk0C_j0yBz5zE-2ePeXYRAQ_Y7k`, // put your token here
//   },
//         body: formData,
//       });

//       const data = await res.json();
//       console.log("Response:", data);
//       alert("Product uploaded successfully!");
//     } catch (err) {
//       console.error("Upload failed:", err);
//       alert("Error uploading product");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Static Product Upload</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Upload Images:</label>
//           <input
//             type="file"
//             accept="image/*"
//             multiple
//             onChange={handleImageChange}
//           />
//         </div>
//         <button type="submit">Upload Product</button>
//       </form>
//     </div>
//   );
// }

export default function StaticProductUploader() {

const [image, setImage] = useState(null);

const handleImageChange = (e) => {
  setImage(e.target.files[0]); // store only one file
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("image", image); // key name must match backend multer.single("image")

  try {
    const res = await fetch("http://localhost:5000/user/updateProfilePhoto", {
      method: "POST",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIwLCJlbWFpbCI6ImJvZGFraGVnYW5lc2gzNEBnbWFpbC5jb20iLCJpYXQiOjE3NTQ5OTIzODgsImV4cCI6MTc1NTAwMzE4OH0.8J7EjVeh60ta5iZCGk0C_j0yBz5zE-2ePeXYRAQ_Y7k`,
      },
      body: formData,
    });

    const data = await res.json();
    console.log("Response:", data);
  } catch (err) {
    console.error("Upload failed:", err);
  }
};

return (
  <form onSubmit={handleSubmit}>
    <input type="file" accept="image/*" onChange={handleImageChange} />
    <button type="submit">Upload Photo</button>
  </form>
);
}