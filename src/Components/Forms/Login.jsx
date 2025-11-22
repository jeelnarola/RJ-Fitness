import { useEffect, useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Store/Authslice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setUsername] = useState("");   // dummyjson uses username
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user ,loading, error } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(loginUser({ email, password }));
  };
  
  useEffect(() => {
    if (user) {
      console.log("user.role :- ",user.role);
      console.log("user.user.role :- ",user.user.role);
      if (user.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/member");
      }
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-900 to-gray-800 p-4">
      <div className="w-full max-w-4xl bg-base-100 rounded-2xl shadow-2xl grid md:grid-cols-2 overflow-hidden">

        {/* LEFT SIDE */}
        <div className="hidden md:flex flex-col justify-center items-center bg-gradient-to-b from-indigo-600 to-purple-700 p-10 text-white">
          <h1 className="text-4xl font-extrabold mb-3 text-center">
            RJ Fitness Gym
          </h1>

          <p className="text-center text-gray-200 italic text-lg">
            “Push harder than yesterday if you want a stronger tomorrow.”
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="p-8 md:p-12 bg-white">
          <h2 className="text-3xl font-bold text-center mb-6 text-indigo-700">
            Member Login
          </h2>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>

            {/* USERNAME */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Username</span>
              </label>
              <input
                type="text"
                placeholder="kminchelle"
                value={email}
                onChange={(e) => setUsername(e.target.value)}
                className="input input-bordered w-full"
              />
            </div>

            {/* PASSWORD WITH EYE ICON */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input input-bordered w-full pr-12"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
                >
                  {showPassword ? <HiEyeOff size={22} /> : <HiEye size={22} />}
                </button>
              </div>
            </div>

            {/* ERROR MESSAGE */}
            {error && (
              <p className="text-red-500 text-center font-medium">
                {error}
              </p>
            )}

            {/* LOGIN BUTTON */}
            <button
              className="btn btn-primary w-full mt-4"
              onClick={handleLogin}
              disabled={loading}
            >
              {loading ? "Logging in..." : "Login"}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
