import React from "react";
import a from "../../images/a1.webp";
import b from "../../images/a2.webp";
import c from "../../images/a3.webp";
import d from "../../images/a4.webp";
import e from "../../images/a5.webp";
import f from "../../images/a6.webp";
import g from "../../images/a7.webp";
import h from "../../images/a8.webp";
import i from "../../images/drivemond-driver-customer-verification-features.webp";
import j from "../../images/drivemond-coupons-and-bonuses-features.webp";

import k from "../../images/drivemond-customer-loyalty-programs-features.webp";
import l from "../../images/drivemond-trip-wise-commission-features.webp";
import m from "../../images/drivemond-add-pickup-point-features.webp";
import n from "../../images/drivemond-payment-and-sms-gateways-features.webp";

import o from "../../images/drivemond-zone-wise-parcel-fare-features.webp";
import p from "../../images/drivemond-multi-language-with-rtl-features.webp";
import q from "../../images/drivemond-parcel-category-and-weight-features.webp";
import r from "../../images/drivemond-zone-wise-trip-fare-features.webp";
import s from "../../images/drivemond-promotional-banners-features.webp";
import t from "../../images/drivemond-penalty-for-cancellation-features.webp";
import u from "../../images/drivemond-light-and-dark-mode-features.webp";

const featuresData = [
  {
    title: "Date-driven Dashboard",
    image: a,
  },
  {
    title: "Vehicle Model & Category",
    image: b,
  },
  {
    title: "Zone-wise Business",
    image: c,
  },
  {
    title: "Trip Activity Monitor ",
    image: d,
  },
  {
    title: "Fare Bidding Option",
    image: e,
  },
  {
    title: "Driver Self-Registration",
    image: f,
  },
  {
    title: "Waiting & Delay Fees",
    image: g,
  },
  {
    title: "Driver Loyalty Programs",
    image: h,
  },
  {
    title: "Driver & Customer Verification",
    image: i,
  },
  {
    title: "Coupons and Bonuses",
    image: j,
  },
  {
    title: " Customer Loyalty Programs",
    image: k,
  },
  {
    title: "Trip-wise Commision",
    image: l,
  },
  {
    title: "Add Pickup Point",
    image: m,
  },
  {
    title: "Payment & SMS Gateways",
    image: n,
  },
  {
    title: "Zone-wise Parcel Fare",
    image: o,
  },
  {
    title: "Multi-Language with RTL",
    image: p,
  },
  {
    title: "Parcel Cateory & Weight",
    image: q,
  },
  {
    title: "Zone-wise Trip Fare",
    image: r,
  },
  {
    title: "Promotional Banners ",
    image: s,
  },
  {
    title: "Penalty for Cancellation ",
    image: t,
  },
  {
    title: "Light & Dark Mode",
    image: u,
  },
];

const SixthPage = () => {
  return (
    <div className="h-auto lg:h-screen px-[5%] md:px-[10%] text-[#1A554E]  flex flex-col">
      <div className="text-center py-[1rem]">
        <h1 className="text-3xl">
          Key <span className="font-bold text-[#00A08D]  ">Features</span> of
          DriveMond
        </h1>
        <h2 className="text-xl py-7">
          Let’s explore the key features that make DriveMond a trendy ride
          sharing business and why it’s a must-have for your business.
        </h2>
      </div>
      <div className=" lg:overflow-scroll  no-scrollbar lg:h-[27rem] bg-red">
        <div className="grid grid-cols-2 gap-3 p-3 md:grid-cols-3">
          {featuresData.map((item, id) => (
            <div className="flex">
              <div className="grid grid-cols-2 gap-3 md:gap-0  mb-2  items-center px-4 rounded-2xl   text-[#00423A] py-1 bg-[#EDF9F6] border  md:h-[6rem]">
                <div className=" h-[3rem] md:h-[5rem] ">
                  <img
                    src={item.image}
                    alt=""
                    className=" w-[3rem] md:w-[5rem] h-full"
                  />
                </div>
                <p className="  text-[0.9rem] md:text-[1.2rem]">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SixthPage;
