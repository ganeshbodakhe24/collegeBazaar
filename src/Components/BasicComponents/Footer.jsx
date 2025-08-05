import React from "react";
import logo from "../../assets/logo.png";
import facebook_img from "../../assets/facebook.png";
import instagram_img from "../../assets/instagram.png";
import twitter_img from "../../assets/twitter.png";
export default function Footer() {
  return (
    <>
      <div className=" shadow-black   footer-bg p-5 flex justify-evenly flex-col sm:flex-row items-center sm:items-start">

        {/* img and sescription */}
        <div className=" w-full  sm:w-1/4  justify-center ">
          <img className="w-1/2  sm:w-1/1" src={logo}></img>
          <br></br>
          <p>
            College Bazaar is a student-run platform to buy, sell, and exchange
            items within the campus. From books to bikes – everything at your
            fingertips!
          </p>
          <br></br>
          <div className="flex [&>*]:mx-3 [&>*]:w-10">
            <a href="#">
              <img src={facebook_img} alt="facebook"></img>
            </a>
            <a href="#">
              <img src={instagram_img} alt="instagram"></img>
            </a>
            <a href="#">
              {" "}
              <img src={twitter_img} alt="twitter"></img>
            </a>
          </div>
        </div>

        {/* links */}
        <div className="my-4 sm:my-0 w-full  sm:w-1/4 flex flex-col  sm:items-center">
          <ul className="p-0 navul m-0  [&>li>a]:w-full ">
            <li className="font-extrabold sm:border-b-3 mt-0">Links</li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">AboutUs</a>
            </li>
            <li>
              <a href="">Store</a>
            </li>
            <li>
              <a href="">Blogs</a>
            </li>
            <li>
              <a href="">ContactUs</a>
            </li>
          </ul>
        </div>
        {/* location */}
        <div className="w-full sm:w-1/4">
          
            <h3 className="font-extrabold border-b-3 inline-block ">Our Location</h3>
            <br></br>
              <br></br>
            <h1>GCOEARE<br></br> Manchar Pune, Maharashtra</h1>
            <br></br>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15135.178078940915!2d73.83014335!3d18.49296445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1753689665745!5m2!1sen!2sin"
             width="100%"
            
              style={{ border: 0, borderRadius: "0.5rem" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="College Location"
            ></iframe>
            
           <a href="mailto:bodakheganesh24@gmail.com"> <h3 className="font-bold my-2 underline">bodakheganesh24@gmail.com</h3></a>
            <a href="tel:L+919356297133"><h3 className="font-bold ">+91-9356297133</h3></a>
          
        </div>
      </div>
      
      {/* hr */}
      <div className="border-t-[0.1px] bg-black-200  w-full flex justify-center footer-bg">
      <p>&copy; 2025 all  rights reserved by Developer</p>
</div>
     
    </>
  );
}
