import React from "react";
import logo from "../images/drivemond-white-primary-logo.webp";
import { MdLocationPin } from "react-icons/md";
import { MdMarkEmailRead } from "react-icons/md";

const Footer = () => {
  return (
    <div className="md:h-screen/2 flex flex-col mt-4 justify-center  text-[white] bg-[#00211D]">
      <div className="h-full bg-[#00211D]  text-center px-[7%] py-[4%] grid-cols-1  gap-[2%] grid md:grid-cols-3 ">
        <div className="">
          <h1 className="flex justify-center text-3xl ">
            <img src={logo} alt="" className="h-11" />
          </h1>
          <p className="flex py-5 px-7 ">
            DriveMond is a complete ride sharing and parcel delivery solution
            that comes with full source code. With DriveMond, you’ll get an
            admin panel and a user app at once. You can launch your ride sharing
            business today with DriveMond!
          </p>
        </div>
        <div>
          <h1 className="py-4 text-3xl font-bold">Contact Us </h1>
          <ol className="flex flex-col items-center gap-4">
            <li className="flex gap-4">
              <MdLocationPin className="text-4xl" />
              30 N Gould ST STE R, Sheridan, WY 82801
            </li>
            <li className="flex gap-4">
              
              <MdMarkEmailRead className="text-4xl" /> support@6amtech.com
              Support Ticket
            </li>
            <li>
              <button className="px-4 text-xl flex gap-4 items-center py-2 rounded-md   text-[#003C32]  lg:text-2xl bg-white">
                Support Ticket
              </button>
            </li>
          </ol>
        </div>

        <div>
          <h1 className="py-4 text-3xl font-bold"> Quick Links</h1>
          <ol className="flex flex-col items-center gap-4">
            <li>Privacy Policy</li> <li>Service & Support Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund Policy</li> <li>Change Log </li> <li> Cookie Policy</li>
          </ol>
        </div>
      </div>
      <div className="h-[3rem] mt-5  flex justify-center items-center rounded-tl-[30rem] rounded-tr-[30rem]  bg-black text-white">
        <h1>© 2024 6amTech. All rights reserved</h1>
      </div>
    </div>
  );
};

export default Footer;
