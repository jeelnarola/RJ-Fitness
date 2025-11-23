import React from "react";
import { Outlet } from "react-router-dom";
import Sidbar from "../Header/Sidbar"
function Layout() {
  return (
    <div className="flex">
    <aside className="w-full md:w-60 bg-base-200 h-screen border-r border-gray-300 ">

        {/* Your Sidebar menu here */}
        <Sidbar/>
      </aside>
    </div>
  );
}

export default Layout;
