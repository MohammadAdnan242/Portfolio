import React from 'react'
import { motion } from 'framer-motion'
import {  FaLink } from 'react-icons/fa'
import Reveal from './Reveal'

const certifications = [
    {
        name: 'NPTEL: Cloud Computing',
        period: 'Jul-Oct 2024 - lifetime',
        description: 'I scored 88% and ranked among the top 2% of candidates in an NPTEL exam, with a total of 40,000 registered participants. This accomplishment highlights my dedication and strong understanding of the course material',
        link: 'https://drive.google.com/file/d/17cc4d7HQwhZbrmT5i6AQSgwk6B0PZ_1e/view?usp=sharing'
    },
    {
        name: 'Microsoft Certified: Azure Fundamentals',
        period: '17 Jan 2024 - lifetime',
        description: 'I successfully completed the Microsoft Certified: Azure Fundamentals exam, scoring 880 out of 1000, well above the cutoff of 700. This certification validates my foundational knowledge of Microsoft Azure, demonstrating my proficiency in cloud services and Azure’s core functionalities.',
        link: 'https://drive.google.com/file/d/1lYSwgLLEuHologVw2J59BXW9bfd417Lf/view?usp=sharing'
    },
]

const Certifications = () => {
  return (
    <div className='p-8 max-w-[1200px] mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Certifications</h1>
        <motion.div
        className='flex flex-wrap justify-center gap-8'
        initial="hidden"
        animate="visible"
        >
            {certifications.map((cert, index) => (
                <Reveal key={index}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1 }}
                    className='w-full sm:w-[300px] md:w-[350px] p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-purple-700/10 border border-purple-600'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{cert.name}</h2>
                    <p className='text-gray-300'>{cert.period}</p>
                    <p className='text-gray-400 mt-4'>{cert.description}</p>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer" className='mt-4 text-blue-500 hover:text-blue-700'>
                        <FaLink className="inline-block mr-2" /> View Certificate
                    </a>
                </motion.div>
                </Reveal>
            ))}
        </motion.div>
    </div>
  )
}

export default Certifications
