import { NavLink, Outlet, useLocation } from "react-router-dom";
import TopHeader from "./TopHeader";
import { MdDashboard } from "react-icons/md";
import { FaUsers, FaUserPlus } from "react-icons/fa";

// ================= MENU ITEMS ==================
const AdminMenuItems = [
  {
    name: "Dashboard",
    icon: <MdDashboard className="size-4" />,
    path: "/admin/dashboard",
  },
  {
    name: "Trainer",
    icon: <FaUsers className="size-4" />,
    children: [
      {
        name: "Add Trainer",
        icon: <FaUserPlus className="size-4" />,
        path: "/admin/trainer/add",
      },
      {
        name: "Manage Trainer",
        icon: <FaUsers className="size-4" />,
        path: "/admin/trainer/manage",
      },
    ],
  },
];

function Sidebar() {
  const location = useLocation();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Page Content */}
      <div className="drawer-content">
        <TopHeader />
        <Outlet />
      </div>

      {/* Sidebar */}
      <div className="drawer-side is-drawer-close:overflow-visible">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>

        <div className="flex min-h-full flex-col bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64 border-r border-gray-300">

          {/* ---------------- LOGO ---------------- */}
          <div className="p-4 flex justify-center w-full">
            <img src="/logo.png" alt="Logo" className="w-10 h-10" />
          </div>

          {/* ---------------- MENU ---------------- */}
      <ul className="menu w-full grow px-2">

  {AdminMenuItems.map((item, i) => {
    const isActiveParent =
      item.children &&
      item.children.some((sub) => location.pathname === sub.path);

    const parentClass = isActiveParent
      ? "bg-balck text-white font-medium"
      : "text-black";

    return (
      <li key={i}>

        {/* ---- Parent WITHOUT children ---- */}
        {!item.children && (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 is-drawer-close:tooltip is-drawer-close:tooltip-right 
               ${isActive ? "bg-black text-white font-medium" : "text-black"}`
            }
            data-tip={item.name}
          >
            {item.icon}
            <span className="is-drawer-close:hidden">{item.name}</span>
          </NavLink>
        )}

        {/* ---- Parent WITH children ---- */}
        {item.children && (
          <details open={isActiveParent}>
            <summary
              className={`flex items-center gap-3 cursor-pointer is-drawer-close:tooltip is-drawer-close:tooltip-right ${parentClass}`}
              data-tip={item.name}
            >
              {item.icon}
              <span className="is-drawer-close:hidden">{item.name}</span>
            </summary>

            <ul className="ml-4">
              {item.children.map((sub, j) => (
                <li key={j}>
                  <NavLink
                    to={sub.path}
                    className={({ isActive }) =>
                      `flex items-center gap-3 is-drawer-close:tooltip is-drawer-close:tooltip-right
                       ${isActive ? "bg-white text-black font-medium" : "text-black"}`
                    }
                    data-tip={sub.name}
                  >
                    {sub.icon}
                    <span className="is-drawer-close:hidden">{sub.name}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </details>
        )}

      </li>
    );
  })}
</ul>



        </div>
      </div>
    </div>
  );
}

export default Sidebar;
