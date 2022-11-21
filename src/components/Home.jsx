import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import pic from '../assets/pic.jpeg'
import { Link } from "react-scroll";

const Home = () => {
    return (
      <div name="home" className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center items-center h-full md:flex-row">
          <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white ">
            I'm a JavaScript Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I am a full stack web developer who loves to work on web applications and solve problems using JavaScript technologies.
          </p>

          <div>
            <Link
              to="work"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

          <div>
            <img
              src={pic}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    );
};

export default Home;