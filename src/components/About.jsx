import React from 'react'

const About = () => {
    return (
      <div
        name="about"
        className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>
  
          <p className="text-xl mt-20">
          Currently studying a B.Tech in Computer Science and Engineering, I am a final-year student (class of 2023) at Vellore Institute of Technology, Andhra Pradesh. CyberSecurity and Web Development are my two main areas of interest.


          </p>
  
          <br />
  
          <p className="text-xl">
          Sincere relationships and communication are essential, in my opinion. In both my personal and professional lives, I place a lot of significance on having solid interpersonal relationships. I put in a lot of effort, pay close attention to the little things, and strive to contribute significantly to each assignment that is assigned to me. I learned about strategy, statistics, teamwork, and organisation from my engagement in on-campus groups and internships. A drive to learn new things and develop creative solutions to difficult problems has also been spurred by them.  
          </p>
        </div>
      </div>
    );
  };
  
  export default About;

