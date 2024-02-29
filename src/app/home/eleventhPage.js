import React from 'react'
import bg from '../../images/bg.webp'

const EleventhPage = () => {
  return (
    <div className='   py-[5%] px-[2%] md:px-[10%] w-full flex  items-center ' >
 
        <div className='w-full flex flex-col p-3 md:p-5 justify-center items-center rounded-2xl h-[50%] 'style={{ backgroundImage: `url(${bg})` , backgroundSize: 'cover', backgroundPosition: 'center'  }}  >

         <div className='flex flex-col py-3  md:py-7 text-[#FFFFFF] text-[40px]' >
         <h1 className='py-3 md:py-7' >
            Start Your <span className='font-bold' >   Ride Sharing</span>
            </h1>

          <h2 className='text-center'> <span className='font-bold' > Business</span>  Today!</h2>
         </div>
       

         <button className="px-5 text-xl flex gap-4 items-center py-3 rounded-2xl   text-[#003C32] font-bold lg:text-2xl bg-white">
            Buy Now 
          </button>
        </div>
       

    </div>
  )
}

export default EleventhPage