import React from 'react';
import support from '../../images/drivemond-customer-support.webp';
import faqs from '../../images/drivemond-faqs.webp';
import changelog from '../../images/drivemond-version-changelog.webp';

const NinthPage = () => {
  return (
    <div className='flex flex-col px-[10%] items-center h-screen'>
      <div className='flex flex-col text-[#00423A] py-8 text-center'>
        <h1 className='py-8 text-2xl'>
          Get All The <span className='font-bold text-[#00A08D] ' > Help & Support</span> You Need
        </h1>
        <p className='text-xl  text-[#758590]' >
          Team DriveMond always works tirelessly for you to have the best experience.
        </p>
      </div>

      <div className='grid  text-[#FFFFFF] text-xl font-bold h-auto grid-cols-1 px-3 py-10 gap-11 lg:gap-5 lg:grid-cols-3'> 
        <figure className='flex h-auto border py-4  hover:border-[#00A08D] px-2 flex-col justify-center lg:h-[23rem]  lg:w-[17rem] rounded-2xl'>
          <div className='flex'>
            <img src={support} alt='Support' className='' />
          </div>
          <figcaption className='text-center bg-[#006156] rounded-xl p-4 mt-5 '>Support</figcaption>
        </figure>

        <figure className='flex h-auto border py-4 hover:border-[#00A08D] px-2 flex-col justify-center lg:h-[23rem]  lg:w-[17rem] rounded-2xl'>
          <img src={faqs} alt='FAQs' />
          <figcaption className='text-center bg-[#006156] rounded-xl p-4 mt-5 '>FAQs</figcaption>
        </figure>

        <figure className='flex h-auto flex-col border py-4 px-2 hover:border-[#00A08D] justify-center lg:h-[23rem]  lg:w-[17rem] rounded-2xl'>
          <img src={changelog} alt='Changelog' />
          <figcaption className='text-center bg-[#006156] rounded-xl p-4 mt-5 '> Changelog</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default NinthPage;
