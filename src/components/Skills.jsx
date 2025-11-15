import React, { useState, useEffect, useRef } from 'react';

// A simple SVG component for the HTML5 icon
const DiHtml5 = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M1 0h22l-2.074 23.332L11.996 24 3.076 23.332 1 0zm17.062 5.093l-.226 2.58H6.945l.18 2.05h10.323l-.337 3.825H6.425l.226 2.58h9.825l-.462 5.228-4.407 1.258-4.405-1.258-.22-2.58H4.665l.44 4.965 6.94 1.968 6.945-1.968.995-11.23h-1.99z"/>
  </svg>
);

// A simple SVG component for the CSS3 icon
const DiCss3 = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.015 0h11.985l-1.928 21.603-10.057 2.397-10.05-2.397-1.925-21.603h11.98zM5.385 18.067l.184 2.073 6.43 1.543 6.425-1.543.992-11.163h-1.975l-.26 2.97h-2.912l-.24 2.768h5.36l-.375 4.195-3.832.91-3.84-.91-.184-2.073h-2.01l.445 5.003z"/>
  </svg>
);

// A simple SVG component for the Javascript icon
const DiJavascript1 = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M0 0h24v24H0V0z"/>
    <path d="M12 0h12v24h-12c-6.627 0-12-5.373-12-12s5.373-12 12-12zm6.927 19.86c-1.391 1.059-3.235 1.74-5.221 1.74-2.094 0-3.929-.785-5.318-2.355l1.628-1.544c1.17 1.144 2.593 1.724 3.69 1.724 1.758 0 2.457-1.002 2.457-1.874 0-1.127-.85-1.535-2.457-2.195-2.228-.971-4.04-2.112-4.04-4.881 0-2.409 1.954-4.226 4.675-4.226 2.052 0 3.829.743 5.087 2.013l-1.666 1.488c-1.047-.945-2.083-1.424-3.321-1.424-1.392 0-2.064.957-2.064 1.767 0 1.018.847 1.465 2.584 2.196 2.225.922 4.02 2.046 4.02 4.881.001 2.553-1.977 4.542-4.915 4.542-1.602 0-3.136-.575-4.225-1.55l1.654-1.531z"/>
  </svg>
);

// A simple SVG component for the React icon
const DiReact = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-4.72 16.533c-.352-.395-.658-.823-.92-1.282l1.673-1.045c.224.394.484.767.78 1.115l-1.533 1.212zm7.712-.51c.36-.395.667-.824.93-1.285l-1.674-1.046c-.225.396-.487.769-.783 1.117l1.527 1.214zm-1.847-3.951c.361-.397.668-.825.93-1.285l-1.675-1.046c-.225.395-.487.768-.783 1.117l1.528 1.214zm-4.015-1.23c.36-.395.667-.824.93-1.285l-1.675-1.046c-.225.395-.487.768-.783 1.117l1.528 1.214zm4.015 1.23c-.361-.397-.668-.825-.93-1.285l1.675-1.046c.225.395.487.768.783 1.117l-1.528 1.214zM12 12.012c-.552 0-1-.448-1-1s.448-1 1-1 1 .448 1 1-.448 1-1 1zm-4.717-5.91c-.352.395-.658.823-.92 1.282l1.673 1.045c.224-.394.484-.767.78-1.115l-1.533-1.212zm7.712-.51c.36-.395.667-.824.93-1.285l-1.674-1.046c-.225.396-.487.769-.783 1.117l1.527 1.214z"/>
  </svg>
);

// A simple SVG component for the Node.js icon
const DiNodejsSmall = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.208 17.52c-2.43 0-4.32-.47-5.67-1.41l.92-1.74c1.04.47 2.45.86 4.19.86 1.83 0 2.82-.44 2.82-1.57v-.5c0-1.03-.99-1.57-2.91-2.14-2.82-.77-4.24-1.89-4.24-4.52 0-2.45 2.11-4.2 5.09-4.2 2.37 0 4.12.59 5.34 1.34l-.87 1.73c-1.11-.64-2.4-.99-4.3-.99-1.9 0-2.6.47-2.6 1.37v.5c0 .99.99 1.57 2.91 2.14 2.82.77 4.24 1.89 4.24 4.52 0 2.45-2.11 4.2-5.09 4.2z"/>
  </svg>
);

// A simple SVG component for the MongoDB icon
const DiMongodb = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.99 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 11.99 2zm0 18c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
  </svg>
);

// A simple SVG component for the GitHub icon
const DiGithubBadge = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.804 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.088-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.465-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.772.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.565 21.802 24 17.301 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

