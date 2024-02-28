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

      <div className='grid  text-[#FFFFFF] text-xl font-bold h-auto grid-cols-1 px-3 py-10 gap-11 md:gap-5 md:grid-cols-3'> 
        <figure className='flex h-auto border hover:border-[#00A08D] px-1 flex-col justify-center sm:h-[23rem] w-[10rem] sm:w-[17rem] rounded-2xl'>
          <div className='flex'>
            <img src={support} alt='Support' className='' />
          </div>
          <figcaption className='text-center bg-[#006156] rounded-xl p-4 mt-5 '>Support</figcaption>
        </figure>

        <figure className='flex h-auto border hover:border-[#00A08D] px-1 flex-col justify-center sm:h-[23rem] w-[10rem] sm:w-[17rem] rounded-2xl'>
          <img src={faqs} alt='FAQs' />
          <figcaption className='text-center bg-[#006156] rounded-xl p-4 mt-5 '>FAQs</figcaption>
        </figure>

        <figure className='flex h-auto flex-col border px-1 hover:border-[#00A08D] justify-center sm:h-[23rem] w-[10rem] sm:w-[17rem] rounded-2xl'>
          <img src={changelog} alt='Changelog' />
          <figcaption className='text-center bg-[#006156] rounded-xl p-4 mt-5 '> Changelog</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default NinthPage;
