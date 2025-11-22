import React from "react";
import { Outlet } from "react-router-dom";
import Sidbar from "../Header/Sidbar"
function Layout() {
  return (
    <div className="flex">
      <aside className="w-full md:w-60 bg-base-200 min-h-screen">
        {/* Your Sidebar menu here */}
        <Sidbar/>
        <Outlet />
      </aside>
    </div>
  );
}

export default Layout;
