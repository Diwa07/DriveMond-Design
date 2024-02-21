import React from "react";
import bg from "../images/bg.webp";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/api";

const SecondPage = () => {
  const { data: postData } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
  return (
    <div className="w-screen h-screen text-white bg-gray-100">
      <div className="relative h-screen  lg:h-[50%] w-screen ">
        <img src={bg} alt="" className="w-full h-full " />
        <div className="absolute  py-7 mt-[2rem] w-screen top-0 flex flex-col items-center">
          <h1 className="py-5 text-2xl">What Comes with DriveMond? </h1>

          <h2 className="text-xl">
            DriveMond ensures a total ride sharing experience for all its users,
            such as drivers,
            <p className="flex justify-center">customers, and the admin.</p>
          </h2>

          <div className="grid  grid-cols-2 lg:grid-cols-4  mt-[5rem]  gap-11">
            {postData &&
              postData.map((item, id) => {
                return (
                  <div className="h-[17rem] py-5 flex flex-col   items-center px-5 justify-between p-2 w-[13rem]  hover:text-[white] hover:bg-[#00A08D] cursor-pointer rounded-2xl text-[#00423A]   bg-[#FFFFFF]">
                    <p className="polygon bg-[#006156d0]   h-[3rem] w-[3rem] items-center flex justify-center text-xl text-white">
                     
                      <HiOutlineComputerDesktop />
                    </p>
                    <p className="font-bold ">{item.title}</p>
                    <p className=" text-[1rem] ">{item.message} </p>
                    <p className="font-semibold "> {item.action}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
