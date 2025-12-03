import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { FaHome, FaPaw, FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 p-4">
      <div className="text-center max-w-2xl">
        {/* Animated Paw Icon */}
        <FaPaw className="text-9xl text-error mx-auto mb-8 animate-bounce" />
        
        {/* 404 Text */}
        <h1 className="text-9xl font-bold text-primary mb-4 animate-pulse">404</h1>
        
        {/* Error Message */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <FaExclamationTriangle className="text-4xl text-warning" />
          <h2 className="text-4xl font-bold text-gray-800">
            Oops! Page Not Found
          </h2>
          <FaExclamationTriangle className="text-4xl text-warning" />
        </div>
        
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
          The page you're looking for seems to have wandered off like a curious pet in the snow. 
          Let's get you back to safety! 🐾❄️
        </p>
        
        {/* Action Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-8">
          <Link to="/" className="btn btn-primary btn-lg gap-2">
            <FaHome /> Go Home
          </Link>
          <Link to="/services" className="btn btn-outline btn-primary btn-lg">
            View Services
          </Link>
          <Link to="/login" className="btn btn-outline btn-lg">
            Login
          </Link>
        </div>
        
        {/* Decorative Elements */}
        <div className="mt-12 p-6 bg-base-100 rounded-lg shadow-lg">
          <p className="text-sm text-gray-500 mb-2">
            ❄️ Error Code: 404 | Lost in the Winter Storm ❄️
          </p>
          <p className="text-xs text-gray-400">
            If you believe this is a mistake, please contact support@warmpaws.com
          </p>
          {error && (
            <p className="text-xs text-gray-300 mt-2">
              <i>{error.statusText || error.message}</i>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;