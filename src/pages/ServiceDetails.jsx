import React, { useContext, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import { FaStar, FaDollarSign, FaMapMarkerAlt, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import AOS from 'aos';

const ServiceDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const services = useLoaderData();
  const service = services.find((s) => s.serviceId === parseInt(id));

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleBookService = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    toast.success(`🎉 Service booked successfully! We'll contact you at ${email} soon.`);
    form.reset();
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
          <p className="text-gray-600">The service you're looking for doesn't exist.</p>
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
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image Section */}
        <div data-aos="fade-right">
          <img
            src={image}
            alt={serviceName}
            className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
          />
        </div>

        {/* Details Section */}
        <div data-aos="fade-left">
          <div className="badge badge-secondary badge-lg mb-4">{category}</div>
          <h1 className="text-4xl font-bold mb-4">{serviceName}</h1>

          {/* Stats */}
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2 text-yellow-500">
              <FaStar className="text-2xl" />
              <span className="font-bold text-2xl text-gray-800">{rating}</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <FaDollarSign className="text-2xl" />
              <span className="font-bold text-3xl">{price}</span>
            </div>
            <div className="badge badge-success badge-lg">
              {slotsAvailable} Slots Available
            </div>
          </div>

          {/* Provider Info */}
          <div className="bg-base-200 p-6 rounded-xl mb-6">
            <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" /> Provider Information
            </h3>
            <p className="flex items-center gap-2 mb-2">
              <span className="font-semibold">Provider:</span> {providerName}
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-primary" />
              <span>{providerEmail}</span>
            </p>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="font-bold text-2xl mb-3">Service Description</h3>
            <p className="text-gray-700 leading-relaxed text-lg">{description}</p>
          </div>

          <div className="divider"></div>

          {/* Booking Form */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-xl" data-aos="zoom-in">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <FaCheckCircle className="text-success" /> Book This Service
            </h2>
            <form onSubmit={handleBookService}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text font-semibold">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  defaultValue={user?.displayName || ''}
                  placeholder="Enter your name"
                  className="input input-bordered input-lg"
                  required
                />
              </div>

              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text font-semibold">Your Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={user?.email || ''}
                  placeholder="Enter your email"
                  className="input input-bordered input-lg"
                  required
                />
              </div>

              <button className="btn btn-primary btn-lg w-full">
                <FaCheckCircle /> Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;