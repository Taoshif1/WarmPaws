import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import Services from '../pages/Services';
import Profile from '../pages/Profile';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import PrivateRoute from '../providers/PrivateRoute';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ServiceDetails from '../pages/ServiceDetails'; 
import ForgotPassword from '../pages/ForgotPassword'; 
import AllPets from '../pages/AllPets';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        // Protected route for Service Details 
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetails />
          </PrivateRoute>
        ),
        loader: () => fetch('/services.json'),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/all-pets",
        element: <AllPets />,
      },
    ],
  },
]);

export default router;