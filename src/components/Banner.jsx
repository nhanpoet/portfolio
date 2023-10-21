/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Image from "../assets/banner.png";

import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../variants.js";

import { Link } from "react-scroll";

const Banner = () => {
  return (
    <section
      className="min-h-[65vh] lg:min-h-[70vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          {/* text */}
          <div className="flex-1 items-center text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[48px] lg:text-[84px] font-bold leading-[0.8] mb-3"
            >
              NPOET
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[28px] lg:text-[48px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4">I am a</span>
              <TypeAnimation
                sequence={["Mobile Dev", 2000, "Intern", 2000]}
                speed={500}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-4 max-w-xl mx-auto lg:mx-0 "
            >
              I want to work in a professional programming environment, where I
              can develop my professional skills, learn new programming
              knowledge to successfully complete the assigned work.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max  gap-x-6 items-center mb-6 mx-auto lg:mx-0"
            >
              <Link to="contact" activeClass="active" smooth={true} spy={true}>
                <button className="btn btn-lg">Contact me</button>
              </Link>

              <a
                href="https://drive.google.com/file/d/1dC33FcvSmBL53TbMSvXuMg7-EHjAyyao/view?usp=sharing"
                className="text-gradient btn-link"
                download="cv-apply.pdf"
              >
                My Portfolio
              </a>
            </motion.div>

            {/* socials */}

            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex  text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a
                href="https://github.com/nhanpoet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.facebook.com/nhan.nguyentrung.7161"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>

              <a
                href="https://www.instagram.com/ntn207_202/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </motion.div>
          </div>

          {/* image */}
          <div className="hidden lg:flex flex-1 max-w-[360px] lg:max-w-[520px] mb-8 ">
            <motion.img
              variants={fadeIn("down", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              src={Image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
