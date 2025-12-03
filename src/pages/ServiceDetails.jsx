import React, { useContext, useEffect } from 'react';
import { useLoaderData, useParams, Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import {
  FaStar,
  FaDollarSign,
  FaMapMarkerAlt,
  FaEnvelope,
  FaCheckCircle,
  FaCalendarAlt,
  FaUserMd,
  FaClock,
  FaArrowLeft,
} from 'react-icons/fa';
import AOS from 'aos';

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const services = useLoaderData();
  const service = services.find((s) => s.serviceId === parseInt(id));

  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  const handleBookService = (e) => {
    e.preventDefault();
    
    if (!user) {
      toast.error('Please login to book this service');
      return;
    }

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const date = form.date.value;

    toast.success(
      `🎉 Service booked successfully! We'll contact you at ${email} soon to confirm your appointment on ${date}.`
    );
    form.reset();
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center" data-aos="fade-up">
          <div className="text-6xl mb-4">🐾</div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Service Not Found</h2>
          <p className="text-gray-600 mb-6">The service you're looking for doesn't exist.</p>
          <Link to="/services" className="btn bg-[#FF6B35] hover:bg-[#E55A2B] text-white border-none">
            <FaArrowLeft className="mr-2" />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const {
    serviceName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = service;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container-custom">
        {/* Back Button */}
        <Link
          to="/services"
          className="btn btn-ghost mb-6 hover:text-[#FF6B35]"
          data-aos="fade-right"
        >
          <FaArrowLeft className="mr-2" />
          Back to All Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Image & Provider Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Service Image */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden" data-aos="fade-up">
              <img
                src={image}
                alt={serviceName}
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Service Details */}
            <div className="bg-white rounded-3xl shadow-xl p-8" data-aos="fade-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="badge badge-lg bg-[#FFB84D] text-white border-none px-4 py-3">
                  {category}
                </div>
                <div className="flex items-center gap-2 text-yellow-500">
                  <FaStar className="text-2xl" />
                  <span className="font-bold text-2xl text-gray-800">{rating}</span>
                  <span className="text-gray-600">/5.0</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">{serviceName}</h1>

              {/* Price & Availability */}
              <div className="flex flex-wrap items-center gap-6 mb-8 pb-6 border-b-2 border-gray-100">
                <div className="flex items-center gap-2">
                  <FaDollarSign className="text-3xl text-[#FF6B35]" />
                  <span className="text-4xl font-bold text-[#FF6B35]">{price}</span>
                  <span className="text-gray-600">/ session</span>
                </div>
                <div
                  className={`badge badge-lg ${
                    slotsAvailable > 5 ? 'badge-success' : 'badge-warning'
                  } text-white px-4 py-3`}
                >
                  <FaClock className="mr-2" />
                  {slotsAvailable} Slots Available
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-gray-800">
                  <FaCheckCircle className="text-[#52C41A]" />
                  Service Description
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
              </div>

              {/* Features/Benefits */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800">What's Included:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Professional Care',
                    'Quality Products',
                    'Follow-up Support',
                    'Safety Guaranteed',
                    'Flexible Scheduling',
                    'Expert Advice',
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <FaCheckCircle className="text-[#52C41A] text-xl" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Provider Information */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl shadow-xl p-8" data-aos="fade-up">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                <FaUserMd className="text-[#4A90E2]" />
                Provider Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 mb-2">Provider Name</p>
                  <p className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-[#FF6B35]" />
                    {providerName}
                  </p>
                </div>
                <div>
                  <p className="text-gray-600 mb-2">Contact Email</p>
                  <p className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                    <FaEnvelope className="text-[#FF6B35]" />
                    {providerEmail}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form (Sticky) */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div
                className="bg-white rounded-3xl shadow-2xl p-8 border-t-4 border-[#FF6B35]"
                data-aos="fade-left"
              >
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2 text-gray-800">
                  <FaCheckCircle className="text-[#52C41A]" />
                  Book This Service
                </h2>

                {!user && (
                  <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 mb-6">
                    <p className="text-yellow-800 font-semibold mb-2">
                      ⚠️ Login Required
                    </p>
                    <p className="text-yellow-700 text-sm mb-3">
                      Please login to book this service
                    </p>
                    <Link
                      to="/login"
                      className="btn btn-sm bg-[#FFB84D] hover:bg-[#FF6B35] text-white border-none w-full"
                    >
                      Login Now
                    </Link>
                  </div>
                )}

                <form onSubmit={handleBookService}>
                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Your Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      defaultValue={user?.displayName || ''}
                      placeholder="Enter your name"
                      className="input input-bordered input-lg focus:border-[#FF6B35] focus:outline-none"
                      required
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Your Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      defaultValue={user?.email || ''}
                      placeholder="Enter your email"
                      className="input input-bordered input-lg focus:border-[#FF6B35] focus:outline-none"
                      required
                    />
                  </div>

                  <div className="form-control mb-4">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700 flex items-center gap-2">
                        <FaCalendarAlt className="text-[#FF6B35]" />
                        Preferred Date
                      </span>
                    </label>
                    <input
                      type="date"
                      name="date"
                      className="input input-bordered input-lg focus:border-[#FF6B35] focus:outline-none"
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>

                  <div className="form-control mb-6">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">
                        Additional Notes (Optional)
                      </span>
                    </label>
                    <textarea
                      name="notes"
                      className="textarea textarea-bordered h-24 focus:border-[#FF6B35] focus:outline-none"
                      placeholder="Any special requests or questions?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn bg-gradient-to-r from-[#FF6B35] to-[#FFB84D] text-white border-none w-full btn-lg normal-case text-lg hover:opacity-90"
                    disabled={!user}
                  >
                    <FaCheckCircle className="mr-2" />
                    {user ? `Book Now - $${price}` : 'Login to Book'}
                  </button>
                </form>

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t-2 border-gray-100">
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#52C41A]" />
                      <span>100% Safe & Secure</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#52C41A]" />
                      <span>Licensed Professionals</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaCheckCircle className="text-[#52C41A]" />
                      <span>Money-back Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-6 mt-6" data-aos="fade-up">
                <h3 className="font-bold text-red-600 mb-2 flex items-center gap-2">
                  <FaClock />
                  Need Urgent Care?
                </h3>
                <p className="text-sm text-gray-700 mb-3">
                  Call our 24/7 emergency hotline
                </p>
                <a
                  href="tel:+8801912345678"
                  className="btn bg-red-600 hover:bg-red-700 text-white border-none w-full normal-case"
                >
                  Emergency: +880 1912-345678
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;