import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import AllPets from '../pages/AllPets';
import Services from '../pages/Services';
import Profile from '../pages/Profile';
import ErrorPage from '../pages/ErrorPage';
import Home from '../pages/Home';
import PrivateRoute from '../providers/PrivateRoute';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ServiceDetails from '../pages/ServiceDetails';
import ForgotPassword from '../pages/ForgotPassword';
import About from '../pages/About';
import Contact from '../pages/Contact';
import DonationCampaigns from '../pages/DonationCampaigns';

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
        // All Services/Pets Page - Public (with sorting & filtering)
        path: "/services",
        element: <Services></Services> ,
      },
      {
        // Service Details Page - Public (as per requirement)
        path: "/service/:id",
        element: <ServiceDetails />,
        loader: () => fetch('/services.json'),
      },
      {
        // About Us Page - Public
        path: "/about",
        element: <About />,
      },
      {
        // Contact Page - Public
        path: "/contact",
        element: <Contact />,
      },
      {
        // Donation Campaigns Page - Public
        path: "/donation-campaigns",
        element: <DonationCampaigns />,
      },
      {
        // Profile Page - Private (Requires Login)
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        // Login Page
        path: "/login",
        element: <Login />,
      },
      {
        // Register Page
        path: "/register",
        element: <Register />,
      },
      {
        // Forgot Password Page
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
]);

export default router;