import React from 'react'
 import bg from '../../images/5thBg.webp'
const FifthPage = () => {
  return (
    <div className='h-screen mt-6 ' >
    <div className="flex flex-col items-center h-screen border border-black "style={{ backgroundImage: `url(${bg})` }}>
<div className='mt-[4rem] text-white text-center text-2xl' >
   <h1>
   Let’s Discover DriveMond’s Business Potential
   </h1>
   <h2 className='mt-4 text-xl text-center' >
   With DriveMond’s two dynamic modules, you can do various businesses and unlock the utmost potential.
   </h2>
</div>
<div className='grid mt-9 px-[4rem] gap-11    h-[20rem] grid-cols-2' >
  <div  className='px-9 rounded-2xl flex flex-col justify-between py-5 w-[20rem] bg-[#E9FFFC] ' >
<p>
Create zone-wise vehicles and connect drivers & start zone-wise ride sharing business with DriveMond. Customers can request a custom fare while drivers can bid for that request.</p>>    
  </div>
  <div  className='px-9 rounded-2xl flex flex-col justify-between py-5 w-[20rem] bg-[#E9FFFC] ' >
<p>
Start parcel delivery business for customers. The registered drivers can join this module and you can ensure seamless parcel delivery service to all the customers.
</p>
  </div>

</div>


    </div>
    </div>
  )
}

export default FifthPage