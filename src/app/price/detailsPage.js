import React from 'react'
import refud from'../../images/drivemond-transparent-refund-policy.webp'
import { FaCcVisa } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";
import EleventhPage from '../home/eleventhPage';

const DetailsPage = () => {
  return ( <>
    <div className='  w-[100%] px-[7%] lg:px-[10%] flex flex-col items-center justify-center h-auto py-[7%]'>
        <div className=' bg-[#F0FBFA] p-[4%]  items-center gap-8 md:flex-row flex-col h-auto md:h-[20rem] flex '>
            <div className=''  >
                <img src={refud} alt=''  className='' />
            </div>
            <div className='flex flex-col px-[10%]' >
                <p>
<h1 className='py-5 text-2xl font-bold ' >Our Transparent Refund Policy</h1>
Your peace of mind matters to us. We are committed to putting our customers first. So, we proudly introduce a refund experience designed with your satisfaction in mind. Our transparent refund policy ensures a 100% money back guarantee within 14 days. So you can be confident with your DriveMond script purchase decision.</p>
<div>
    <h1 className='flex gap-4 md:text-4xl py-7 ' >Payment Options : <FaCcVisa /> <FaCcDiscover /> <SiAmericanexpress />
 </h1>
</div>

            </div>


        </div>
      

    </div>
    <EleventhPage/>
    </>
  )
}

export default DetailsPage