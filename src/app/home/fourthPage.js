import React, { useState, useEffect } from "react";
import bg from '../../images/bg.webp';

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
    <div className="h-screen mt-7">
      <div className="flex flex-col items-center md:flex-row " >
      <div className="flex flex-col  py-6 px-[3%] text-2xl w-[27rem] items-center">
        <h1>How Does DriveMond Work?<br/> <br/> <br/> </h1>  
        <p> As a ride sharing business owner, you can take control of everything. Let’s see how DriveMond works for you.</p>
      </div>
      <div className="relative flex-1">
        <div className="h-screen overflow-y-scroll scrollbar" id="scroll-container">



         
        <div className="grid  h-[50%] md:h-[70%] grid-cols-2 ">
<div className="h-full px-4 ">
  <img src={bg} alt="" className="h-full"/>
</div>

<h1 className="flex flex-col items-center justify-center px-4 " >
1. Set Up Business
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
</h1>
</div>


<div className="grid  h-[50%] md:h-[70%] grid-cols-2 ">
          <h1 className="flex flex-col items-center justify-center px-4 " >
          1. Set Up Business
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
          </h1>
          <div className="h-full px-4 ">
            <img src={bg} alt="" className="h-full"/>
          </div>
</div>



        
<div className="grid  h-[50%] md:h-[70%] grid-cols-2 ">
<div className="h-full px-4 ">
  <img src={bg} alt="" className="h-full"/>
</div>

<h1 className="flex flex-col items-center justify-center px-4 " >
1. Set Up Business
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
</h1>
</div>


<div className="grid  h-[50%] md:h-[70%] grid-cols-2 ">
          <h1 className="flex flex-col items-center justify-center px-4 " >
          1. Set Up Business
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
          </h1>
          <div className="h-full px-4 ">
            <img src={bg} alt="" className="h-full"/>
          </div>
</div>



        
<div className="grid  h-[50%] md:h-[70%] grid-cols-2 ">
<div className="h-full px-4 ">
  <img src={bg} alt="" className="h-full"/>
</div>

<h1 className="flex flex-col items-center justify-center px-4 " >
1. Set Up Business
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
</h1>
</div>


<div className="grid  h-[50%] md:h-[70%] grid-cols-2 ">
          <h1 className="flex flex-col items-center justify-center px-4 " >
          1. Set Up Business
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
          </h1>
          <div className="h-full px-4 ">
            <img src={bg} alt="" className="h-full"/>
          </div>
</div>




        
<div className="grid  h-[50%] md:h-[70%] grid-cols-2 ">
<div className="h-full px-4 ">
  <img src={bg} alt="" className="h-full"/>
</div>

<h1 className="flex flex-col items-center justify-center px-4 " >
1. Set Up Business
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
</h1>
</div>


<div className="grid  h-[50%] md:h-[70%] grid-cols-2 ">
          <h1 className="flex flex-col items-center justify-center px-4 " >
          1. Set Up Business
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
          </h1>
          <div className="h-full px-4 ">
            <img src={bg} alt="" className="h-full"/>
          </div>
</div>





        
<div className="grid  h-[50%] md:h-[70%] grid-cols-2 ">
<div className="h-full px-4 ">
  <img src={bg} alt="" className="h-full"/>
</div>

<h1 className="flex flex-col items-center justify-center px-4 " >
1. Set Up Business
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
</h1>
</div>


<div className="grid  h-[50%] md:h-[70%] grid-cols-2 ">
          <h1 className="flex flex-col items-center justify-center px-4 " >
          1. Set Up Business
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
          </h1>
          <div className="h-full px-4 ">
            <img src={bg} alt="" className="h-full"/>
          </div>
</div>





        
<div className="grid  h-[50%] md:h-[70%] grid-cols-2 ">
<div className="h-full px-4 ">
  <img src={bg} alt="" className="h-full"/>
</div>

<h1 className="flex flex-col items-center justify-center px-4 " >
1. Set Up Business
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
</h1>
</div>


<div className="grid  h-[50%] md:h-[70%] grid-cols-2 ">
          <h1 className="flex flex-col items-center justify-center px-4 " >
          1. Set Up Business
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
          </h1>
          <div className="h-full px-4 ">
            <img src={bg} alt="" className="h-full"/>
          </div>
</div>





        
<div className="grid  h-[50%] md:h-[70%] grid-cols-2 ">
<div className="h-full px-4 ">
  <img src={bg} alt="" className="h-full"/>
</div>

<h1 className="flex flex-col items-center justify-center px-4 " >
1. Set Up Business
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
</h1>
</div>


<div className="grid  h-[50%] md:h-[70%] grid-cols-2 ">
          <h1 className="flex flex-col items-center justify-center px-4 " >
          1. Set Up Business
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
          </h1>
          <div className="h-full px-4 ">
            <img src={bg} alt="" className="h-full"/>
          </div>
</div>




        
<div className="grid  h-[50%] md:h-[70%] grid-cols-2 ">
<div className="h-full px-4 ">
  <img src={bg} alt="" className="h-full"/>
</div>

<h1 className="flex flex-col items-center justify-center px-4 " >
1. Set Up Business
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
</h1>
</div>


<div className="grid  h-[50%] md:h-[70%] grid-cols-2 ">
          <h1 className="flex flex-col items-center justify-center px-4 " >
          1. Set Up Business
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
          </h1>
          <div className="h-full px-4 ">
            <img src={bg} alt="" className="h-full"/>
          </div>
</div>




        
<div className="grid  h-[50%] md:h-[70%] grid-cols-2 ">
<div className="h-full px-4 ">
  <img src={bg} alt="" className="h-full"/>
</div>

<h1 className="flex flex-col items-center justify-center px-4 " >
1. Set Up Business
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
</h1>
</div>


<div className="grid  h-[50%] md:h-[70%] grid-cols-2 ">
          <h1 className="flex flex-col items-center justify-center px-4 " >
          1. Set Up Business
Purchase the DriveMond script, then download and install it on your server. After that, configure, and set up business rules, and trip-wise commission from the admin panel.
          </h1>
          <div className="h-full px-4 ">
            <img src={bg} alt="" className="h-full"/>
          </div>
</div>


        </div>
        <div id="progress" style={{ height: `${scrollProgress}%`, width: "10px", backgroundColor: "#4caf50", position: "absolute", right: 0, top: 0 }}></div>
      </div>
      </div>
    </div>
  );
};

export default FourthPage;
