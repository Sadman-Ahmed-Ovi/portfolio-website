import React from 'react';
import Typed from 'react-typed';

const About = () => {
    return (
      <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="max-w-[1000px] w-full md:grid grid-cols-2 gap-8">
            <div className="text-center md:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-yellow-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              
              <Typed
          className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['Hi, I am Sadman Ahmed', 'A javascript Developer', 'Nice to Meet you']}
            typeSpeed={120}
            backSpeed={10}
            loop
          />
            </div>
            <div>
              <p>
                I am a web developer primarily working in the area of full stack web development with Javascript (MERN stack). I am skilled at building web applications using JavaScript frameworks and libraries and Typescript. I Love to work in team and possess good communication skills
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;