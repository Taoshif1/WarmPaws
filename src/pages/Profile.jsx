import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import { FaUser, FaEnvelope, FaEdit, FaSave, FaTimes, FaCamera } from 'react-icons/fa';
import AOS from 'aos';

const Profile = () => {
  const { user, profileUpdate } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photo.value;

    profileUpdate(name, photoURL)
      .then(() => {
        toast.success('Profile updated successfully! Refreshing...');
        setIsEditing(false);
        // Force reload to show updated profile
        setTimeout(() => window.location.reload(), 1500);
      })
      .catch((error) => {
        toast.error('Failed to update profile!');
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12" data-aos="fade-down">
          My Profile
        </h1>

        <div className="card bg-base-100 shadow-2xl" data-aos="zoom-in">
          <div className="card-body p-8">
            {!isEditing ? (
              // View Mode
              <div className="text-center">
                {/* Avatar */}
                <div className="avatar mb-8">
                  <div className="w-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                    <img
                      src={user?.photoURL || 'https://i.ibb.co/kXvJjrW/default-avatar.png'}
                      alt={user?.displayName}
                      onError={(e) => {
                        e.target.src = 'https://i.ibb.co/kXvJjrW/default-avatar.png';
                      }}
                    />
                  </div>
                </div>

                {/* User Info */}
                <h2 className="text-4xl font-bold mb-2">{user?.displayName || 'User'}</h2>
                <p className="text-gray-600 text-xl mb-8 flex items-center justify-center gap-2">
                  <FaEnvelope /> {user?.email}
                </p>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="stat bg-base-200 rounded-lg shadow">
                    <div className="stat-title">Account Status</div>
                    <div className="stat-value text-success text-2xl">Active</div>
                    <div className="stat-desc">Verified Account</div>
                  </div>
                  <div className="stat bg-base-200 rounded-lg shadow">
                    <div className="stat-title">Member Since</div>
                    <div className="stat-value text-primary text-2xl">2025</div>
                    <div className="stat-desc">WarmPaws Member</div>
                  </div>
                  <div className="stat bg-base-200 rounded-lg shadow">
                    <div className="stat-title">Bookings</div>
                    <div className="stat-value text-accent text-2xl">0</div>
                    <div className="stat-desc">Total Services</div>
                  </div>
                </div>

                {/* Update Button */}
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn btn-primary btn-lg gap-2"
                >
                  <FaEdit /> Update Profile
                </button>
              </div>
            ) : (
              // Edit Mode
              <div>
                <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-2">
                  <FaEdit /> Update Your Profile
                </h2>
                <form onSubmit={handleUpdateProfile}>
                  {/* Current Photo Preview */}
                  <div className="form-control mb-6">
                    <label className="label">
                      <span className="label-text font-semibold text-lg">Current Photo</span>
                    </label>
                    <div className="flex justify-center mb-4">
                      <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                          <img
                            src={user?.photoURL || 'https://i.ibb.co/kXvJjrW/default-avatar.png'}
                            alt="Current"
                            onError={(e) => {
                              e.target.src = 'https://i.ibb.co/kXvJjrW/default-avatar.png';
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Name Input */}
                  <div className="form-control mb-6">
                    <label className="label">
                      <span className="label-text font-semibold text-lg">
                        <FaUser className="inline mr-2" /> Full Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.displayName}
                      placeholder="Enter your name"
                      className="input input-bordered input-lg"
                      required
                    />
                  </div>

                  {/* Photo URL Input */}
                  <div className="form-control mb-6">
                    <label className="label">
                      <span className="label-text font-semibold text-lg">
                        <FaCamera className="inline mr-2" /> Photo URL
                      </span>
                    </label>
                    <input
                      type="url"
                      name="photo"
                      defaultValue={user?.photoURL}
                      placeholder="https://example.com/your-photo.jpg"
                      className="input input-bordered input-lg"
                      required
                    />
                    <label className="label">
                      <span className="label-text-alt">Paste a direct link to your profile image</span>
                    </label>
                  </div>

                  {/* Email (Disabled) */}
                  <div className="form-control mb-6">
                    <label className="label">
                      <span className="label-text font-semibold text-lg">
                        <FaEnvelope className="inline mr-2" /> Email
                      </span>
                    </label>
                    <input
                      type="email"
                      defaultValue={user?.email}
                      className="input input-bordered input-lg bg-base-200"
                      disabled
                    />
                    <label className="label">
                      <span className="label-text-alt">Email cannot be changed</span>
                    </label>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <button type="submit" className="btn btn-primary btn-lg flex-1 gap-2">
                      <FaSave /> Save Changes
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsEditing(false)}
                      className="btn btn-outline btn-lg flex-1 gap-2">
                      <FaTimes /> Cancel
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;