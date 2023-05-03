import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { staggerContainer } from "../utils/motion";
import { Pages } from "../constants";

const Contact = ({ setSelectedPage }) => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // serviceID: service_6z72w09
    // templateID: template_sk80ku6
    // publicKey: TYfTz8D9ldvZQIecu
    emailjs
      .send(
        "service_6z72w09",
        "template_sk80ku6",
        {
          from_name: form.name,
          to_name: "JerryHuang",
          message: form.message,
          from_email: form.email,
        },
        "TYfTz8D9ldvZQIecu"
      )
      .then(() => {
        setLoading(false);
        alert("Thank you. I will get back to you as soon as possible.");

        setForm(
          {
            name: "",
            email: "",
            message: "",
          },
          (error) => {
            setLoading(false);
            console.log(error);
            alert("Something want wrong.");
          }
        );
      });
  };

  return (
    <motion.section
      onViewportEnter={() => setSelectedPage(Pages.Contact)}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative`}
    >
      <span className="hash-span" id="contact">
        &nbsp;
      </span>

      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-blue-200 dark:bg-gray-700 dark:bg-opacity-40 rounded-2xl p-10 md:p-[60px]"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-6 flex flex-col gap-4"
          >
            <label className="flex flex-col">
              <span className="text-secondary font-medium mb-4">Your Name</span>
              <input
                required
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-primary dark:bg-gray-600 py-4 px-6 placeholder:text-tertiary text-secondary rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-secondary font-medium mb-4">
                Your Email
              </span>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-primary dark:bg-gray-600 py-4 px-6 placeholder:text-tertiary text-secondary rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-secondary font-medium mb-4">
                Your Message
              </span>
              <textarea
                rows="5"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's do you want to say?"
                className="bg-primary dark:bg-gray-600 py-4 px-6 placeholder:text-tertiary text-secondary rounded-lg outline-none border-none font-medium"
              />
            </label>

            <div className="flex justify-end">
              <div className="relative group">
                <div
                  className="hidden dark:block absolute -inset-0.5 rounded-lg opacity-50 blur
                  bg-gradient-to-r from-pink-600 to-purple-600
                  group-hover:opacity-100 transition ease-in-out duration-1000 group-hover:duration-200"
                ></div>
                <button
                  type="submit"
                  className="group relative h-12 w-fit pr-6 pl-7 overflow-hidden rounded-lg bg-white dark:bg-gray-800 text-lg shadow"
                >
                  <div className="absolute inset-0 w-3 bg-blue-out dark:hidden transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                  <span class="relative text-black dark:text-white group-hover:text-white">
                    {loading ? "Sending..." : "Send"}
                  </span>
                </button>
              </div>
            </div>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
