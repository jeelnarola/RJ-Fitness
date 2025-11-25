import { NavLink, Outlet, useLocation } from "react-router-dom";
import TopHeader from "./TopHeader";
import { MdDashboard } from "react-icons/md";
import {
  FaUserTie,
  FaUsers,
  FaUserPlus,
  FaPlus,
  FaTasks,
  FaClock,
  FaPercent,
  FaDumbbell,
  FaCalendarAlt,
  FaUtensils,
  FaClipboardCheck,
  FaBox,
  FaShoppingCart,
  FaBullhorn,
  FaChartBar,
} from "react-icons/fa";

const AdminMenuItems = [
  {
    name: "Dashboard",
    icon: <MdDashboard className="size-4" />,
    path: "/admin/dashboard",
  },

  {
    name: "Trainer",
    icon: <FaUserTie className="size-4" />,
    path: "/admin/trainer" ,
    children: [
      { name: "Add Trainer", icon: <FaPlus className="size-3" />, path: "/admin/trainer/add" },
      { name: "Manage Trainer", icon: <FaTasks className="size-3" />, path: "/admin/trainer/manage" },
    ],
  },

  {
    name: "Members",
    icon: <FaUsers className="size-4" />,
     path: "/admin/members" ,
    children: [
      { name: "Add Member", icon: <FaUserPlus className="size-3" />, path: "/admin/member/add" },
      { name: "Manage Member", icon: <FaTasks className="size-3" />, path: "/admin/member/manage" },
      { name: "Pending Members", icon: <FaClock className="size-3" />, path: "/admin/member/pending" },
      { name: "Margin Members", icon: <FaPercent className="size-3" />, path: "/admin/member/margin" },
    ],
  },

  {
    name: "Workout",
    icon: <FaDumbbell className="size-4" />,
    children: [
      { name: "Add Workout", icon: <FaPlus className="size-3" />, path: "/admin/workout/add" },
      { name: "Manage Workout", icon: <FaTasks className="size-3" />, path: "/admin/workout/manage" },
      { name: "Schedule Workout", icon: <FaCalendarAlt className="size-3" />, path: "/admin/workout/schedule" },
    ],
  },

  {
    name: "Diet Plan",
    icon: <FaUtensils className="size-4" />,
    path: "/admin/diet",
  },

  {
    name: "Attendance",
    icon: <FaClipboardCheck className="size-4" />,
    path: "/admin/attendance",
  },

  {
    name: "Product",
    icon: <FaBox className="size-4" />,
    children: [
      { name: "Add Product", icon: <FaPlus className="size-3" />, path: "/admin/product/add" },
      { name: "Manage Product", icon: <FaTasks className="size-3" />, path: "/admin/product/manage" },
      { name: "Orders", icon: <FaShoppingCart className="size-3" />, path: "/admin/product/orders" },
    ],
  },

  {
    name: "Notice",
    icon: <FaBullhorn className="size-4" />,
    path: "/admin/notice",
  },

  {
    name: "Report",
    icon: <FaChartBar className="size-4" />,
    path: "/admin/report",
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
        <div className="p-6">

          <Outlet />
        </div>
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
          <ul className="menu w-full grow px-3">

            {AdminMenuItems.map((item, i) => {
              const isActiveParent =
                item.children &&
                item.children.some((sub) => location.pathname === sub.path);

              const parentClass = isActiveParent
                ? "bg-balck text-white font-medium"
                : "text-black";

              return (
                <li key={i} className="rounded-lg mb-2 ">

                  {/* ---- Parent WITHOUT children ---- */}
                  {!item.children && (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-3 is-drawer-close:tooltip is-drawer-close:tooltip-right 
               ${isActive ? "bg-black text-white font-medium" : "text-black"}
               `
                      }
                      data-tip={item.name}
                    >
                      {item.icon}
                      <span className="is-drawer-close:hidden">{item.name}</span>
                    </NavLink>
                  )}

                  {/* ---- Parent WITH children ---- */}
                  {item.children && (
                    <details open={isActiveParent} className="group">
                      <summary
                        className={`flex items-center gap-3 cursor-pointer ${parentClass}`}
                        onClick={(e) => {
                          const details = e.currentTarget.parentElement;
                          details.open = !details.open; // toggle dropdown
                        }}
                      >
                        <NavLink
                          to={item.path}
                          className="flex items-center gap-3 w-full"
                        >
                          {item.icon}
                          <span className="is-drawer-close:hidden">{item.name}</span>
                        </NavLink>
                      </summary>

                      <ul className="ml-1">
                        {item.children.map((sub, j) => (
                          <li key={j}>
                            <NavLink
                              to={sub.path}
                              className={({ isActive }) =>
                                `flex items-center gap-3 
                                ${isActive ? "bg-white text-black font-medium" : "text-black"}`
                              }
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
//  <li key={i} className="rounded-lg mb-2">

//                   {/* PARENT WITHOUT CHILDREN */}
//                   {!item.children && (
//                     <NavLink
//                       to={item.path}
//                       className={({ isActive }) =>
//                         `flex items-center gap-3 
//                         ${isActive ? "bg-black text-white font-medium" : "text-black"}`
//                       }
//                     >
//                       {item.icon}
//                       <span className="is-drawer-close:hidden">{item.name}</span>
//                     </NavLink>
//                   )}

//                   {/* PARENT WITH CHILDREN */}
//                   {item.children && (
//                     <details open={isActiveParent} className="group">
//                       <summary
//                         className={`flex items-center gap-3 cursor-pointer ${parentClass}`}
//                         onClick={(e) => {
//                           const details = e.currentTarget.parentElement;
//                           details.open = !details.open; // toggle dropdown
//                         }}
//                       >
//                         <NavLink
//                           to={item.path}
//                           className="flex items-center gap-3 w-full"
//                         >
//                           {item.icon}
//                           <span className="is-drawer-close:hidden">{item.name}</span>
//                         </NavLink>
//                       </summary>

//                       <ul className="ml-4">
//                         {item.children.map((sub, j) => (
//                           <li key={j}>
//                             <NavLink
//                               to={sub.path}
//                               className={({ isActive }) =>
//                                 `flex items-center gap-3 
//                                 ${isActive ? "bg-white text-black font-medium" : "text-black"}`
//                               }
//                             >
//                               {sub.icon}
//                               <span className="is-drawer-close:hidden">{sub.name}</span>
//                             </NavLink>
//                           </li>
//                         ))}
//                       </ul>
//                     </details>
//                   )}

//                 </li>