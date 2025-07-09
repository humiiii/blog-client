import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiEdit } from "react-icons/fi";
import { FaListCheck, FaRegComments } from "react-icons/fa6";

const links = [
  { to: "/admin", label: "Dashboard", icon: <FiHome /> },
  { to: "/admin/addBlog", label: "Add Blog", icon: <FiEdit /> },
  { to: "/admin/blogs", label: "Blogs", icon: <FaListCheck /> },
  { to: "/admin/comments", label: "Comments", icon: <FaRegComments /> },
];

const Sidebar = () => {
  return (
    <aside className="flex min-h-full w-56 flex-col gap-2 px-4 py-8">
      <h2 className="text-primary mb-8 text-xl font-bold tracking-wide">
        Admin Panel
      </h2>
      <nav className="flex flex-col gap-2">
        {links.map((link) => (
          <NavLink
            key={link.to}
            end={link.to === "/admin"}
            to={link.to}
            className={({ isActive }) =>
              `hover:bg-primary/10 hover:text-primary flex items-center gap-3 rounded-lg px-4 py-2 font-medium text-gray-700 transition-colors duration-200 ${
                isActive ? "bg-primary/10 text-primary" : ""
              }`
            }
          >
            <span className="text-lg">{link.icon}</span>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
