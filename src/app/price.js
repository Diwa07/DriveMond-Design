import React, { useState } from "react";
import Nav from "./nav";
import bg from "../images/bg2.webp";
import img from "../images/img.webp";
import drive from "../images/drive.webp";

import { FaCheckCircle } from "react-icons/fa";

const Price = () => {
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

  const prices = [
    {
      type: "Basic",
      discountPrice: "$159",
      saving: "40% Savings",
      features: [
        "Lifetime Update",
        "Landing Page",
        "DriveMond Admin Panel",
        "DriveMond User App",
      ],
    },
    {
      type: "Combo",
      discountPrice: "$239",
      saving: "40% Savings",
      features: [
        "Lifetime Update",
        "Landing Page",
        "DriveMond Admin Panel",
        "DriveMond User App",
        "DriveMond Driver App",
      ],
    },
    {
      type: "Agency",
      discountPrice: "$399",
      saving: "80% Savings",
      features: [
        "Lifetime Update",
        "Landing Page",
        "DriveMond Admin Panel",
        "DriveMond User App",
        "DriveMond Driver App",
      ],
    },
  ];

  return (
    <>
      <Nav />

      <div className="relative h-auto    text-[#ffffffe3] ">
        <div className="h-screen  lg:h-[80%] ">
          <img src={bg} alt="" className="w-full h-full" />
        </div>
        <div className="w-full ">
          <div className="absolute mt-[2rem]    top-0 flex flex-col items-center">
            <div className="flex flex-col px-4 text-center ">
              <h1 className="text-3xl font-[24px] py-7">
                <span className="text-[#00A08D] text-4xl">DriveMond</span>
                Script Pricing
              </h1>
              <h1 className="py-4  text-[1rem] lg:text-xl mb-7">
                <p className="mb-2">
                  Purchase the DriveMond script in the best package that
                </p>
                <p>
                  
                  suits you best. Start your ride sharing & parcel delivery
                </p>
                <p>project today!</p>
              </h1>
            </div>
            <div className="flex justify-center mb-6 ">
              <div className=" w-[70%]   lg:w-[80%]">
                <div className="flex mb-[4rem] font-semibold justify-center">
                  <p className="border-[2px] flex rounded-3xl text:xl md:text-2xl">
                    <button
                      className={` px:[1rem] sm:px-[2rem] rounded-2xl py-3 ${
                        showAnnual ? "bg-[#FFFFFF] text-[#00A08D]" : ""
                      }`}
                      onClick={toggleAnnual}
                    >
                      Annual
                    </button>
                    <button
                      className={`px:[1rem] sm:px-[2rem]  rounded-2xl py-3 ${
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
                    {prices &&
                      prices.map((item, id) => {
                        return (
                          <div
                            className={` text-black border-[1px] border-[#00423A] rounded-xl mb-5 flex flex-col justify-between py-5 px-1 sm:px-5 ${
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
                              <div>
                                <li className="mb-2 text-3xl ">{item.type}</li>
                                <strike className="text-2xl">
                                  {item.discountPrice}
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
                            </ul>
                            <hr
                              className={`${
                                id === 1
                                  ? "border-[white] border "
                                  : " border-[#00A08D] border"
                              }`}
                            />
                            <ul className="flex flex-col px-3 mb-4 md:px-7 i ">
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
                                  id === 1 ? "bg-[white]  " : " bg-[#00A08D] "
                                } h-[3rem] lg-px-7 px-4 items-center   font-bold   rounded-2xl hover:bg-[#00423A] ${
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
                    {prices &&
                      prices.map((item, id) => {
                        return (
                          <div
                            className={` text-black border-[1px] border-[#00423A] rounded-xl mb-5 flex flex-col justify-between py-5 px-1 sm:px-5 ${
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
                              <div>
                                <li className="mb-2 text-3xl ">{item.type}</li>
                                <strike className="text-2xl">
                                  {item.discountPrice}
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
                                  id === 2 ? "bg-[white]  " : " bg-[#00A08D] "
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
            <div className="h-[auto] w-[100%] md:w-[80%] border  lg:mt-0 mt-5    flex justify-center py-7 bg-[#D0F4EE] ">
              <div className="w-[75%]  ">
                <center className="text-2xl text-[#00423A]">
                  DriveMond Driver App- Addon
                </center>
                <div className="grid grid-cols-1 gap-5 py-1 mt-3 lg:grid-cols-2">
                  <div className="bg-[#96E2D6] flex justify-between flex-col md:flex-row  px-2 sm:px-5 rounded-2xl py-[2rem] md: h-[11rem]">
                    <div className="h-[4rem] flex w-[4rem]">
                      <img src={drive} alt="" />
                      <p className="text-2xl ml-3 text-[#00A08D]">
                        Annual
                        <p className="flex gap-5 text-3xl font-bold">
                          <strike>$53</strike> $39
                        </p>
                      </p>
                    </div>
                    <p className="flex justify-center mt-4">
                      <button className="h-[3rem]  lg-px-7 px-4 md:items-center items-end  lg:font-bold  lg:text-xl  rounded-2xl text-white hover:bg-[#00423A] bg-[#006156]">
                        Buy Now
                      </button>
                    </p>
                  </div>
                  <div className="bg-[#96E2D6] flex justify-between flex-col md:flex-row px-2 sm:px-5 rounded-2xl py-[2rem] md: h-[11rem]">
                    <div className="h-[4rem] flex w-[4rem]">
                      <img src={drive} alt="" />
                      <p className="text-2xl ml-3  text-[#00A08D]">
                        Lifetime
                        <p className="flex gap-5 text-3xl font-bold">
                          <strike>$199</strike> $99
                        </p>
                      </p>
                    </div>
                    <p className="flex justify-center mt-4 md:justify-end ">
                      <button className="h-[3rem]  lg-px-7 px-4 md:items-center items-end  lg:font-bold  lg:text-xl  rounded-2xl text-white hover:bg-[#00423A] bg-[#006156]">
                        Buy Now
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Price;