// A simple SVG component for the Firebase icon
const DiFirebase = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L.9 19.5h22.2L12 0zm0 18.5L5.7 13h12.6l-6.3 5.5zm0-2.5L9.6 13h4.8l-2.4 3zm0-2.5L7.5 10h9l-4.5 3z"/>
  </svg>
);

// A simple SVG component for the Redux icon
const SiRedux = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm.081 18.59c-3.664.128-6.19-2.008-6.27-4.41.05-.183.173-.34.33-.42.22-.116.48-.117.7.002.16.083.27.234.32.41.08.31.25.61.5.83.47.41.97.71 1.67.93 1.07.33 2.11.3 3.3.003 1.05-.262 1.76-.79 2.06-1.55.23-.58.11-1.3-.35-1.95-.29-.44-.65-.83-1.07-1.12l-.99-.67c-.24-.16-.48-.31-.7-.47-1.03-.73-2.22-1.57-2.6-2.9-.22-.79.03-1.63.53-2.3.26-.35.56-.66.92-.93.42-.31.87-.55 1.34-.7.83-.28 1.83-.38 2.87-.16 2.15.45 3.9 1.76 4.62 4.07-.12 3.42-3.32 6.07-6.94 6.22l-.12.01z"/>
  </svg>
);

// A simple SVG component for the Tailwind CSS icon
const RiTailwindCssFill = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.003 24c-2.909 0-5.698-1.115-7.832-3.238-2.13-2.124-3.235-4.908-3.235-7.818 0-2.887 1.096-5.65 3.235-7.766 2.134-2.115 4.923-3.226 7.832-3.226 2.855 0 5.58 1.07 7.7 3.146 2.112 2.072 3.197 4.803 3.197 7.646 0 2.843-1.085 5.574-3.197 7.646-2.12 2.076-4.845 3.146-7.7 3.146zm-5.717-19.34c-1.628 1.58-2.478 3.665-2.478 5.75 0 2.057.842 4.116 2.478 5.702 1.574 1.57 3.585 2.38 5.8 2.38 2.22 0 4.232-.81 5.805-2.38 1.636-1.586 2.478-3.645 2.478-5.702 0-2.085-.85-4.17-2.478-5.75-1.573-1.57-3.585-2.38-5.805-2.38-2.215 0-4.227.81-5.8 2.38z"/>
  </svg>
);

// The Reveal component to trigger the animation on scroll
const Reveal = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();
  
  const delayClasses = {
    0: '',
    1: 'transition-delay-150'
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(domRef.current);
        }
      });
    }, { threshold: 0.1 });

    if (domRef.current) {
      observer.observe(domRef.current);
    }

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transform transition-transform duration-1000 ease-out ${delayClasses[delay]} ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      {children}
    </div>
  );
};

const skills = [
  {
    category: 'Frontend',
    technologies: [
      { name: 'HTML', icon: <DiHtml5 className='text-orange-600' /> },
      { name: 'CSS', icon: <DiCss3 className='text-blue-600' /> },
      { name: 'ReduxToolkit', icon: <SiRedux className='text-purple-600' /> },
      { name: 'TailwindCss', icon: <RiTailwindCssFill className='text-blue-500' /> },
      { name: 'JavaScript', icon: <DiJavascript1 className='text-yellow-500' /> },
      { name: 'React', icon: <DiReact className='text-blue-500' /> },
    ],
  },
  {
    category: 'Fullstack',
    technologies: [
      { name: 'Node Js', icon: <DiNodejsSmall className='text-green-500' /> },
      { name: 'MongoDB', icon: <DiMongodb className='text-green-600' /> },
      { name: 'React', icon: <DiReact className='text-blue-500' /> },
      { name: 'Firebase', icon: <DiFirebase className='text-red-500' /> },
      { name: 'GitHub', icon: <DiGithubBadge className='text-gray-600' /> },
    ],
  },
];

const Skills = () => {
  return (
    <div className="max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12" id="skills">
      <Reveal>
        <h2 className="text-3xl font-bold mb-4 text-center">Skills</h2>
        <p className="text-center mb-8">
          I worked on various frontend and fullstack projects. Check them <a href="#" className="underline">there</a>.
        </p>

        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          {skills.map((skill, index) => (
            <Reveal key={index} delay={index}>
              <div className="border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2">
                <h3 className="text-xl font-bold mb-4 text-center">{skill.category}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {skill.technologies.map((tech, idx) => (
                    <div key={idx} className="flex items-center justify-between flex-row-reverse space-x-reverse space-x-2">
                      <span className="text-2xl">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans flex flex-col justify-center items-center">
      <script src="https://cdn.tailwindcss.com"></script>
      <Skills />
    </div>
  );
};

export default App;
