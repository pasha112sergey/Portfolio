import { motion } from "framer-motion";
import logo from "../assets/sbu-shield.png";
import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h1>
      <div className="flex flex-col lg:flex-row items-center flex-wrap justify-center my-20 ">
        <div className="flex flex-col items-center  w-full lg:w-1/4">
          <a href="https://www.stonybrook.edu/">
            <img src={logo} className="w-12 h-12 rounded-full mx-auto mb-6" />
          </a>
          <p className="text-center r mb-2 text-sm text-neutral-400">
            {EDUCATION.date}
          </p>
          <p className="text-center mb-2 font-bold text-green-400">
            {EDUCATION.gpa}
          </p>
        </div>
        <div className="w-full lg:w-3/4">
          <p className="text-center lg:text-left text-neutral-200">
            {EDUCATION.about}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
