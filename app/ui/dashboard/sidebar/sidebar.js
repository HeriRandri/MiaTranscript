"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";
import {
  FaBars,
  FaWallet,
  FaExchangeAlt,
  FaMoneyBillWave,
  FaSignOutAlt,
} from "react-icons/fa";

const link = [
  {
    name: "Dashboard",
    path: "/Dashboard",
    icon: <FaBars />,
  },

  {
    name: "Historic",
    path: "/historic",
    icon: <FaWallet />,
  },

  {
    name: "Setting",
    path: "/setting",
    icon: <FaExchangeAlt />,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <FaMoneyBillWave />,
  },
];

const Sidebar = () => {
  const pathName = usePathname();
  console.log(pathName);
  const { id } = useParams();

  return (
    <div className="w-64 min-h-screen p-5 bg-gray-500">
      <h2 className="text-xl font-bold">
        <span className="text-blue-400">Mia</span>Transcript
      </h2>
      <nav className="mt-5">
        <ul className="flex flex-col">
          {link.map((links, index) => {
            return (
              <Link
                key={index}
                href={`${links.path}/${id}`}
                className={`${
                  links.path === pathName && "bg-blue-500 font-medium "
                } gap-3 items-center p-2 rounded-md mt-7 flex `}
              >
                {links.icon} {links.name}
              </Link>
            );
          })}
        </ul>
      </nav>
      <button className="w-full mt-10 flex items-center bg-gray-800 p-2 rounded-md">
        <FaSignOutAlt className="mr-2" /> Logout
      </button>
    </div>
  );
};

export default Sidebar;
