import React from 'react'
import drive from "../../images/drive.webp";

const PriceSecondpage = () => {
  return (
    <div> <div className="h-[auto] w-[100%]  border  lg:mt-0 mt-5    flex justify-center py-7 bg-[#D0F4EE] ">
    <div className=" w-[90%] md:w-[75%]   ">
      <center className="text-2xl py-6 text-[#00423A]">
        DriveMond Driver App-  <span className="text-[#00A08D] font-bold " > Addon</span> 
      </center>
      <div className="grid grid-cols-1 gap-5 py-1 mt-3 lg:grid-cols-2">
        <div className="bg-[#96E2D6] flex justify-between md:items-center p-2 h-fit flex-col md:flex-row  md:px-5 rounded-2xl py-[2rem] md:h-[11rem]">
          <div className="flex justify-between w-full " >
          <div className="flex " >
          <div className="h-[4rem]  flex w-[4rem]"> <img src={drive} alt="" /></div>
            <p className="text-2xl ml-3 text-[#00A08D]">
              Annual
              <p className="flex gap-3 text-3xl font-bold">
                <strike>$53</strike> <span className="text-[#00423A]" >  $39</span>
              </p>
            </p>
          </div>
            <div className="flex items-center justify-end md:justify-center">
            <button className="h-[2rem] flex  items-center py-5 lg-px-7 px-5   lg:font-bold  lg:text-xl  rounded-md text-white hover:bg-[#00423A] bg-[#006156]">
              Buy Now
            </button>
          </div>
          </div>
         
        </div>
        <div className="bg-[#96E2D6] flex justify-between md:items-center flex-col md:flex-row  h-fit px-[3%] md:px-5 rounded-2xl py-[2rem] md:h-[11rem]">
          <div className="flex justify-between w-full " >
          <div className="flex " >
          <div className="h-[4rem]  flex w-[4rem]"> <img src={drive} alt="" /></div>
            <p className="text-2xl ml-3 text-[#00A08D]">
              Lifetime
              <p className="flex gap-3 text-3xl font-bold">
                <strike>$199</strike> <span className="text-[#00423A]" >  $99</span>
              </p>
            </p>
          </div>
            <div className="flex items-center justify-end md:justify-center">
            <button className="h-[2rem] flex  items-center py-5 lg-px-7 px-5   lg:font-bold  lg:text-xl  rounded-md text-white hover:bg-[#00423A] bg-[#006156]">
              Buy Now
            </button>
          </div>
          </div>
         
        </div>
    
      </div>
     
    </div>
  </div></div>
  )
}

export default PriceSecondpage