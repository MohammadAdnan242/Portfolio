import React from "react";
import profilepic from "../assets/profpic.png";
import { TypeAnimation } from "react-type-animation";
import ShinyEffect from "./ShinyEffect";
import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
} from "react-icons/ai";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiNodejsSmall,
  DiReact,
  DiMongodb
} from "react-icons/di";
import { motion } from "framer-motion";


const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative">
        <div className="grid md:grid-cols-2 place-items-center gap-8">
            <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            >
                <TypeAnimation
                    sequence={[
                        "MERN stack Developer",
                        1000,
                        "Webdesigner",
                        1000
                       
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="font-bold text-gray-400 text-xl md:text-5xl italic- mb-4"
                />

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-gray-200 md:text-7xl text-5xl tracking-tight mb-4"
                >
                    HEY, I AM <br/>
                    <span className="text-purple-500">MOHAMMAD ADNAN</span>
                </motion.p>

                <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-gray-300 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
                >
                   I'm a passionate MERN stack web developer, specializing in building dynamic, scalable, and user-friendly web applications.
                </motion.p>

                <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
                >
 <a 
      href="https://drive.google.com/file/d/1QttxlOMVybKh59lNEJV7aRkAQ6ao6kva/view?usp=sharing" 
      target="_blank" 
      rel="noopener noreferrer"
>
    <motion.button 
        whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
        className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border
                   border-purple-400 rounded-xl"
    >
        Download CV
    </motion.button>
</a>


                    <div className="flex gap-6 flex-row text-4xl md:text-6xl text-purple-400 z-20">
                        <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/MohammadAdnan242">
                            <AiOutlineGithub/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/mohdadnan242">
                            <AiOutlineLinkedin/>
                        </motion.a>

                        <motion.a whileHover={{ scale: 1.2 }} href="https://www.instagram.com/mohd_adnan_7860a?igsh=MTZ2MnA2cjM5eGljMw==">
                            <AiOutlineInstagram/>
                        </motion.a>
                    </div>
                </motion.div>
            </motion.div>


            <div className="relative flex justify-center items-start w-full">
  {/* Nail */}
  <div className="absolute top-0 z-30 w-3 h-3 bg-gray-700 rounded-full shadow-md" />

  {/* Wire */}
  <div className="absolute top-0 z-20 w-px h-[60px] bg-gray-500" />

  {/* Pendulum swing from nail */}
  <motion.div
    className="origin-top w-[70vw] max-w-[300px] md:max-w-[450px] mt-[60px] rounded-2xl border-[10px] border-gray-300 shadow-xl bg-white"
    initial={{ rotate: -5 }}
    animate={{ rotate: [ -5, 5, -5 ] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <img
      src={profilepic}
      alt="Profile"
      className="w-full h-full object-cover rounded-xl"
    />
  </motion.div>
</div>

        </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-row text-7xl px-12 md:px-0 w-full justify-center items-center py-24"
        >
            <p className="text-gray-200 mr-6">My Tech Stack</p>
            <DiHtml5 className="text-orange-600 mx-2" />
            <DiCss3 className="text-blue-600 mx-2" />
            <DiJavascript1 className="text-yellow-500 mx-2" />
            <DiReact className="text-blue-500 mx-2" />
            <DiNodejsSmall className="text-green-500 mx-2" />
           < DiMongodb className="text-green-700 mx-2" />

        </motion.div>

        <div className="absolute inset-0 hidden md:block">
            <ShinyEffect left={0} top={0} size={1400} />
        </div>
        
    </div>
  )
}

export default Hero