import React, { useState } from "react";
import logo from "../images/logo.webp";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";

const Nav = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <nav className="flex w-screen py-3   justify-between  px-7 xl:h-20 items-center bg-[#FFFFFF] ">
        <div className="flex-shrink-0">
          <Link to="/">
          
            <img src={logo} alt="logo" className="w-24 md:w-32" />
          </Link>
        </div>
        <ol className="hidden py-1 font-medium lg:flex px-7 gap-7">
          <Link to="/">
            <li className="hover:text-[#006156]  cursor-pointer  ">Demo</li>
          </Link>
          <li className="hover:text-[#006156] cursor-pointer">Features</li>
          <Link to="/price">
            <li className="hover:text-[#006156] cursor-pointer">Pricing</li>
          </Link>
          <li className="hover:text-[#006156] cursor-pointer">Installation</li>
          <li className="hover:text-[#006156] cursor-pointer">Feedback</li>
          <li className="hover:text-[#006156] cursor-pointer">Get Help</li>
        </ol>
        <div className="flex h-[3rem] w-auto gap-0   items-center  lg:gap-7">
          <div className="flex items-center px-2 text-2xl gap-5 text-[#423f3f] cursor-pointer ">
            <div className="relative text-2xl">
              <FaCartShopping />
              <div className="absolute bottom-6 left-3">
                <p className="text-white bg-[#006156] text-[1.3rem] h-5 w-5 rounded-full flex items-center justify-center ">
                  1
                </p>
              </div>
            </div>
            <IoMdContact className="text-3xl" />
          </div>

          <button className="h-[3rem] lg-px-7 px-2 items-center hidden lg:flex  lg:font-bold  lg:text-xl  rounded-2xl text-white hover:bg-[#00423A] bg-[#006156]">
            Buy Now
          </button>
          <div className=" lg:hidden">
            <GiHamburgerMenu
              onClick={() => {
                setShowNav(true);
              }}
              className="text-3xl cursor-pointer"
            />
            {showNav && (
              <div className="absolute right-0 z-50 w-[40%] h-fit  bg-white border border-gray-300 top-4">
                <div className="hover:text-[red] cursor-pointer mb-2  text-3xl flex justify-end px-7 py-1  ">
                
                  <MdOutlineCancel
                    onClick={() => {
                      setShowNav(false);
                    }}
                  />
                </div>
                <ol className="px-4 py-4 ">
                  <Link to="/">
                    <li className="hover:text-[#006156] cursor-pointer mb-7 border border-[#006156] rounded-2xl px-6 hover:bg-[#808080be] py-2">
                      Demo
                    </li>
                  </Link>
                  <li className="hover:text-[#006156] cursor-pointer mb-7 border border-[#006156] rounded-2xl px-6 hover:bg-[gray] py-2">
                    Features
                  </li>
                  <Link to="/price">
                    <li className="hover:text-[#006156] cursor-pointer mb-7 border border-[#006156] rounded-2xl px-6 hover:bg-[gray] py-2">
                      Pricing
                    </li>
                  </Link>
                  <li className="hover:text-[#006156] cursor-pointer mb-7 border border-[#006156] rounded-2xl px-6 hover:bg-[gray] py-2">
                    Installation
                  </li>
                  <li className="hover:text-[#006156] cursor-pointer mb-7 border border-[#006156] rounded-2xl px-6 hover:bg-[gray] py-2">
                    Feedback
                  </li>
                  <li className="hover:text-[#006156] cursor-pointer mb-7 border border-[#006156] rounded-2xl px-6 hover:bg-[gray] py-2">
                    Get Help
                  </li>
                  <li className="flex justify-center">
                    <button className="h-[3rem] lg-px-7 px-4 items-center      rounded-2xl text-white hover:bg-[#00423A] bg-[#006156]">
                      Buy Now
                    </button>
                  </li>
                </ol>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
