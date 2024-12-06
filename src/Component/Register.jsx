import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
    const {createNewUser,setUser} = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const newUser = {name,email,photo,password}
        console.log(newUser)

        createNewUser(email,password)
        .then(result=>{
            const user = result.user;
            setUser(user)
        })
        .catch(error=>{
            const errorCode= error.code;
            const errorMessage = error.message;
            console.log(errorCode,errorMessage)
        })
    }



  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center mb-10 mt-10">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-primary mb-6">
          Create an Account
        </h2>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1">
              Name
            </label>
            <input
              name="name"
              type="text"
              id="name"             
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>

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

          {/* Photo URL Field */}
          <div>
            <label htmlFor="photoURL" className="block text-gray-700 mb-1">
              Profile Photo URL
            </label>
            <input
              name="photo"
              type="text"
              id="photoURL"
              placeholder="Enter your profile photo URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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

          {/* Register Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition"
            >
              Register
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-between my-4">
          <div className="border-t w-full"></div>
          <span className="mx-2 text-gray-500">or</span>
          <div className="border-t w-full"></div>
        </div>

        {/* Login Link */}
        <div className="text-center">
          <span className="text-gray-700">Already have an account? </span>
          <Link
            to="/auth/login"
            className="text-primary font-semibold hover:underline"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;