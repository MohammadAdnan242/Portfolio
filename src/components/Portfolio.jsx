import React from 'react'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'
import project5 from '../assets/project5.png'
import project6 from '../assets/project6.png'
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';


const projects = [
    {
        img:project1,
        title:"Project #1",
        description:"Bitebuzz – A sleek food ordering app built with React, Tailwind CSS, Redux Toolkit, and Firestore, featuring secure payments, AI-powered recipes, and role-based access.",
        links:{
            site:"https://bitebuzz-iatz.vercel.app/",
            github:"https://github.com/MohammadAdnan242/Bitebuzz"
        },
    },
    {
        img:project2,
        title:"Project #2",
        description:"A simple To-Do List App built with React, featuring task management, editing, search, and local storage support with a completed tasks section.",
        links:{
            site:"https://todolistapp1230.netlify.app/",
            github:"https://github.com/MohammadAdnan242/Todo-list-App"
        },
    },
    {
        img:project3,
        title:"Project #3",
        description:"A weather app built with HTML, CSS, and JavaScript, providing accurate real-time weather data using the OpenWeather API.",
        links:{
            site:"https://weatherapp070.netlify.app/",
            github:"https://github.com/MohammadAdnan242/Weather-web-app"
        },
    },
    {
        img:project4,
        title:"Project #4",
        description:"A Speech-to-Text Converter built with React, enabling real-time voice transcription and clipboard copy functionality using SpeechRecognition API.",
        links:{
            site:"https://speechtotextconverter007.netlify.app/",
            github:"https://github.com/MohammadAdnan242/Speech-To-Text-Converter"
        },
    },
    {
        img:project5,
        title:"Project #5",
        description:"A Random Color Generator built with JavaScript, dynamically changing the background color and displaying the generated hex code",
        links:{
            site:"http://127.0.0.1:5500/pr1.html",
            github:"https://github.com/MohammadAdnan242/Random-color-generator"
        },
    },
    {
        img:project6,
        title:"Project #6",
        description:"A Currency Converter built with React, allowing real-time conversion between currencies using an external exchange rate API.",
        links:{
            site:"https://currencyconverter1230.netlify.app/",
            github:"https://github.com/MohammadAdnan242/Currency-Converter"
        },
    },

]
const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Projects</h2>
        {projects.map((project, index) => (
            <Reveal>
            <div key={index} 
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4'>
                    <img
                        src={project.img}
                        alt={project.title}
                        className='w-full h-full object-cover rounded-lg shadow-lg'
                    />
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            View Site
                        </a>
                        <a href={project.links.github}
                            className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                        transition duration-300'>
                            <AiOutlineGithub/>
                        </a>

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio
