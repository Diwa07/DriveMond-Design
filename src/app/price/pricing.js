import React, { useState } from "react";
import Nav from "../nav";
import bg from "../../images/bg2.webp";
import img from "../../images/img.webp";

import Lifetimeprices from "./Lifetimeprices";
import { FaCheckCircle } from "react-icons/fa";
import Annualprices from "./Annualprices";


const Pricing = () => {
  const [showAnnual, setShowAnnual] = useState(true);
  const [showLifetime, setShowLifetime] = useState(false);

  const toggleAnnual = () => {
    setShowAnnual(true);
    setShowLifetime(false);
  };

  const toggleLifetime = () => {
    setShowLifetime(true);
    setShowAnnual(false);
  };

  return (
    < >


      <div className="h-auto relative    text-[#ffffffe3] " style={{ backgroundImage: `url(${bg})` , backgroundSize: 'cover', backgroundPosition: 'center' ,  }} >
        <div className="absolute top-0 "  >
 </div>
 <div className="w-full ">
          <div className=" mt-[2rem]    flex flex-col items-center">
            <div className="flex flex-col px-4 text-center ">
              <h1 className="text-3xl font-[24px] py-7">
                <span className="text-[#00A08D] text-4xl">DriveMond</span>
                Script Pricing
              </h1>
              <h1 className="py-4  text-[1rem] lg:text-xl mb-7">
                <p className="mb-2">
                  Purchase the DriveMond script in the best package that
                </p>
                <p>suits you best. Start your ride sharing & parcel delivery</p>
                <p>project today!</p>
              </h1>
            </div>
            <div className="flex justify-center mb-6 ">
              <div className=" w-[85%]   lg:w-[90%]">
                <div className="flex mb-[4rem] font-semibold justify-center">
                  <p className="border-[2px] flex rounded-3xl text:xl md:text-2xl">
                    <button
                      className={` px-[2rem] rounded-2xl py-3 ${
                        showAnnual ? "bg-[#FFFFFF] text-[#00A08D]" : ""
                      }`}
                      onClick={toggleAnnual}
                    >
                      Annual
                    </button>
                    <button
                      className={`px-[2rem]  rounded-2xl py-3 ${
                        showLifetime ? "bg-[#FFFFFF] text-[#00A08D]" : ""
                      }`}
                      onClick={toggleLifetime}
                    >
                      Lifetime
                    </button>
                  </p>
                </div>

                {showAnnual && (
                  <div className="grid justify-start grid-cols-1 sm:items-center md:grid-cols-3">
                    {Annualprices &&
                      Annualprices.map((item, id) => {
                        return (
                          <div
                            className={` text-black border-[1px]  border-[#00423A]  rounded-xl mb-5 flex flex-col justify-between py-5 px-3 sm:px-5 ${
                              id === 1
                                ? " h-auto lg:h-[35rem] text-white "
                                : " h-auto lg:h-[31rem] text-[black] "
                            }  w-auto sm:w-full ${
                              id === 1 ? "bg-[#00A08D] " : "bg-[white]"
                            } ${
                              id === 1 ? "mt-0 md:mt-[-1rem] text-[white] " : ""
                            }`}
                          >
                            <ul
                              className={`${
                                id === 1 ? " text-[white]" : "text-[#00A08D]"
                              } flex `}
                            >
                              <div className="grid grid-cols-2 ">
                                <div>
                                  <li className="mb-2 text-3xl ">
                                    {item.type}
                                  </li>
                                  <strike className="text-2xl">
                                    {item.discountedPrice}
                                  </strike>
                                  <li className="mb-2 text-4xl font-bold">
                                    {item.price}
                                  </li>
                                  <li className="mb-2 text-2xl ">
                                    {item.saving}
                                  </li>
                                </div>

                                <div>
                                  <img src={img} alt="" />
                                </div>
                              </div>
                            </ul>
                            <hr
                              className={`${
                                id === 1
                                  ? "border-[white] border "
                                  : " border-[#00A08D] border"
                              }`}
                            />
                            <ul className="flex flex-col px-3 mb-4 sm:px-7 i ">
                              {item.features.map((feature, index) => (
                                <li className="   flex gap-4   items-center   mt-[1rem]">
                                  <span
                                    className={`${
                                      id === 1
                                        ? "text-[white]"
                                        : " text-[#00A08D]"
                                    }`}
                                  >
                                    <FaCheckCircle />
                                  </span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <li className="flex justify-start px-5 sm:px-0 sm:justify-center">
                              <button
                                className={`${
                                  id === 1 ? "bg-[white]  " : " bg-[#00423A] "
                                } h-[3rem] lg-px-7 px-4 items-center   font-bold    rounded-2xl hover:bg-[#00423A] ${
                                  id === 1 ? "text-[#00A08D] " : "text-white "
                                } `}
                              >
                                Buy Now
                              </button>
                            </li>
                          </div>
                        );
                      })}
                  </div>
                )}

                {showLifetime && (
                  <div className="grid justify-start grid-cols-1 sm:items-center md:grid-cols-3">
                    {Lifetimeprices &&
                      Lifetimeprices.map((item, id) => {
                        return (
                          <div
                            className={` text-black border-[1px] border-[#00423A] rounded-xl mb-5 flex flex-col justify-between py-5 px-3 sm:px-5 ${
                              id === 2
                                ? " h-auto lg:h-[35rem] text-white "
                                : " h-auto lg:h-[31rem] text-[black] "
                            }  w-auto sm:w-full ${
                              id === 2 ? "bg-[#00A08D] " : "bg-[white]"
                            } ${
                              id === 2 ? "mt-0 md:mt-[-1rem] text-[white] " : ""
                            }`}
                          >
                            <ul
                              className={`${
                                id === 2 ? " text-[white]" : "text-[#00A08D]"
                              } flex `}
                            >
                              <div className="grid grid-cols-2">
                                <div>
                                  <li className="mb-2 text-3xl ">
                                    {item.type}
                                  </li>
                                  <strike className="text-2xl">
                                    {item.discountedPrice}
                                  </strike>
                                  <li className="mb-2 text-4xl font-bold">
                                    {item.price}
                                  </li>
                                  <li className="mb-2 text-2xl ">
                                    {item.saving}
                                  </li>
                                </div>

                                <div>
                                  <img src={img} alt="" />
                                </div>
                              </div>
                            </ul>
                            <hr
                              className={`${
                                id === 2
                                  ? "border-[white] border "
                                  : " border-[#00A08D] border"
                              }`}
                            />
                            <ul className="flex flex-col px-3 mb-4 sm:px-7 i ">
                              {item.features.map((feature, index) => (
                                <li className="   flex gap-4   items-center   mt-[1rem]">
                                  <span
                                    className={`${
                                      id === 2
                                        ? "text-[white]"
                                        : " text-[#00A08D]"
                                    }`}
                                  >
                                    <FaCheckCircle />
                                  </span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                            <li className="flex justify-start px-5 sm:px-0 sm:justify-center">
                              <button
                                className={`${
                                  id === 2 ? "bg-[white]  " : " bg-[#00423A] "
                                } h-[3rem] lg-px-7 px-4 items-center   font-bold   rounded-2xl hover:bg-[#00423A] ${
                                  id === 2 ? "text-[#00A08D] " : "text-white "
                                } `}
                              >
                                Buy Now
                              </button>
                            </li>
                          </div>
                        );
                      })}
                  </div>
                )}
              </div>
            </div>
           
          
          </div>
        </div>
        
      </div>

    </>
  );
};

export default Pricing;
