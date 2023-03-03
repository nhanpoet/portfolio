/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import CountUp from "react-countup";

import { useInView } from "react-intersection-observer";

import { HiOutlineMail } from "react-icons/hi";

import { AiOutlinePhone, AiOutlineHome } from "react-icons/ai";

import { BsCalendarDate } from "react-icons/bs";

import { motion } from "framer-motion";

import { fadeIn } from "../variants.js";

import { Link } from "react-scroll";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <div className="section mt-[150px]" id="about" ref={ref}>
      <div className="container mx-auto ">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          {/* img  */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1   bg-about bg-contain bg-no-repeat h-[400px] mix-blend-lighten bg-top"
          ></motion.div>
          {/* text  */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 "
          >
            <h2 className="h2 text-accent">About me.</h2>
            <h3 className="h3 mb-4">I'm NGUYỄN TRUNG NHÂN</h3>
            <div className="mb-2 flex flex-row items-center ">
              <HiOutlineMail className="w-[25px] h-[25px]" />
              <p className="ml-3">trungnhan12a2@gmail.com</p>
            </div>
            <div className="mb-2 flex flex-row items-center">
              <AiOutlinePhone className="w-[25px] h-[25px]" />
              <p className="ml-3">0353179247</p>
            </div>
            <div className="mb-2 flex flex-row items-center">
              <BsCalendarDate className="w-[25px] h-[25px]" />
              <p className="ml-3">20/07/2002</p>
            </div>
            <div className="mb-6 flex flex-row items-center ">
              <AiOutlineHome className="w-[25px] h-[25px]" />
              <p className="ml-3">
                12/11 road 109, ward Phuoc Long B, District 9, HCM city
              </p>
            </div>
            <div className="flex gap-x-6 lg:gap-x-5 mb-12">
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={0} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Years of <br />
                  Experience
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br /> ReactJS
                </div>
              </div>

              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={10} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  All <br />
                  Projects
                </div>
              </div>
            </div>
            <div className="flex gap-x-5 items-center">
              <Link to="contact" activeClass="active" smooth={true} spy={true}>
                <button className="btn btn-lg">Contact me</button>
              </Link>

              <a href="#" className="text-gradient btn-link">
                My portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
