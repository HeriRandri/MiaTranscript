import { Sidebar } from "lucide-react";
import React from "react";
import Navbar from "../ui/dashboard/navbar/navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
