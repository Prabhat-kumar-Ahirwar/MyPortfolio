import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import profileImg from '../assets/profile.JPG';

const Navbar = () => {
  return (
    <aside className="bg-[#1e1e1f] rounded-3xl p-8 border border-[#383838] flex flex-col items-center text-center">
      
      {/* Profile Image */}
<div
  className="w-32 h-32 rounded-2xl overflow-hidden mb-6 bg-gray-700 cursor-pointer"
  onClick={() => window.open(profileImg, "_blank")}
>
  <img
    src={profileImg}
    alt="Prabhat"
    className="w-full h-full object-cover"
  />
</div>


      {/* Name */}
      <h1 className="text-2xl font-semibold text-white mb-2">
        Prabhat Kumar Ahirwar
      </h1>

      {/* Role */}
      <div className="bg-[#2b2b2c] px-4 py-1 rounded-full text-xs text-gray-300 mb-8">
        Java Backend Developer
      </div>

      <hr className="w-full border-[#383838] mb-6" />

      {/* Contact Info */}
      <div className="w-full space-y-4 mb-8">
        <div className="flex items-center gap-4 text-left">
          <div className="p-2.5 bg-[#2b2b2c] rounded-lg text-blue-400">
            <FaEnvelope size={14} />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">Email</p>
            <p className="text-sm text-gray-200 truncate w-40">
              prabhatmmg007@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-left">
          <div className="p-2.5 bg-[#2b2b2c] rounded-lg text-blue-400">
            <FaMapMarkerAlt size={14} />
          </div>
          <div>
            <p className="text-xs text-gray-500 uppercase">Location</p>
            <p className="text-sm text-gray-200">Indore, India</p>
          </div>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 mt-auto">
        <a
          href="https://www.linkedin.com/in/prabhat-ahirwar-24604033a"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Prabhat-kumar-Ahirwar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaGithub />
        </a>
        <a
         href="https://api.whatsapp.com/send?phone=917987593265&text=Hello%20Prabhat"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <FaWhatsapp />
        </a>
      
      </div>
    </aside>
  );
};

export default Navbar;
