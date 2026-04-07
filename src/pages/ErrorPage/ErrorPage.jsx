import React from "react";
import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-900 px-6">
      <div className="text-center max-w-md">

        <h1 className="text-7xl font-extrabold text-red-500">
          ERROR 404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 mt-3">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-xl font-semibold transition duration-300 shadow-lg"
          >
            Go Back Home
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ErrorPage;