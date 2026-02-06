import React from "react";

const Resume = () => {
  return (
    <section className="mb-24">
      {/* Header */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Career Snapshot
        </h2>
        <div className="w-16 h-1 bg-blue-400 rounded-full mb-6"></div>

        {/* Resume Button */}
        <a
          href="https://github.com/Prabhat-kumar-Ahirwar/MyResume/blob/main/myresume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
        >
          View Resume
        </a>
      </div>

      <div className="grid md:grid-cols-2 gap-16">
        {/* EDUCATION */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-8">
            Education
          </h3>

          <div className="relative border-l border-[#2f2f32] pl-8 space-y-10">
            {/* Bachelor of Technology */}
            <div className="relative">
              <span className="absolute -left-[20px] top-1 w-3 h-3 bg-blue-400 rounded-full"></span>
              <h4 className="text-white font-semibold">Bachelor of Technology</h4>
              <p className="text-sm text-gray-400">
                Acropolis Institute of Technology & Research, Indore
              </p>
              <p className="text-xs text-gray-500">2023 – Present</p>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                Computer Science and Engineering (7.61 CGPA)
              </p>
            </div>

            {/* Higher Secondary Certificate (Class XII) */}
            <div className="relative">
              <span className="absolute -left-[20px] top-1 w-3 h-3 bg-blue-400 rounded-full"></span>
              <h4 className="text-white font-semibold">
                Higher Secondary Certificate (Class XII)
              </h4>
              <p className="text-sm text-gray-400">
                Little Star Shailesh Memorial School, Sagar
              </p>
              <p className="text-xs text-gray-500">2022 – 2023</p>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                CBSE BOARD (81%)
              </p>
            </div>

            {/* Secondary School Certificate (Class X) */}
            <div className="relative">
              <span className="absolute -left-[20px] top-1 w-3 h-3 bg-blue-400 rounded-full"></span>
              <h4 className="text-white font-semibold">
                Secondary School Certificate (Class X)
              </h4>
              <p className="text-sm text-gray-400">
                Little Star Shailesh Memorial School, Sagar
              </p>
              <p className="text-xs text-gray-500">2020 – 2021</p>
              <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                CBSE BOARD (84%)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
