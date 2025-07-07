import React from "react";
import "./about.css";
import portfolio from "../assets/Group1.svg";
import resume from "../assets/resume.pdf"


const About = () => {
  return (
    <div className="w-full overflow-x-hidden overflow-y-hidden">
      <div className="flex flex-col items-center justify-center px-4">
        <div className="">
          <img src={portfolio} alt="" />
        </div>

        {/* left column */}
        <div className="flex flex-col justify-center items-center w-full md:w-auto mb-4 md:mb-0 ">
          <div className="flex flex-col md:flex md:flex-row font-[m6x11]">
            {/* lnkedn */}
            <a href="https://www.linkedin.com/in/manan-nayak/" target="_blank">
              <button style={{ "background-color": "#0093ff" }}>
                LINKEDIN
              </button>
            </a>

            {/* github link */}
            <a href="https://github.com/manannayak19" target="_blank">
              <button style={{ "background-color": "#ff9800" }}>GITHUB</button>
            </a>

            <a href={resume} target="_blank">
            <button style={{ "background-color": "#429f79" }}>
              RESUME
            </button>
            </a>
          </div>
        </div>

        {/* right column */}
        <div className=" p-3 w-auto right-card md:w-3xl font-[m6x11]">
          <div>
            Hello! I’m Manan, recent grad, I work across MERN stack. Always building and learning new stuff, Curently getting into ML and Web3. Contact me <a style={{"color":"#ff4c40"}} href="mailto:themanannayak@gmail.com">themanannayak@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
