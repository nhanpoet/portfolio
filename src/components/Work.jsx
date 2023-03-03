import React from "react";
import { motion } from "framer-motion";

import { fadeIn } from "../variants.js";

import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section mt-[50px]" id="work">
      <div className="container  mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div className="">
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Projects.
              </h2>
              <p className="max-w-sm mb-10">
                Here are the projects that I worked on during my school time,
                completed in popular languages ​​these days.
              </p>

              <button className="btn btn-sm">
                <a
                  href="https://github.com/nhanpoet"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View all projects
                </a>{" "}
              </button>
            </div>

            <a
              href="https://github.com/nhanpoet/ui-travel-master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div
                  className="group-hover:bg-black/70 w-full h-full absolute z-40
              transition-all duration-300 cursor-pointer"
                ></div>

                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img1}
                  alt=""
                />

                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-24 
              transition-all duration-500 z-50"
                >
                  <span className="text-gradient">
                    ReactJS | Spring Boot | MySQL
                  </span>
                </div>

                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-14 
              transition-all duration-500 z-50"
                >
                  <span className="text-3xl text-white">Travel Master</span>
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-4"
          >
            <a
              href="https://github.com/nhanpoet/eye-onic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div
                  className="group-hover:bg-black/70 w-full h-full absolute z-40
              transition-all duration-300 cursor-pointer"
                ></div>

                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img3}
                  alt=""
                />

                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-24 
              transition-all duration-500 z-50"
                >
                  <span className="text-gradient">PHP | MySQL</span>
                </div>

                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-14 
              transition-all duration-500 z-50"
                >
                  <span className="text-3xl text-white">Eye-Onic</span>
                </div>
              </div>
            </a>
            <a
              href="https://github.com/nhanpoet/social-media-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                <div
                  className="group-hover:bg-black/70 w-full h-full absolute z-40
              transition-all duration-300 cursor-pointer"
                ></div>

                <img
                  className="group-hover:scale-125 transition-all duration-500"
                  src={Img2}
                  alt=""
                />

                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-24 
              transition-all duration-500 z-50"
                >
                  <span className="text-gradient">
                    ReactJS | MySQL | NodeJS
                  </span>
                </div>

                <div
                  className="absolute -bottom-full left-12 group-hover:bottom-14 
              transition-all duration-500 z-50"
                >
                  <span className="text-3xl text-white">Social Media</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
