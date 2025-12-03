import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa'; // For the challenge

const Register = () => {
    const { createUser, profileUpdate, signInWithGoogle } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        setRegisterError(''); // Clear previous errors
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');

        // --- Password Validation (Required) ---
        if (password.length < 6) {
            setRegisterError('Password must be at least 6 characters long.');
            return;
        }
        if (!/[A-Z]/.test(password)) {
            setRegisterError('Password must contain at least one uppercase letter.');
            return;
        }
        if (!/[a-z]/.test(password)) {
            setRegisterError('Password must contain at least one lowercase letter.');
            return;
        }

        createUser(email, password)
            .then((result) => {
                // 1. Update Profile (Name & Photo URL)
                profileUpdate(name, photo)
                    .then(() => {
                        toast.success('Registration successful! Welcome to WarmPaws.');
                        navigate('/'); 
                    })
                    .catch((error) => {
                        // Profile update failed, but user created
                        console.error("Profile Update Error:", error);
                        toast.error("Account created, but profile update failed.");
                        navigate('/'); 
                    });
            })
            .catch((error) => {
                console.error(error);
                if (error.code === 'auth/email-already-in-use') {
                    setRegisterError('This email is already registered.');
                } else {
                    setRegisterError(error.message);
                }
                toast.error('Registration failed!');
            });
    };

    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(() => {
                toast.success('Signed in with Google successfully!');
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
                toast.error('Google sign-in failed!');
            });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 p-4">
            <div className='w-full max-w-md bg-white p-8 rounded-xl shadow-2xl'>
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Create an Account</h2>
                
                <form onSubmit={handleRegister} className='space-y-4'>
                    
                    <label className="form-control w-full">
                        <span className="label-text mb-1">Name</span>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full" required />
                    </label>

                    <label className="form-control w-full">
                        <span className="label-text mb-1">Email</span>
                        <input type="email" name="email" placeholder="you@example.com" className="input input-bordered w-full" required />
                    </label>
                    
                    <label className="form-control w-full">
                        <span className="label-text mb-1">Photo URL</span>
                        <input type="text" name="photo" placeholder="https://..." className="input input-bordered w-full" />
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
                    </label>
                    
                    {registerError && (
                        <div className="text-error text-sm mt-2 text-center">
                            {registerError}
                        </div>
                    )}

                    <button type="submit" className="btn btn-primary w-full mt-6">Register</button>
                </form>

                <div className="divider text-gray-400 my-6">OR</div>
                <button onClick={handleGoogleLogin} className="btn btn-outline w-full flex items-center gap-2 mb-3">
                    <FaGoogle className='text-xl'/> Continue with Google
                </button>
                
                <p className="text-center text-sm mt-4">
                    Already have an account? <Link to="/login" className="text-primary font-bold hover:underline">Login here</Link>
                </p>

            </div>
        </div>
    );
};

export default Register;