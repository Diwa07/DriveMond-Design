import React from "react";

const FourthPage = () => {
  const sangam = () =>{
    // window.onscroll = function(){

      var container = document.getElementById('mainContainer');
    //   console.log(container.offsetHeight);
    var scrollPos = container.getBoundingClientRect().top 
          + window.pageYOffset;

  }
  sangam();
  return (
    <>
      <div className="bg-[pink] h-[5rem] " >
        <h1>Test</h1>
      </div>
      <div className=" h-screen bg-[#00800054]" id="mainContainer">
        <div className="grid grid-cols-2">
          <div className="bg-[red] h-screen sticky">
            <h1>This is sticky portion</h1>
            <h1>A quick brown fox jumps over the lazy dog</h1>
            <h1>A quick brown fox jumps over the lazy 2</h1>
          </div>
          <div className="h-screen overflow-scroll bg-slate-400">
            <h1>This is scroll portion</h1>
            <div className="bg-[green] h-screen">baba</div>
            <div className="bg-[blue] h-screen">papaa</div>
          </div>
        </div>
      </div>
      <div className="bg-[pink] h-screen"></div>
    </>
  );
};

export default FourthPage;
