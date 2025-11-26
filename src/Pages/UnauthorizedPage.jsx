import React from "react";
import { useNavigate } from "react-router-dom";
import { MdBlock, MdLockOutline } from "react-icons/md";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Unauthorized() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center p-4">

      {/* Icon Section */}
      <div className="mb-4 flex gap-2 text-red-600">
        <MdLockOutline className="size-10" />
        <MdBlock className="size-10" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-bold text-red-600 mb-2 flex items-center gap-2">
        <FaExclamationTriangle className="size-6" />
        Unauthorized Access ❌
      </h2>

      {/* Message */}
      <p className="text-gray-700 mb-5 max-w-sm">
        You are not allowed to view this page. Your token might be expired or invalid.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/login")}
        className="px-5 py-2 bg-black text-white rounded-xl hover:scale-105 transition"
      >
        Go to Login
      </button>

    </div>
  );
}
