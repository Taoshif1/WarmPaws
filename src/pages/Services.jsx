import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/services.json')
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading services:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-5xl font-bold mb-4">
          Our Winter Pet Care Services
        </h1>
        <p className="text-xl text-gray-600">
          Comprehensive care solutions to keep your pets warm, healthy, and happy this winter season
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.serviceId} service={service} />
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-xl" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
        <p className="text-gray-600 mb-6">
          Our pet care experts are here to help you find the perfect service for your furry friend.
        </p>
        <button className="btn btn-primary btn-lg">
          Contact Us Today
        </button>
      </div>
    </div>
  );
};

export default Services;