import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import toast from 'react-hot-toast';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
  FaPaperPlane,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Thank you for contacting us! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      details: ['151/C, Pet Care Street', 'Gulshan, Dhaka - 1212', 'Bangladesh'],
      color: 'text-[#FF6B35]',
    },
    {
      icon: FaPhoneAlt,
      title: 'Call Us',
      details: ['+880 1712-345678', '+880 1812-345678', '24/7 Emergency: +880 1912-345678'],
      color: 'text-[#4A90E2]',
    },
    {
      icon: FaEnvelope,
      title: 'Email Us',
      details: ['support@warmpaws.com', 'emergency@warmpaws.com', 'info@warmpaws.com'],
      color: 'text-[#52C41A]',
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 8:00 PM', 'Sunday: 10:00 AM - 6:00 PM', 'Emergency: 24/7'],
      color: 'text-[#FFB84D]',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#4A90E2] to-[#6BA8E8] text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Have questions? We're here to help! Reach out to us anytime.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all"
            >
              <info.icon className={`text-5xl ${info.color} mx-auto mb-4`} />
              <h3 className="text-xl font-bold mb-4 text-gray-800">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600 mb-2">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div data-aos="fade-right">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-3">
                  <FaPaperPlane className="text-[#FF6B35]" />
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Your Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="input input-bordered w-full focus:border-[#FF6B35] focus:outline-none"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Email Address</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="input input-bordered w-full focus:border-[#FF6B35] focus:outline-none"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Phone Number</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+880 1712-345678"
                      className="input input-bordered w-full focus:border-[#FF6B35] focus:outline-none"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Subject</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="select select-bordered w-full focus:border-[#FF6B35] focus:outline-none"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="adoption">Pet Adoption</option>
                      <option value="service">Service Booking</option>
                      <option value="donation">Donation</option>
                      <option value="emergency">Emergency Care</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-semibold text-gray-700">Message</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help you..."
                      className="textarea textarea-bordered h-32 focus:border-[#FF6B35] focus:outline-none"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn bg-[#FF6B35] hover:bg-[#E55A2B] text-white border-none w-full btn-lg normal-case"
                  >
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Map & Additional Info */}
            <div data-aos="fade-left" className="space-y-8">
              {/* Google Map */}
              <div className="rounded-3xl overflow-hidden shadow-2xl h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.8477419352487!2d90.40744931445396!3d23.780968893563168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7bda8f64e47%3A0x1f768e6c6f9e7f9e!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1635000000000!5m2!1sen!2sbd"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="WarmPaws Location"
                ></iframe>
              </div>

              {/* Social Media Links */}
              <div className="bg-gradient-to-br from-[#FF6B35] to-[#FFB84D] rounded-3xl shadow-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
                <p className="mb-6 opacity-90">
                  Follow us on social media for updates, tips, and adorable pet content!
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle bg-white text-[#FF6B35] hover:bg-gray-100 border-none text-2xl"
                  >
                    <FaFacebookSquare />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle bg-white text-[#FF6B35] hover:bg-gray-100 border-none text-2xl"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle bg-white text-[#FF6B35] hover:bg-gray-100 border-none text-2xl"
                  >
                    <FaTwitterSquare />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-circle bg-white text-[#FF6B35] hover:bg-gray-100 border-none text-2xl"
                  >
                    <FaInstagramSquare />
                  </a>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-red-600">Emergency?</h3>
                <p className="text-gray-700 mb-4">
                  For urgent pet care needs, call our 24/7 emergency hotline immediately.
                </p>
                <a
                  href="tel:+8801912345678"
                  className="btn bg-red-600 hover:bg-red-700 text-white border-none btn-lg w-full normal-case"
                >
                  <FaPhoneAlt className="mr-2" />
                  Call Emergency: +880 1912-345678
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container-custom py-20">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Quick answers to common questions</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4" data-aos="fade-up">
          <div className="collapse collapse-plus bg-white shadow-lg rounded-xl">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-xl font-bold">What are your operating hours?</div>
            <div className="collapse-content">
              <p className="text-gray-600">
                We are open Monday to Saturday from 9:00 AM to 8:00 PM, and Sunday from 10:00 AM to
                6:00 PM. Emergency services are available 24/7.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-white shadow-lg rounded-xl">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-bold">Do you offer home visit services?</div>
            <div className="collapse-content">
              <p className="text-gray-600">
                Yes! We offer home visit services for grooming, health checkups, and emergency care
                within Dhaka city. Contact us to schedule an appointment.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-white shadow-lg rounded-xl">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-bold">How can I adopt a pet?</div>
            <div className="collapse-content">
              <p className="text-gray-600">
                Visit our shelter or browse available pets on our website. Fill out an adoption
                application, and our team will guide you through the process.
              </p>
            </div>
          </div>

          <div className="collapse collapse-plus bg-white shadow-lg rounded-xl">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-xl font-bold">Do you accept donations?</div>
            <div className="collapse-content">
              <p className="text-gray-600">
                Absolutely! We accept monetary donations, pet food, supplies, and volunteer time.
                Visit our Donation Campaigns page to learn more.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;