import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 flex flex-col items-center justify-center text-center text-white px-4">
      {/* Animated Illustration */}
      <div className="w-full max-w-lg h-60 mb-8">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Error Animation"
          className="w-full"
        />
      </div>

      {/* Error Message */}
      <h1 className="text-8xl font-extrabold tracking-tight">404</h1>
      <p className="text-2xl font-semibold mt-4">Oops! Page Not Found</p>
      <p className="text-lg mt-2">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>

      {/* Back to Home Button */}
      <Link
        to="/"
        className="mt-6 px-8 py-3 bg-white text-primary font-bold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
