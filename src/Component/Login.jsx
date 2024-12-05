import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const {userLogin,setUser} = useContext(AuthContext);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const loginUser = {email,password}
    userLogin(email,password)
    .then(result=>{
        const user = result.user;
        setUser(user);
    })
    .catch(error=>{
        const errorMessage = error.message;
        alert(errorMessage)
    })
   
  };

//   const handleForgetPassword = () => {
//     // Handle forget password logic here
//     alert("Redirecting to forget password page...");
//   };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Login to Your Account
        </h2>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">
              Email Address
            </label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-gray-700 mb-1">
              Password
            </label>
            <input
            name="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          {/* Forget Password Link */}
          <div className="text-right">
            <button
              type="button"
              className="text-sm text-primary hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition"
            >
              Login
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-between my-4">
          <div className="border-t w-full"></div>
          <span className="mx-2 text-gray-500">or</span>
          <div className="border-t w-full"></div>
        </div>

        {/* Register Link */}
        <div className="text-center">
          <span className="text-gray-700">Don't have an account? </span>
          <Link
            to="/auth/register"
            className="text-primary font-semibold hover:underline"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
