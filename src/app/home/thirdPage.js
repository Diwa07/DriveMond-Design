import React from "react";
import php from "../../images/PHP.png";
const ThirdPage = () => {
  return (
    <div className="py-[5rem] text-2xl px-5 md:text-2xl text-black">
      <h1 className="flex flex-col justify-center px-8 text-center md:px-5">
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
                <img src={php} alt="" className="w-full py-2 bg-white " />
                PHP
              </li>
              <li>
                <img src={php} alt="" className="w-full py-2 " />
                MYSQL
              </li>
              <li>
                <img src={php} alt="" className="w-full py-2 " />
                fluttter
              </li>
              <li>
                <img src={php} alt="" className="w-full py-2 " />
                Laravel
              </li>
              <li>
                <img src={php} alt="" className="w-full py-2 " />
                Map Api
              </li>
            </ul>
            <ul className="flex  gap-1 p-7 w-[80%] [1.2rem]  bg-[#EAFBF9] rounded-2xl    text-[#003F37] font-bold text-center ">
             
            <li className="">
                <img src={php} alt="" className="w-full p-5 py-2 " />
                Anroid              </li>
              <li>
                <img src={php} alt="" className="w-full p-5 py-2 " />
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
