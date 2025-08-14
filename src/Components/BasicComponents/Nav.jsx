import { useState, useRef, useEffect } from 'react';
import React from 'react'
import logo from '/src/assets/logo.png';
import {Link, Outlet, NavLink } from 'react-router';


function Nav({ leftSpace }) {
  const [showMenu, setShowMenu] = useState(true);
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
    <div className={`ml-${leftSpace} bg-california-100 flex items-center`}>
        <div className='  flex items-center  md:w-3/4 w-1/2'>
          <Link to="/"> <img className='h-10 m-2' src={logo}></img></Link>
          <ul className='hidden md:flex flex-wrap ml-10 navul'>
            <li ><NavLink to="/">Home</NavLink></li>
            <li ><NavLink to="/aboutUs">AboutUs</NavLink></li>
            <li ><NavLink to="/store">Store</NavLink></li>
            <li ><NavLink to="/blogs">Blogs</NavLink></li>
            <li ><NavLink to="/contactUs">ContactUs</NavLink></li>

          </ul>
        </div>
        <div className='w-1/2 md:w-1/4   flex justify-end '>
        <Link to="/signUp">  <button className='mr-5 button-goldenflare-lite  hover:bg-goldenflare-500  hover:border-goldenflare-600' href="#">Get Started</button></Link>
        </div>
        {/* drop doun icon */}
        <div className='flex md:hidden relative'>
          <div>
            <button onClick={() => setShowMenu(!showMenu)} ><i className="mr-4 text-3xl hover:text-codgray-300 fa-solid fa-bars"></i></button>
          </div>
          {showMenu ?
            <div ref={dropdownRef}  className="navDroupDownOuter absolute z-10000">
              <ul className='navul mx-6 [&>li>NavLink]:w-full ' >
                <li onClick={() => { setShowMenu(!showMenu) }} ><NavLink to="/">Home</NavLink></li>
                <li onClick={() => { setShowMenu(!showMenu) }}><NavLink to="/aboutUs">AboutUs</NavLink></li>
                <li onClick={() => { setShowMenu(!showMenu) }} ><NavLink to="/store">Store</NavLink></li>
                <li onClick={() => { setShowMenu(!showMenu) }} ><NavLink to="/blogs">Blogs</NavLink></li>
                <li onClick={() => { setShowMenu(!showMenu) }}><NavLink to="/contactUs">ContactUs</NavLink></li>


              </ul>
            </div>
            : ""}
        </div>
      </div>
      {/* nested routing enabled */}
      <Outlet /> {/* This renders the nested route */}

    </>
  )
}
export default Nav;