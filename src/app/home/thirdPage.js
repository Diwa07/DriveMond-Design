import React from "react";
import php from "../../images/PHP.png";
import anroid from "../../images/anroid.png";
import ios from "../../images/ios.png";
import mysql from "../../images/mysql.webp";
import flutter from "../../images/flutter.svg";
import laravel from "../../images/laravel.png";
import map from "../../images/map.png";
const ThirdPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5 mt-4 text-2xl text-black md:text-2xl">
      <h1 className="flex flex-col px-8 text-center md:px-5">
        <p>Developed Using Latest Tech for Seamless &nbsp;</p>
        <p>
          
          <span className="text-[#003F37]  text-center font-bold ">
            Cross-Platform
          </span> &nbsp;
          Operation
        </p>
      </h1>
      <div className="h-auto p-4  mt-[2rem] w-full ">
        <div className="px-[7%]   ">
          <div className="grid gap-[2rem]   grid-cols-1 lg:grid-cols-2">
            <ul className="grid md:grid-cols-5  grid-cols-3 gap-4 text-[1.2rem]   py-10 bg-[#EAFBF9]  px-4 rounded-2xl  text-[#003F37] font-bold text-center ">
              <li>
                <img src={php} alt="" className="w-full  h-[6rem] px-5 py-4 bg-white " />
                PHP
              </li>
              <li>
                <img src={mysql} alt="" className="w-full  h-[6rem] px-5 py-4 bg-white " />
                MYSQL
              </li>
              <li>
                <img src={flutter} alt="" className="w-full  h-[6rem] px-5 py-4 bg-white " />
                fluttter
              </li>
              <li>
                <img src={laravel} alt="" className="w-full  h-[6rem] px-5 py-4 bg-white " />
                Laravel
              </li>
              <li className="">
                <img src={map} alt="" className="w-full h-[6rem] px-5 py-3 bg-white " />
                Map Api
              </li>
            </ul>
            <ul className="flex  gap-3 p-7 w-fit [1.2rem]  bg-[#EAFBF9] rounded-2xl    text-[#003F37] font-bold text-center ">
             
            <li className="">
                <img src={anroid} alt="" className="w-full h-[6rem] py-4 bg-white px-7 " />
                Anroid              </li>
              <li>
                <img src={ios} alt="" className="w-full  h-[6rem] py-4 bg-white px-7 " />
              ios
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
