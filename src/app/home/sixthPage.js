import React from 'react';
import a from '../../images/a1.webp';
import b from '../../images/a2.webp';
import c from '../../images/a3.webp';
import d from '../../images/a4.webp';
import e from '../../images/a5.webp';
import f from '../../images/a6.webp';
import g from '../../images/a7.webp';
import h from '../../images/a8.webp';


const featuresData = [
  {
    title: 'Date-driven Dashboard',
    image: a,
  
  },
  {
    title: 'Vehicle Model & Category',
    image: b,
  
  },
  {
    title: 'Zone-wise Business',
    image: c,
  
  },
  {
    title: 'Trip Activity Monitor ',
    image: d,
  
  },
  {
    title: 'Fare Bidding Option',
    image: e,
  
  },
  {
    title: 'Driver Self-Registration',
    image: f,
  
  },
  {
    title: 'Waiting & Delay Fees',
    image: g,
  
  },
  {
    title: 'Driver Loyalty Programs',
    image: h,
  
  },
  {
    title: 'Driver & Customer Verification',
    image: a,
  
  },
  {
    title: 'Coupons and Bonuses',
    image: a,
  
  },
  {
    title: ' Customer Loyalty Programs',
    image: a,
  
  },
  {
    title: 'Trip-wise Commision',
    image: a,
  
  },
  {
    title: 'Add Pickup Point',
    image: a,
  
  },
  {
    title: 'Payment & SMS Gateways',
    image: a,
  
  },
  {
    title: 'Zone-wise Parcel Fare',
    image: a,
  
  },
  {
    title: 'Multi-Language with RTL',
    image: a,
  
  },
  {
    title: 'Parcel Cateory & Weight',
    image: a,
  
  },
  {
    title: 'Zone-wise Trip Fare',
    image: a,
  
  },
  {
    title: 'Promotional Banners ',
    image: a,
  
  },
  {
    title: 'Penalty for Cancellation ',
    image: a,
  
  },
  {
    title: 'Light & Dark Mode',
    image: a,
  
  },
  
  
  
];

const SixthPage = () => {
  return (
    <div className='h-screen px-[5%] md:px-[10%] text-[#1A554E]  flex flex-col'>
      <div className='text-center py-[1rem]'>
        <h1 className='text-3xl'>Key <span className='font-bold text-[#1A554E]  ' >Features</span>  of DriveMond</h1>
        <h2 className='text-xl py-7'>
          Let’s explore the key features that make DriveMond a trendy ride sharing business and why it’s a must-have for your business.
        </h2>
      </div>
      <div className='overflow-scroll  no-scrollbar h-[27rem] bg-red'>
        <div className='grid grid-cols-2 gap-3 p-3 md:grid-cols-3'>
          {featuresData.map((item, id) => (
            <div className='flex' >
              <div className='grid grid-cols-2 gap-3 md:gap-0  mb-2 font-bold items-center px-4 rounded-2xl  text-[#1A554E] py-1 bg-[#EDF9F6] border  md:h-[6rem]'>
                <div className=' h-[3rem] md:h-[5rem] '>
                  <img src={item.image} alt='' className=' w-[3rem] md:w-[5rem] h-full' />
                </div>
                <p className=' text-[0.8rem] md:text-[1.2rem]'>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SixthPage;
