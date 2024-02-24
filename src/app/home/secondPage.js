import React from "react";
import bg from "../../images/bg.webp";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";
import ThirdPage from "./thirdPage";

const SecondPage = () => {
  const posts = [
    {
      "id": 1,
      "icon": <HiOutlineComputerDesktop />,
        "title": "Admin Panel",
      "message": "Add drivers & vehicles, manage customers, monitor trip logs, etc.",
      "action": "Explore Demo"
    },
    {
      "id": 2,
      "icon": <MdOutlineMobileFriendly/>,
      "title": "User App",
      "message": "Customers can request a ride, send parcels, get loyalty points, etc.",
      "action": "Download App"
    },
    {
      "id": 3,
      "icon": <MdOutlinePeopleAlt />,
      "title": "Driver App",
      "message": "Drivers can bid for ride requests, earn performance bonus, etc",
      "action": "Download App"
    },
    {
      "id": 4,
      "icon": <FaGlobe/>,
      "title": "Website",
      "message": "Admin can promote business, and invite drivers & users to join.",
      "action": "Explore Demo"
    }
  ];
  
  return (<>
    <div className="text-white h-[100vh] ">
      <div className=" md:h-[50%]  border border-black "style={{ backgroundImage: `url(${bg})` }}>

     
        <div className="flex justify-center " >
        <section className="  justify-center  py-7 mt-[2rem]   flex flex-col items-center">
        
           <p className="flex flex-col  text-center  py-2 px-[7%] md:px-[20%] justify-center">
           <h1 className="py-5 text-2xl">What Comes with DriveMond? </h1>
           <h2 className="text-xl ">
            DriveMond ensures a total ride sharing experience for all its users,
            such as drivers,
          customers, and the admin.
          </h2>
           </p>
          

          <div className="grid  grid-cols-1 px-[20%]  mt-[6%] sm:grid-cols-2  lg:grid-cols-4 sm:px-6  gap-11">
            {posts &&
              posts.map((item, id) => {
                return (
                  <div  style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }} className="h-[17rem]  py-5 flex flex-col border lg:border-white  border-[#003F37]   items-center px-3 justify-between p-2  w-[100%] sm:w-[17rem] md:w-[15rem]  hover:text-[white] hover:bg-[#00A08D] cursor-pointer rounded-2xl text-[#00423A]   bg-[#FFFFFF]">
                    <p className="polygon bg-[#006156d0]   h-[3rem] w-[3rem] items-center flex justify-center text-xl text-white">
                     
                    {item.icon} 
                    </p>
                    <p className="text-xl font-bold ">{item.title}</p>
                    <p className=" text-[1rem] flex text-center  ">{item.message} </p>
                    <p className="font-semibold "> {item.action}</p>
                  </div>
                );
              })}
          </div>
       
          
        </section>
      
        </div>
     
 
   
      </div>
     
     
    </div>
 
    </>
  );
};

export default SecondPage;
