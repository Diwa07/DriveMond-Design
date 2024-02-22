import React from "react";
import hero from "../images/hero.webp";
import Nav from "./nav";
import SecondPage from "./secondPage";

const HeroSection = () => {
  return (
    <>
      <div className="h-auto  shadow-[inset_0px_0px_400px_16px_rgba(0,160,141,0.0999)]  ">
        <Nav />
        <div className="grid items-center grid-cols-1 gap-10 py-8 lg:grid-cols-2 px-9">
          <div className=" text-[#00A08D]  ">
            <h1 className="text-4xl  text-[#00423A]   font-normal ">

              <p className="mb-4">
                
                Complete
                <span className="text-[#00A08D]  font-bold text-4xl">
                  
                  Ride Sharing and Parcel
                </span>
              </p>
              <span className="text-[#00A08D] font-bold   text-4xl">
                Delivery
              </span>
              Solution
            </h1>
            <h2 className="mt-6 text-xl font-normal ">
              DriveMond is a complete ride sharing & parcel delivery solution
              that comes with PHP script.
            </h2>
            <div className="flex py-9 gap-7">
              <button className="md:px-7 px-2 py-5 rounded-2xl bg-[#003C32] font-bold text-2xl text-white">
                Buy Now
              </button>
              <button className=" md:px-7 px-2  py-5 text-[#00423A]   border border-[#006156] font-bold text-2xl rounded-2xl">
                Explore Demo
              </button>
            </div>
          </div>
          <div >
            <img className="object-cover w-full h-full" src={hero} alt="img" />
          </div>
        </div>
        
      </div>
      <SecondPage />
    </>
  );
};

export default HeroSection;
