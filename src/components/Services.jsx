/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { TbSchool } from "react-icons/tb";

import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";
import { Link } from "react-scroll";

const services = [
  {
    name: "Education",
    icon: <TbSchool className="w-[25px] h-[25px] mr-3" />,
    description: "Aptech Computer Education, 09/2020 - 04/2023",
    des1: "- Major: Software Programming",
    des2: "- Currently: waiting for a degree",
    link: "Learn More",
  },
  {
    name: "Skills",

    description:
      "- Basic knowledge of programming languages: PHP | JAVA | C# | JavaScripts",
    des1: "- MVC pattern | MVVM , SQL Database | MySQL",
    des2: "- Teamwork skill, basic English reading comprehension",
    link: "Learn More",
  },
  {
    name: "INTEREST",
    description: "- Reading: Read an average of 1 book per month",
    des1: "- Sports: Swimming, soccer,...",
    des2: "- Listen to music and play games",
    link: "Learn More",
  },
];

const Services = () => {
  return (
    <section className="section mt-[50px]" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text  */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 lg:bg-services lg:bg-top  bg-no-repeat mix-blend-lighten mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">Education and skills .</h2>
            <h3 className="h3 max-w-[455px] mb-10">I'm Fresher</h3>
            <Link to="work" activeClass="active" smooth={true} spy={true}>
              <button className="btn btn-sm">See me work</button>
            </Link>
          </motion.div>

          {/* services */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            {/* services list  */}
            <div className="">
              {services.map((service, index) => {
                return (
                  <div
                    className="border-b border-white/20 sm:h-[206px] lg:h-auto mb-[26px] flex"
                    key={index}
                  >
                    <div className="max-w-[480px]   ">
                      <h4 className="text-[24px] text-accent tracking-wider font-primary font-bold mb-4">
                        {service.name}
                      </h4>
                      <div className="flex flex-row items-center">
                        {service.icon}
                        <p className="font-secondary leading-tight text-[20px]">
                          {service.description}
                        </p>
                      </div>
                      <p>{service.des1}</p>
                      <p>{service.des2}</p>
                    </div>
                    <div className="flex flex-col flex-1 items-end mt-2">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[60px] flex justify-center items-center"
                      >
                        <BsArrowUpRight />
                      </a>
                      <a className="text-gradient" href="#">
                        {service.link}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
