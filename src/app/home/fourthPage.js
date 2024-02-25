import React, { useState, useEffect } from "react";
import a from '../../images/1.webp';
import { FaArrowRight } from "react-icons/fa";
import HeroSection from "./HeroSection";
const FourthPage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

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

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-auto md:h-screen mt-7">
      <div className="flex flex-col md:flex-row " >
      <div className="flex flex-col  gap-7  py-6 md:px-[4%] px-[10%] text-2xl md:w-[27rem] items-center">
        <h1>How Does DriveMond Work? </h1>  
        <p className="text-xl" > As a ride sharing business owner, you can take control of everything. Let’s see how DriveMond works for you.</p>
      
       <button className=" px-7 flex  gap-4 items-center py-4 rounded-2xl bg-[#003C32] font-bold   md:text-2xl text-white">
                Buy Now  <FaArrowRight />
              </button>
      
      </div>
      <div className="relative flex-1">
        <div className="h-screen overflow-y-scroll no-scrollbar" id="scroll-container">



         
        <div className="grid  grid-cols-1 py-5     h-[60%] md:h-[70%] mb-7  md:px-[1%] px-[10%]   md:grid-cols-2 ">
        <div className="flex flex-col justify-between order-1 px-4 md:order-none " >
<h1>1. Set Up Business</h1> 

<h1>
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
</h1>
<h2>
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight /> Pages & media setup

</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight />SMS & payment configuration
</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight /> Language & Translation
</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
</h2>

</div>
<div className="order-2 h-full px-4 md:order-none ">
  <img src={a} alt="" className="h-full"/>
</div>


</div>
<div className="grid  grid-cols-1 py-5     h-[60%] md:h-[70%] mb-7  md:px-[1%] px-[10%]   md:grid-cols-2 ">


<div className="order-2 h-full px-4 md:order-none ">
  <img src={a} alt="" className="h-full"/>
</div>

        <div className="flex flex-col justify-between order-1 px-4 md:order-none " >
<h1>1. Set Up Business</h1> 

<h1>
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
</h1>
<h2>
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight /> Pages & media setup

</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight />SMS & payment configuration
</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight /> Language & Translation
</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
</h2>

</div>



</div>


         
<div className="grid  grid-cols-1 py-5     h-[60%] md:h-[70%] mb-7  md:px-[1%] px-[10%]   md:grid-cols-2 ">
        <div className="flex flex-col justify-between order-1 px-4 md:order-none " >
<h1>1. Set Up Business</h1> 

<h1>
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
</h1>
<h2>
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight /> Pages & media setup

</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight />SMS & payment configuration
</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight /> Language & Translation
</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
</h2>

</div>
<div className="order-2 h-full px-4 md:order-none ">
  <img src={a} alt="" className="h-full"/>
</div>


</div>
<div className="grid  grid-cols-1 py-5     h-[60%] md:h-[70%] mb-7  md:px-[1%] px-[10%]   md:grid-cols-2 ">


<div className="order-2 h-full px-4 md:order-none ">
  <img src={a} alt="" className="h-full"/>
</div>

        <div className="flex flex-col justify-between order-1 px-4 md:order-none " >
<h1>1. Set Up Business</h1> 

<h1>
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
</h1>
<h2>
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight /> Pages & media setup

</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight />SMS & payment configuration
</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight /> Language & Translation
</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
</h2>

</div>



</div>




         
<div className="grid  grid-cols-1 py-5     h-[60%] md:h-[70%] mb-7  md:px-[1%] px-[10%]   md:grid-cols-2 ">
        <div className="flex flex-col justify-between order-1 px-4 md:order-none " >
<h1>1. Set Up Business</h1> 

<h1>
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
</h1>
<h2>
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight /> Pages & media setup

</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight />SMS & payment configuration
</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight /> Language & Translation
</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
</h2>

</div>
<div className="order-2 h-full px-4 md:order-none ">
  <img src={a} alt="" className="h-full"/>
</div>


</div>
<div className="grid  grid-cols-1 py-5     h-[60%] md:h-[70%] mb-7  md:px-[1%] px-[10%]   md:grid-cols-2 ">


<div className="order-2 h-full px-4 md:order-none ">
  <img src={a} alt="" className="h-full"/>
</div>

        <div className="flex flex-col justify-between order-1 px-4 md:order-none " >
<h1>1. Set Up Business</h1> 

<h1>
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
</h1>
<h2>
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight /> Pages & media setup

</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight />SMS & payment configuration
</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight /> Language & Translation
</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
</h2>

</div>



</div>




         
<div className="grid  grid-cols-1 py-5     h-[60%] md:h-[70%] mb-7  md:px-[1%] px-[10%]   md:grid-cols-2 ">
        <div className="flex flex-col justify-between order-1 px-4 md:order-none " >
<h1>1. Set Up Business</h1> 

<h1>
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
</h1>
<h2>
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight /> Pages & media setup

</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight />SMS & payment configuration
</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight /> Language & Translation
</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
</h2>

</div>
<div className="order-2 h-full px-4 md:order-none ">
  <img src={a} alt="" className="h-full"/>
</div>


</div>
<div className="grid  grid-cols-1 py-5     h-[60%] md:h-[70%] mb-7  md:px-[1%] px-[10%]   md:grid-cols-2 ">


<div className="order-2 h-full px-4 md:order-none ">
  <img src={a} alt="" className="h-full"/>
</div>

        <div className="flex flex-col justify-between order-1 px-4 md:order-none " >
<h1>1. Set Up Business</h1> 

<h1>
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
</h1>
<h2>
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight /> Pages & media setup

</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight />SMS & payment configuration
</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
<p className="flex items-center gap-3 mb-3 " >
<FaArrowRight /> Language & Translation
</p>
<hr className="bg-[red] text-[green] border border-[blue] w-[70%] " />
</h2>

</div>



</div>







       







       








       



        



        </div>
        <div  id="progress" style={{ height: `${scrollProgress}%`, width: "7px", backgroundColor: "#7ACAC0", position: "absolute", right: 0, top: 14 }}></div>
      </div>
      </div>
    
    </div>
  );
};

export default FourthPage;
