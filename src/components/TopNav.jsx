import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Resume", path: "/resume" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
];

const TopNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <nav className="flex justify-end mb-8">
      <ul className="flex gap-6 bg-[#1e1e1f] border border-[#383838] rounded-full px-6 py-3">
        {navLinks.map(
          (item) => (
            <li
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`text-sm font-medium cursor-pointer transition
                ${location.pathname === item.path ? "text-blue-400" : "text-gray-400 hover:text-white"}
              `}
            >
              {item.label}
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default TopNav;
