import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Determine where to redirect after login (Protected Route or Home)
    const from = location.state || '/';

    const handleLogin = (e) => {
        e.preventDefault();
        setLoginError('');
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(() => {
                toast.success('Login successful! Welcome back.');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error);
                // Display user-friendly error message
                setLoginError("Invalid email or password. Please try again.");
                toast.error('Login failed!');
            });
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(() => {
                toast.success('Signed in with Google successfully!');
                navigate(from, { replace: true });
            })
            .catch((error) => {
                console.error(error);
                toast.error('Google sign-in failed!');
            });
    };
    
    // For the challenge: Forget Password implementation
    const handleForgotPasswordClick = (e) => {
        e.preventDefault();
        const emailInput = e.currentTarget.form.elements.email.value;
        // Redirect to /forgot-password, passing the email state
        navigate('/forgot-password', { state: { email: emailInput } });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 p-4">
            <div className='w-full max-w-md bg-white p-8 rounded-xl shadow-2xl'>
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Login to WarmPaws</h2>
                
                <form onSubmit={handleLogin} className='space-y-4'>
                    
                    <label className="form-control w-full">
                        <span className="label-text mb-1">Email</span>
                        <input type="email" name="email" placeholder="you@example.com" className="input input-bordered w-full" required />
                    </label>

                    <label className="form-control w-full">
                        <span className="label-text mb-1">Password</span>
                        <div className='relative'>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                name="password" 
                                placeholder="******" 
                                className="input input-bordered w-full pr-10" 
                                required 
                            />
                            <span 
                                className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                        <div className="label">
                            <button onClick={handleForgotPasswordClick} className="label-text-alt link link-hover text-sm">
                                Forgot password?
                            </button>
                        </div>
                    </label>
                    
                    {loginError && (
                        <div className="text-error text-sm mt-2 text-center">
                            {loginError}
                        </div>
                    )}

                    <button type="submit" className="btn btn-primary w-full mt-6">Login</button>
                </form>

                <div className="divider text-gray-400 my-6">OR</div>
                <button onClick={handleGoogleLogin} className="btn btn-outline w-full flex items-center gap-2 mb-3">
                    <FaGoogle className='text-xl'/> Continue with Google
                </button>
                
                <p className="text-center text-sm mt-4">
                    Don't have an account? <Link to="/register" className="text-primary font-bold hover:underline">Register now</Link>
                </p>

            </div>
        </div>
    );
};

export default Login;