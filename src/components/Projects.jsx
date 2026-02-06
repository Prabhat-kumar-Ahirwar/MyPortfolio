import React from 'react';
import FoodWasteImg from '../assets/FoodWaste.png';
import CEMOS from '../assets/CEMOS.png';
import StudyHubImg from '../assets/studyhub.png';
import portfolioPreview from '../assets/portfolio-preview.png'; 
const Projects = () => {
  return (
    <section id="projects" className="mt-20 scroll-mt-24 mb-10">

      {/* Section Heading */}
      <div className="flex items-center gap-2 mb-6">
        <span className="text-blue-400 text-xl">📂</span>
        <h3 className="text-xl font-bold text-white">Featured Projects</h3>
      </div>

      <p className="text-gray-400 text-sm mb-8">
        A glimpse into my development journey.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Project Card 3: CEMOS */}
        <div className="group bg-[#212123] p-4 rounded-2xl border border-[#383838] hover:border-green-500/50 transition-all duration-300 relative">
          <div className="h-48 bg-gray-800 rounded-xl mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-green-500/10 group-hover:bg-transparent transition-all"></div>
            <img
                  src={CEMOS}
                  alt="CEMOS Campus Electricity Maintenance and Optimization System"
                  className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition"
                  style={{ background: 'transparent', display: 'block', margin: 'auto' }}
                />
          </div>
          <h4 className="text-lg font-bold text-white mb-2">CEMOS Campus Electricity Maintenance and Optimization System</h4>
          <p className="text-sm text-gray-400">A smart campus solution for monitoring, maintaining, and optimizing electricity usage. Features real-time tracking, predictive maintenance, and analytics to reduce energy waste and improve operational efficiency.</p>
          <a
            href="https://github.com/Priyanshikhorwal/CEMOS"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 px-4 py-1.5 bg-gray-900 text-blue-400 rounded-full text-xs font-semibold shadow hover:bg-blue-600 hover:text-white transition-all"
          >
            &lt;/&gt; Code
          </a>
        </div>

        {/* Project Card 4: Study Share */}
        <div className="group bg-[#212123] p-4 rounded-2xl border border-[#383838] hover:border-yellow-500/50 transition-all duration-300 relative">
          <div className="h-48 bg-gray-800 rounded-xl mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-yellow-500/10 group-hover:bg-transparent transition-all"></div>
            <img
                  src={StudyHubImg}
                  alt="StudyHub"
                  className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition"
                  style={{ background: 'transparent', display: 'block', margin: 'auto' }}
                />
          </div>
          <h4 className="text-lg font-bold text-white mb-2">Study Hub</h4>
          <p className="text-sm text-gray-400">A collaborative platform where students can share and access college materials, notes, and resources. Designed to foster academic support and easy material exchange among peers.</p>
          <a
            href="https://github.com/Prabhat-kumar-Ahirwar"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 px-4 py-1.5 bg-gray-900 text-blue-400 rounded-full text-xs font-semibold shadow hover:bg-blue-600 hover:text-white transition-all"
          >
            &lt;/&gt; Code
          </a>
        </div>
        
        {/* Project Card 5: Portfolio Project */}
        <div className="group bg-[#212123] p-4 rounded-2xl border border-[#383838] hover:border-pink-500/50 transition-all duration-300 relative">
          <div className="h-48 bg-gray-800 rounded-xl mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-pink-500/10 group-hover:bg-transparent transition-all"></div>
            <img
                  src={portfolioPreview}
                  alt="Portfolio Preview"
                  className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition"
                  style={{ background: 'transparent', display: 'block', margin: 'auto' }}
                />
          </div>
          <h4 className="text-lg font-bold text-white mb-2">Portfolio Project</h4>
          <p className="text-sm text-gray-400">A personal portfolio website showcasing skills, projects, and achievements. Built with React, Tailwind CSS, and Vite for a modern, responsive design and fast performance.</p>
          <a
            href="https://github.com/Prabhat-kumar-Ahirwar/MyPortfolio.git"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 px-4 py-1.5 bg-gray-900 text-blue-400 rounded-full text-xs font-semibold shadow hover:bg-blue-600 hover:text-white transition-all"
          >
            &lt;/&gt; Code
          </a>
        </div>

        {/* Project Card 1 */}
        <div className="group bg-[#212123] p-4 rounded-2xl border border-[#383838] hover:border-blue-500/50 transition-all duration-300 relative">
          <div className="h-48 bg-gray-800 rounded-xl mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-transparent transition-all"></div>
            <img
              src="https://via.placeholder.com/400x300"
              alt="Car Rental System"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
            />
          </div>
          <h4 className="text-lg font-bold text-white mb-2">Car Rental System</h4>
          <p className="text-sm text-gray-400">A full-stack car rental platform built using Spring Boot, REST APIs, and React, focusing on scalability and clean backend architecture.</p>
          <a
            href="https://github.com/Prabhat-kumar-Ahirwar/Car-Rental-Management.git"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 px-4 py-1.5 bg-gray-900 text-blue-400 rounded-full text-xs font-semibold shadow hover:bg-blue-600 hover:text-white transition-all"
          >
            &lt;/&gt; Code
          </a>
        </div>

        {/* Project Card 2 */}
        <div className="group bg-[#212123] p-4 rounded-2xl border border-[#383838] hover:border-blue-500/50 transition-all duration-300 relative">
          <div className="h-48 bg-gray-800 rounded-xl mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-transparent transition-all"></div>
            <img
              src="https://via.placeholder.com/400x300"
              alt="Career Counselling Platform"
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
            />
          </div>
          <h4 className="text-lg font-bold text-white mb-2">Career Counselling Platform</h4>
          <p className="text-sm text-gray-400">A guidance system designed with ER diagrams and system architecture focusing on structured data modeling and workflow design.</p>
          <a
            href="https://github.com/Prabhat-kumar-Ahirwar"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 px-4 py-1.5 bg-gray-900 text-blue-400 rounded-full text-xs font-semibold shadow hover:bg-blue-600 hover:text-white transition-all"
          >
            &lt;/&gt; Code
          </a>
        </div>

        

        
        {/* Project Card 6: Food Waste Management System */}
        <div className="group bg-[#212123] p-4 rounded-2xl border border-[#383838] hover:border-red-500/50 transition-all duration-300 relative">
          <div className="h-48 bg-gray-800 rounded-xl mb-4 overflow-hidden relative">
            <div className="absolute inset-0 bg-red-500/10 group-hover:bg-transparent transition-all"></div>
                <img
                  src={FoodWasteImg}
                  alt="Food Waste Management System"
                  className="w-full h-full object-cover rounded-xl opacity-80 group-hover:opacity-100 transition"
                  style={{ background: 'transparent', display: 'block', margin: 'auto' }}
                />
          </div>
          <h4 className="text-lg font-bold text-white mb-2">Food Waste Management System</h4>
          <p className="text-sm text-gray-400">A platform to track, reduce, and manage food waste in institutions. Includes analytics, donation coordination, and reporting tools to promote sustainability and efficient resource use.</p>
          <a
            href="https://www.figma.com/design/jpc0nYvnh4jlKOJoXluXpc/Untitled?node-id=0-1&t=QOSE9E742qQuf0CS-1"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 px-4 py-1.5 bg-gray-900 text-blue-400 rounded-full text-xs font-semibold shadow hover:bg-blue-600 hover:text-white transition-all"
          >
            &lt;/&gt; Code
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;
