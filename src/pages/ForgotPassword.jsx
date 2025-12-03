import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import { sendPasswordResetEmail } from 'firebase/auth';
import toast from 'react-hot-toast';
import { FaEnvelope, FaArrowLeft } from 'react-icons/fa';

const ForgotPassword = () => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get email from location state (passed from Login page)
  const [email, setEmail] = useState(location.state?.email || '');

  const handleResetPassword = (e) => {
    e.preventDefault();
    const form = e.target;
    const emailInput = form.email.value;

    sendPasswordResetEmail(auth, emailInput)
      .then(() => {
        toast.success('Password reset email sent! Check your inbox.');
        
        // Open Gmail in new tab
        window.open('https://mail.google.com', '_blank');
        
        // Redirect to login after 2 seconds
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
        if (error.code === 'auth/user-not-found') {
          toast.error('No user found with this email!');
        } else {
          toast.error('Failed to send reset email. Please try again.');
        }
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-blue-100 py-12 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl" data-aos="zoom-in">
        <div className="card-body">
          {/* Header */}
          <div className="text-center mb-6">
            <FaEnvelope className="text-6xl text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-2">Reset Password</h2>
            <p className="text-gray-600">
              Enter your email to receive a password reset link
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleResetPassword}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold">Email Address</span>
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="input input-bordered input-lg"
                required
              />
            </div>

            {/* Reset Button */}
            <div className="form-control mt-8">
              <button className="btn btn-primary btn-lg w-full gap-2">
                <FaEnvelope /> Send Reset Link
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider my-6"></div>

          {/* Back to Login */}
          <Link 
            to="/login" 
            className="btn btn-outline w-full gap-2"
          >
            <FaArrowLeft /> Back to Login
          </Link>

          {/* Info Text */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Remember your password?{' '}
            <Link to="/login" className="link link-primary font-semibold">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;