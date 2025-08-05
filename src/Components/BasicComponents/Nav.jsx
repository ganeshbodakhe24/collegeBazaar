import { useState ,useRef, useEffect} from 'react';
import React  from 'react'
import logo from '/src/assets/logo.png';

function Nav(){
    const[showMenu, setShowMenu]=useState(true);
    const dropdownRef = useRef(null); // for detecting outside click

    useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
    return (
            <>
            <div className='bg-california-100 flex  items-center' >
                <div className='  flex items-center  md:w-3/4 w-1/2'>
                <img className='h-10 m-2'  src={logo}></img>
                <ul className='hidden md:flex flex-wrap ml-10 navul'>
                    <li ><a  href=''>Home</a></li>
                    <li ><a href=''>AboutUs</a></li>
                    <li ><a href=''>Store</a></li>
                    <li ><a href=''>Blogs</a></li>
                    <li ><a href=''>ContactUs</a></li>
                    
                </ul>
                </div>
                <div className='w-1/2 md:w-1/4   flex justify-end '>
                    <button  className='mr-5 button-goldenflare-lite  hover:bg-goldenflare-500  hover:border-goldenflare-600' href="#">Get Started</button>
                </div>
                {/* drop doun icon */}
                <div className='flex md:hidden relative'>
                    <div>
                    <button onClick={()=>setShowMenu(!showMenu)} ><i className="mr-4 text-3xl hover:text-codgray-300 fa-solid fa-bars"></i></button>
                    </div>
                    {showMenu?
                    <div ref={dropdownRef} c className="navDroupDownOuter absolute z-10000">
                        <ul className='navul mx-6 [&>li>a]:w-full ' >
                            <li onClick={()=>{setShowMenu(!showMenu)}}><a href=''>Home</a></li>
                            <li ><a href=''>AboutUs</a></li>
                            <li ><a href=''>Store</a></li>
                            <li ><a href=''>Blogs</a></li>
                            <li ><a href=''>ContactUs</a></li>
    
                        </ul>
                    </div>
                     : ""}
                </div>
            </div>
            </>
    )
}
export default Nav;