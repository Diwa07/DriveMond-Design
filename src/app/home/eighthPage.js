import React from "react";
import bg from "../../images/eightPage.webp";
import a from "../../images/8th car.webp";
import b from "../../images/8th message.webp";
import c from "../../images/8th analytics.webp";

const EighthPage = () => {
  return (
    <div className=" h-auto  lg:h-screen px-[10%] ">
      <div className="flex flex-col items-center text-center py-7 ">
        <h1 className="text-[28px] text-[#00423A] ">
          <span className="text-[#00A08D] font-bold "> Why Choose</span>{" "}
          DriveMond?
        </h1>
        <p className="text-[18px] text-[#006156] py-7 ">
          DriveMond ensures that all its users get absolute facilities and
          convenience along their journey with the solution.
        </p>
      </div>
      <div className="grid grid-cols-1  text-[#006156] lg:grid-cols-2">
        <div className="grid grid-rows-3 px-4 ">
          <div className="flex flex-col items-center md:gap-2 md:flex-row ">
            <div className=" h-[6rem] items-center md:w-[7rem] flex ">
              <img src={a} alt="" className="" />
            </div>
            <div className="text-center" >
              <p className="py-5 text-xl text-[#00423A] font-[16px] ">
                Versatile Riding Experience for Riders
              </p>
              <p>
                Passengers can request for a ride with a custom fare and get
                driver requests at a convenience offer via the user app.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center md:gap-2 md:flex-row ">
          <div className=" h-[7rem] items-center md:w-[7rem] flex ">
              <img src={b} alt="" />
            </div>
            <div className="text-center" >
            <p className="py-5 text-xl text-[#00423A] font-[16px] ">
                Flexibility and Fair Earnings for Drivers
              </p>
              <p>
                The driver app is designed for efficiency, ensuring smooth
                navigation, transparent earnings tracking, and bidding system.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:gap-2 md:flex-row ">
            <div className="  flex h-[4.4rem] ">
              <img src={c} alt="" />
            </div>
            <div className="text-center" >
            <p className="py-5 text-xl text-[#00423A] font-[16px] ">
                Multiple Revenue Streams for Admin
              </p>
              <p>
                Apart from managing, monitoring, controlling entire business
                process, admin can earn from both parcel and ride sharing
                module.
              </p>
            </div>
          </div>
        </div>
        <div className="px-7">
          <img src={bg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default EighthPage;
