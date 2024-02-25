import React, { useState, useEffect } from "react";
import sections from './Drivemodework'
import { FaArrowRight } from "react-icons/fa";
import { TbSteeringWheel } from "react-icons/tb";


const FourthPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.getElementById("scroll-container");
      const scrollTotal = scrollContainer.scrollHeight - scrollContainer.clientHeight;
      const scrollTop = scrollContainer.scrollTop;
      const progress = (scrollTop / scrollTotal) * 100;
      setScrollProgress(progress);
    };

    const scrollContainer = document.getElementById("scroll-container");
    scrollContainer.addEventListener("scroll", handleScroll);

    setHasOverflow(scrollContainer.scrollHeight > scrollContainer.clientHeight);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);



  return (
    <div className="h-auto md:h-screen mt-7">
      <div className="flex flex-col md:flex-row ">
        <div className="flex flex-col gap-7 py-6 md:px-[4%] justify-center px-[10%] text-[36px] md:w-[27rem] items-center">
          <h1 className="text-center " >How Does <span className="text-[#00A08D] font-bold"> DriveMond </span> Work?</h1>
          <p className="text-[18px]">As a ride-sharing business owner, you can take control of everything. Let’s see how DriveMond works for you.</p>
          <button className="px-7 flex gap-4 items-center py-4 rounded-2xl bg-[#003C32] font-bold md:text-2xl text-white">
            Buy Now <FaArrowRight />
          </button>
        </div>
        <div className="relative flex-1">
          <div className={`h-screen ${hasOverflow ? 'overflow-y-scroll' : ''}  no-scrollbar`} id="scroll-container">
            {sections.map((section, index) => {
              const isOdd = index % 2 !== 0; 
              return (
                <div className="grid grid-cols-1  text-[#00423A] py-[1rem] gap-4 h-auto md:h-[60%] mb-7 md:px-[1%] px-[10%] md:grid-cols-2" key={section.title}>
                 
                  <div className={`order-2 h-full px-4 md:order-none ${isOdd ? 'md:order-none' : 'md:order-1'}`}>
                    <img src={section.image} alt="" className="h-full px-2 " />
                  </div>
                  <div className={`flex flex-col  order-1 px-4 md:order-none ${isOdd ? ' md:order-2  md:pl-7 items-end ' : ''}`}>
                    <h1 className="flex  text-[#00423A] gap-1 text-2xl">{index + 1}. {section.title}</h1>
                    <h1 className="  py-[3rem] text-[18px]">{section.content}</h1>
                    <h2 className="w-fit " >
                      {section.subSections.map(subSection => (
                        <div key={subSection}>
                          <p className="flex items-center text-[#00A08D] gap-3 mb-3 text-xl"><TbSteeringWheel  className="text-2xl" /> {subSection}
                          
                          </p>
                          <hr className="border border-[#09A492] w-[100%]" />
                       
                        </div>
                      ))}
                    </h2>
                  </div>
                </div>
              );
            })}
            <div id="progress" style={{ height: `${scrollProgress}%`, width: "7px", backgroundColor: "#7ACAC0", position: "absolute", right: 0, top: 14 }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthPage;