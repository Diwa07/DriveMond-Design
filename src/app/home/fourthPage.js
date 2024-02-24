import React from "react";
import bg from '../../images/bg.webp'

const FourthPage = () => {

  return (
    <>
   
      <div className="h-screen " id="mainContainer">
        <div className="flex">
          <div className=" h-screen flex py-6 flex-col px-[3%] text-2xl w-[30rem] items-center ">
        <h1>How Does DriveMond Work?<br/> <br/> <br/> </h1>  
<p> As a ride sharing business owner, you can take control of everything. Let’s see how DriveMond work for you.</p>
           
          </div>
          <div className="h-screen  grid-rows-5 overflow-y-scroll w-[100%] bg-slate-400">
         <div className="grid h-[70%] grid-cols-2 ">
          <h1>
          1. Set Up Business
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
          </h1>
          <div className="h-full ">
            <img src={bg} alt="" className="h-full"/>
          </div>

         </div>

            <div className="bg-[green] h-screen">baba</div>
            <div className="bg-[blue] h-screen">papaa</div>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default FourthPage;
