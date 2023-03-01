import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0ve8e7n",
        "template_z1gixri",
        ref.current,
        "wSkh6B-VgWP3WQsIk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <section className="py-16 mt-[200px]  lg:section" id="contact">
      <div className="container  mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div className="">
              <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
                Get in touch
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>

          <motion.form
            ref={ref}
            onSubmit={handleSubmit}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
            action=""
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white
              focus:border-accent transition-all"
              placeholder="Your name"
              type="text"
              name="name"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white
              focus:border-accent transition-all"
              placeholder="Your email"
              name="email"
              type="text"
            />

            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white
              focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              name="message"
            ></textarea>

            <button className="btn btn-lg" type="submit">
              Send message
            </button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)))"}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
