import React, { useState, useEffect } from "react";
import sections from './Drivemodework'
import { FaArrowRight } from "react-icons/fa";
import HeroSection from "./HeroSection";

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
        <div className="flex flex-col gap-7 py-6 md:px-[4%] px-[10%] text-2xl md:w-[27rem] items-center">
          <h1>How Does DriveMond Work? </h1>
          <p className="text-xl">As a ride-sharing business owner, you can take control of everything. Let’s see how DriveMond works for you.</p>
          <button className="px-7 flex gap-4 items-center py-4 rounded-2xl bg-[#003C32] font-bold md:text-2xl text-white">
            Buy Now <FaArrowRight />
          </button>
        </div>
        <div className="relative flex-1">
          <div className={`h-screen ${hasOverflow ? 'overflow-y-scroll' : ''} no-scrollbar`} id="scroll-container">
            {sections.map((section, index) => {
              const isOdd = index % 2 !== 0; 
              return (
                <div className="grid grid-cols-1 py-[1rem] gap-4 h-auto md:h-[70%] mb-7 md:px-[1%] px-[10%] md:grid-cols-2" key={section.title}>
                 
                  <div className={`order-2 h-full px-4 md:order-none ${isOdd ? 'md:order-none' : 'md:order-1'}`}>
                    <img src={section.image} alt="" className="h-full" />
                  </div>
                  <div className={`flex flex-col justify-between order-1 px-4 md:order-none ${isOdd ? ' md:order-2' : ''}`}>
                    <h1>{index + 1}. {section.title}</h1>
                    <h1>{section.content}</h1>
                    <h2>
                      {section.subSections.map(subSection => (
                        <div key={subSection}>
                          <p className="flex items-center gap-3 mb-3"><FaArrowRight /> {subSection}</p>
                          <hr className="bg-[red] text-[green] border border-[blue] w-[70%]" />
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