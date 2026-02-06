// src/components/About.jsx
import React from "react";

const About = () => {
  return (
    <>
      {/* ABOUT SECTION */}
      <section id="about" className="scroll-mt-24 mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          About Me
        </h2>
        <div className="w-16 h-1 bg-blue-400 rounded-full mb-6"></div>

        <div className="text-gray-400 leading-relaxed space-y-5 text-sm md:text-base max-w-3xl">
          <p>
            I'm{" "}
            <span
  onClick={() => window.open("/src/assets/profile.JPG", "_blank")}
  className="text-white font-semibold cursor-pointer
             hover:text-blue-400 transition-colors duration-300"
>
  Prabhat Kumar Ahirwar
</span>
            , a B.Tech Computer Science student with a strong focus on Java
            backend development and scalable system design.
          </p>

          <p>
            I build backend applications using{" "}
            <span className="text-white font-semibold">
              Java, Spring Boot, REST APIs, JWT, and SQL
            </span>
            , with an emphasis on clean architecture and secure API
            development.
          </p>

          <p>
            I am motivated to contribute to impactful backend solutions in
            a professional engineering environment.
          </p>
        </div>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-3 mt-8">
          {[
            "Java",
            "Spring Boot",
            "REST APIs",
            "JWT",
            "SQL",
            "MySQL",
            "Git",
            "Maven",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 text-xs rounded-full bg-[#212123]
                         border border-[#383838] text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* QUICK STATS */}
        <h3 className="text-xl font-bold text-white mt-14 mb-6 flex items-center gap-2">
          <span className="text-blue-400">★</span> Quick Stats
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { value: "4+", label: "Projects" },
            { value: "5+", label: "Certifications" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[#212123] p-5 rounded-2xl border border-[#383838]
                         hover:border-blue-500/40 transition"
            >
              <h4 className="text-3xl font-bold text-white mb-1">
                {item.value}
              </h4>
              <p className="text-xs text-gray-500 uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED PORTFOLIOS */}
      <section id="featured-portfolios" className="mb-20">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-sm">
            A glimpse into my professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CARD 1 */}
          <div className="bg-[#1e1e1f] rounded-2xl border border-[#2a2a2c]
                          shadow-lg overflow-hidden transition-all duration-300
                          hover:shadow-blue-500/30 hover:border-blue-400/60 group">
            <div className="w-full aspect-[16/9] bg-[#18181a] overflow-hidden rounded-t-2xl">
              <img
                src="/src/assets/portfolio-preview.png"
                alt="Portfolio Website Preview"
                className="w-full h-full object-cover transition group-hover:brightness-110"
                style={{ display: 'block', objectPosition: 'top' }}
              />
            </div>
            <div className="p-6">
              <div className="text-xs text-gray-500 mb-1">
                prabhat.dev
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Portfolio Website
              </h3>
              <p className="text-gray-300 text-sm">
                Personal portfolio showcasing experience, skills, and
                achievements.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#1e1e1f] rounded-2xl border border-[#2a2a2c]
                          shadow-lg overflow-hidden transition-all duration-300
                          hover:shadow-blue-500/30 hover:border-blue-400/60 group">
            <img
              src="/src/assets/studyhub.png"
              alt="Study Hub Preview"
              className="w-full h-48 object-cover transition
                         group-hover:brightness-110"
            />
            <div className="p-6">
              <div className="text-xs text-gray-500 mb-1">
                terminal.prabhat.dev
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Study Hub
              </h3>
              <p className="text-gray-300 text-sm">
                A collaborative Study Hub platform designed with a simple and aesthetic, enabling students to share, access, and organize study materials interactively.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
