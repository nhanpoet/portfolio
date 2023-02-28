/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const services = [
  {
    name: "UI/UX Design",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    link: "Learn More",
  },
  {
    name: "Development",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    link: "Learn More",
  },
  {
    name: "Digital Marketing",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
            <h2 className="h2 text-accent mb-6">What I Do.</h2>
            <h3 className="h3 max-w-[455px] mb-10">I'm a Fresher FullStack</h3>
            <button className="btn btn-sm">See me work</button>
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
                    className="border-b border-white/20 sm:h-[206px] lg:h-[175px] mb-[26px] flex"
                    key={index}
                  >
                    <div className="max-w-[480px]   ">
                      <h4 className="text-[20px] tracking-wider font-primary font-bold mb-4">
                        {service.name}
                      </h4>
                      <p className="font-secondary leading-tight text-[20px]">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex flex-col flex-1 items-end mt-2">
                      <a
                        href="#"
                        className="btn w-9 h-9 mb-[75px] flex justify-center items-center"
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
