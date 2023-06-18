/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Image from "../assets/57372-removebg-preview.png";

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
                sequence={["Developer", 2000, "Intern", 2000]}
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
              className="mb-4 max-w-lg mx-auto lg:mx-0 "
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
                href="https://drive.google.com/file/d/1yKgVlumtXwsRsB-S1zxKS-RQqF2UG32i/view?usp=drive_link"
                className="text-gradient btn-link"
                download
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
          <div className="hidden lg:flex flex-1 max-w-[320px] lg:max-w-[480px] mb-8 ">
            <motion.img
              // variants={fadeIn("down", 0.5)}
              variants={{
                ...fadeIn("down", 0.5),
                hidden: { opacity: 0, rotateY: 90 },
                show: { opacity: 1, rotateY: 0 },
              }}
              initial="hidden"
              animate="show"
              transition={{
                duration: 1,
                repeat: Infinity, // Lặp vô tận
                repeatType: "reverse", // Đảo ngược trạng thái khi lặp
              }}
              src={Image}
              alt=""
              viewport={{ once: false, amount: 0.7 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
