import React from "react";
import hero from "../../images/hero.webp";
import Nav from "../nav";


const HeroSection = () => {
  return (
    <>
      <div className="h-auto  shadow-[inset_0px_0px_400px_16px_rgba(0,160,141,0.0999)]  ">
        <Nav /> 
        <div className="overflow-hidden" >
        <div className="grid items-center gap-10 py-8 text-center lg:grid-cols-2 px-9">
          <div className="   pl-10 text-[#00A08D]  ">
            <h1 className="text-3xl md:text-4xl lg:justify-start grid  text-[#00423A]   font-normal ">

              <p className="mb-1 md:mb-4">
                
                Complete
                <span className="text-[#00A08D] ml-3  font-bold text-2xl md:text-4xl">
                  
                  Ride Sharing and Parcel
                </span>
              </p>
             <p className="flex items-center justify-center gap-3 text-2xl lg:justify-start" >
             <span className="text-[#00A08D] font-bold    text-3xl md:text-4xl">
                Delivery
              </span>
            <span> Solution</span> 
             </p>
            </h1>
            <h2 className="flex justify-between text-xl font-normal md:justify-center lg:justify-start mt-7 ">
              DriveMond is a complete ride sharing & parcel delivery solution
              that comes with PHP script.
            </h2>
            <div className="mt-9 ">
           <div className="px-[5%] flex justify-around md:justify-center  gap-3 sm:justify-center sm:gap-5  md:gap-7 sm:px-7 md:px-0   " >
           <button className="md:px-7 px-4 py-4 md:py-5 rounded-2xl bg-[#003C32] font-bold   md:text-2xl text-white">
                Buy Now
              </button>
              <button className=" md:px-7 px-2  py-4 md:py-5  text-[#00423A]   border border-[#006156] font-bold  md:text-2xl rounded-2xl">
                Explore Demo
              </button>
           </div>
            </div>
          </div>
          <div  >
            <img className="object-cover w-full h-full" src={hero} alt="img" />
          </div>
        </div>
        </div>
        
      </div>
    </>
  );
};

export default HeroSection;
