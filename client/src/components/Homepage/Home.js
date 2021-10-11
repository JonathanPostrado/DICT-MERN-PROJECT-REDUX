import React from "react";
import "./Home.css";

const Home = () => {
  return (
    // <div class="flex h-screen bgColor">
    //   <div class="m-auto align-center text-center">
    //     <h1 class="text-6xl font-normal leading-normal mt-0 mb-2 text-white">
    //       DICT Simple MERN Project
    //     </h1>
    //     <h3 class="text-3xl font-normal leading-normal mt-0 mb-2 text-white">
    //       by: Jonathan Postrado
    //     </h3>
    //   </div>
    // </div>
    <div className="h-screen bg-mern">
      <div className="hero-overlay bg-opacity-70">
        <div class="container pt-24 md:pt-36 mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
            <h1 class="animate-bounce mt-60 my-4 text-3xl md:text-5xl text-white font-bold leading-tight text-center md:text-left">
              DICT Simple MERN Project
            </h1>
            <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left text-white">
              by: Jonathan Postrado
            </p>
          </div>
          <div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
            <div class="text-gray-400 no-underline hover:no-underline" href="#">
              &copy; 2021 &#8226; For project purpose only
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
