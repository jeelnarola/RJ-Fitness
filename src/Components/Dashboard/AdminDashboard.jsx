import React from 'react'

import {
  FaUsers,
  FaUserCheck,
  FaUserTimes,
  FaDumbbell,
  FaMoneyBillWave,
  FaClock,
  FaExclamationTriangle,
  FaCalendarDay,
  FaCalendarWeek,
  FaCalendarAlt,
  FaCalendar,
  FaArrowDown,
  FaUserPlus,
  FaRunning,
  FaWallet,
  FaTimesCircle,
  FaBoxOpen,
  FaHourglassHalf,
  FaCheckCircle,
} from "react-icons/fa";
import AnalyseCard from '../Cards/AnalyseCard';
const stats = [
  { name: "Total Members", value: "1,250", icon: <FaUsers className="text-4xl text-indigo-600" /> },
  { name: "Active Members", value: "980", icon: <FaUserCheck className="text-4xl text-green-600" /> },
  { name: "Deactive Members", value: "270", icon: <FaUserTimes className="text-4xl text-red-600" /> },

  { name: "Today's Income", value: "₹12,000", icon: <FaCalendarDay className="text-4xl text-emerald-600" /> },
  { name: "Weekly Income", value: "₹55,000", icon: <FaCalendarWeek className="text-4xl text-emerald-600" /> },
  { name: "Monthly Income", value: "₹2,30,000", icon: <FaCalendarAlt className="text-4xl text-emerald-600" /> },
  { name: "Yearly Income", value: "₹24,00,000", icon: <FaCalendar className="text-4xl text-emerald-600" /> },

  { name: "Today's Expense", value: "₹4,500", icon: <FaArrowDown className="text-4xl text-orange-600" /> },
  { name: "Weekly Expense", value: "₹19,500", icon: <FaArrowDown className="text-4xl text-orange-600" /> },
  { name: "Monthly Expense", value: "₹80,000", icon: <FaArrowDown className="text-4xl text-orange-600" /> },
  { name: "Yearly Expense", value: "₹8,50,000", icon: <FaArrowDown className="text-4xl text-orange-600" /> },

  { name: "Today Joined", value: "12", icon: <FaUserPlus className="text-4xl text-blue-600" /> },
  { name: "Weekly Joined", value: "48", icon: <FaCalendarWeek className="text-4xl text-blue-600" /> },
  { name: "Monthly Joined", value: "180", icon: <FaCalendarAlt className="text-4xl text-blue-600" /> },

  { name: "Upcoming Expiry", value: "15", icon: <FaClock className="text-4xl text-yellow-600" /> },
  { name: "Expired Members", value: "8", icon: <FaExclamationTriangle className="text-4xl text-red-600" /> },

  { name: "Total PT", value: "12", icon: <FaRunning className="text-4xl text-pink-600" /> },

  { name: "Pending Payments", value: "14", icon: <FaWallet className="text-4xl text-amber-600" /> },
  { name: "Failed Transactions", value: "3", icon: <FaTimesCircle className="text-4xl text-red-600" /> },

  { name: "Total Products", value: "320", icon: <FaBoxOpen className="text-4xl text-indigo-600" /> },
  { name: "Pending Orders", value: "45", icon: <FaHourglassHalf className="text-4xl text-orange-500" /> },
  { name: "Completed Orders", value: "1,105", icon: <FaCheckCircle className="text-4xl text-green-600" /> },

];




function AdminDashboard() {
  return (
    <>
      <div className='contain mx-auto'>
        <div className='flex justify-between'>
          <p>Good Moring, Jeel Narola.</p>
          <p className="text-gray-600">
            {new Date().toLocaleDateString("en-IN", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <AnalyseCard data={stats} />
      </div>
    </>
  )
}

export default AdminDashboard