import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { staggerContainer } from "../utils/motion";
import { Pages } from "../constants";

const InputField = ({ type, name, value, handleChange, placeholderText }) => (
  <div className='mt-2'>
    <div className='relative w-full'>
      <input
        required
        id={`form${name}`}
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className='peer h-full w-full resize-none rounded-[7px] border-2 border-gray-50 bg-transparent px-6 py-4 text-sm font-normal text-gray-500 outline outline-0 transition-all placeholder-shown:border-gray-100 placeholder-shown:border-t-gray-200 focus:border-pink-500 focus:border-t-transparent focus:outline-0 dark:border-gray-400 dark:placeholder-shown:border-gray-400 dark:focus:border-pink-500 dark:focus:border-t-transparent'
        placeholder=' '
      ></input>
      <label
        htmlFor={`form${name}`}
        className="before:content[' '] after:content[' '] text-blue-gray-400 pointer-events-none absolute left-0 -top-[7px] flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-transparent before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-transparent after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-gray-500"
      >
        {value ? "" : placeholderText}
      </label>
    </div>
  </div>
);

const InputTextarea = ({ name, value, handleChange, placeholderText }) => (
  <div className='mt-2'>
    <div className='relative w-full'>
      <textarea
        id={`form${name}`}
        name={name}
        value={value}
        onChange={handleChange}
        className='peer h-full min-h-[100px] w-full resize-none rounded-[7px] border-2 border-gray-50 bg-transparent px-3 py-2.5 text-sm font-normal text-gray-500 outline outline-0 transition-all placeholder-shown:border-gray-50 placeholder-shown:border-t-gray-50 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 dark:border-gray-400 dark:placeholder-shown:border-gray-400 dark:focus:border-pink-500 dark:focus:border-t-transparent'
        placeholder=' '
      ></textarea>
      <label
      htmlFor={`form${name}`}
      className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-transparent before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-transparent after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2  peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-pink-500">
        {value ? "" : placeholderText}
      </label>
    </div>
  </div>
);

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
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} relative mx-auto max-w-7xl`}
    >
      <span className='hash-span' id='contact'>
        &nbsp;
      </span>

      <div className='flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row'>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] rounded-2xl bg-blue-200 p-10 dark:bg-gray-700 dark:bg-opacity-40 md:p-[60px]'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-6 flex flex-col gap-4'
          >
            <InputField
              type={"text"}
              name={"name"}
              value={form.name}
              handleChange={handleChange}
              placeholderText={"Your Name"}
            />
            <InputField
              type={"email"}
              name={"email"}
              value={form.email}
              handleChange={handleChange}
              placeholderText={"Your Email"}
            />
            <InputTextarea
              name={"message"}
              value={form.message}
              handleChange={handleChange}
              placeholderText={"Message"}
            />

            <div className='flex justify-end'>
              <div className='group relative'>
                <div className='absolute -inset-0.5 hidden rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 ease-in-out group-hover:opacity-100 group-hover:duration-200 dark:block'></div>
                <button
                  type='submit'
                  className='group relative h-12 w-fit overflow-hidden rounded-lg bg-white pr-6 pl-7 text-lg shadow dark:bg-gray-800'
                >
                  <div className='absolute inset-0 w-3 bg-blue-out transition-all duration-[250ms] ease-out group-hover:w-full dark:hidden'></div>
                  <span class='relative text-black group-hover:text-white dark:text-white'>
                    {loading ? "Sending..." : "Send"}
                  </span>
                </button>
              </div>
            </div>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className='h-[350px] md:h-[550px] xl:h-auto xl:flex-1'
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
