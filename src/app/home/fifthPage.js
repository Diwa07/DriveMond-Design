import React from 'react'
 import bg from '../../images/5thBg.webp'
 import { FaCar } from "react-icons/fa6";
 import { TbTruckDelivery } from "react-icons/tb";
const FifthPage = () => {
  return (
    <div className='h-auto mt-6 md:h-screen' >
    <div className="flex flex-col items-center pb-4 border border-black md:h-screen "style={{ backgroundImage: `url(${bg})` }}>
<div className='mt-[4rem] px-5  text-white text-center  text-2xl' >
   <h1 className='font-bold text-[2rem] ' >
   Let’s Discover DriveMond’s Business Potential
   </h1>
   <h2 className='mt-6 text-xl text-center ' >
   With DriveMond’s two dynamic modules, you can do various businesses and unlock the utmost potential.
   </h2>
</div>
<div className='grid mt-9 px-5  md:px-[4rem] gap-11 items-center    md:h-[20rem] grid-cols-1 md:grid-cols-2' >
  <div  className='px-9 rounded-2xl flex flex-col justify-between items-center  h-[20rem] py-7 w-[25rem] bg-[#E9FFFC] ' >
  <FaCar  className='text-[7rem] text-[#00A08D] ' />
  <h1 className='text-2xl font-bold text-[#00423A]' >Ride Sharing</h1>
<p className='text-[#00A08D] ' >
Create zone-wise vehicles and connect drivers & start zone-wise ride sharing business with DriveMond. Customers can request a custom fare while drivers can bid for that request.</p>   
  </div>
  <div  className='px-9 rounded-2xl flex flex-col items-center justify-between py-5  h-[20rem] w-[25rem] bg-[#E9FFFC] ' >
  <TbTruckDelivery className='text-[8rem] text-[#00A08D] ' />
  <h1 className='text-2xl text-[#00423A] font-bold'>
    Parcel Delivery
  </h1>
 <p className='text-[#00A08D]' >
Start parcel delivery business for customers. The registered drivers can join this module and you can ensure seamless parcel delivery service to all the customers.
</p>
  </div>

</div>


    </div>
    </div>
  )
}

export default FifthPage