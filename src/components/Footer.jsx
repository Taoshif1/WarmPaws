import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
  FaPhoneAlt,
  FaEnvelope,
  FaEnvelopeOpen,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#2C3E50] to-[#34495E] text-white mt-20 p-5">
      {/* Main Footer */}
      <div className="container-custom py-16  px-5 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="space-y-5">
            <Link
              to="/"
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <img
                src={logo}
                className="w-14 h-14 rounded-full object-cover ring-2 ring-[#FF6B35] ring-offset-2 ring-offset-[#2C3E50]"
                alt="WarmPaws Logo"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#FFB84D] bg-clip-text text-transparent">
                WarmPaws
              </span>
            </Link>

            <p className="text-gray-300 leading-relaxed">
              Warm care for every paw. Trusted by pet lovers since 2020.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="text-2xl hover:text-[#FF6B35] transition-colors"
              >
                <FaFacebookSquare />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-[#FF6B35] transition-colors"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-[#FF6B35] transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                className="text-2xl hover:text-[#FF6B35] transition-colors"
              >
                <FaTwitterSquare />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-5 relative">
              Quick Links
              <span className="block w-12 h-1 bg-[#FF6B35] rounded mt-1"></span>
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="group flex items-center gap-2 transition-all">
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#FF6B35] transition-all duration-300">
                  ➜
                </span>
                <Link
                  to="/"
                  className="group-hover:text-[#FF6B35] transition-all duration-300 group-hover:translate-x-1"
                >
                  Home
                </Link>
              </li>

              <li className="group flex items-center gap-2 transition-all">
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#FF6B35] transition-all duration-300">
                  ➜
                </span>
                <Link
                  to="/services"
                  className="group-hover:text-[#FF6B35] transition-all duration-300 group-hover:translate-x-1"
                >
                  All Pets
                </Link>
              </li>


              <li className="group flex items-center gap-2 transition-all">
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#FF6B35] transition-all duration-300">
                  ➜
                </span>
                <Link
                  to="/donation-campaigns"
                  className="group-hover:text-[#FF6B35] transition-all duration-300 group-hover:translate-x-1"
                >
                  Donation Campaigns
                </Link>
              </li>

              <li className="group flex items-center gap-2 transition-all">
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#FF6B35] transition-all duration-300">
                  ➜
                </span>
                <Link
                  to="/about"
                  className="group-hover:text-[#FF6B35] transition-all duration-300 group-hover:translate-x-1"
                >
                  About Us
                </Link>
              </li>

              <li className="group flex items-center gap-2 transition-all">
                <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-[#FF6B35] transition-all duration-300">
                  ➜
                </span>
                <Link
                  to="/contact"
                  className="group-hover:text-[#FF6B35] transition-all duration-300 group-hover:translate-x-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-5 relative">
              Services
              <span className="block w-12 h-1 bg-[#FF6B35] rounded mt-1"></span>
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>Pet Adoption</li>
              <li>Pet Daycare</li>
              <li>Veterinary Support</li>
              <li>Donation & Rescue</li>
              <li>Pet Grooming</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5 relative">
              Contact Us
              <span className="block w-12 h-1 bg-[#FF6B35] rounded mt-1"></span>
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#FFB84D]" />
                <span>+880 1234 567 890</span>
              </li>
              <li className="flex items-center gap-3 ">
                <span className=" text-[#FFB84D]">
                  <FaEnvelope />
                </span>
                <span className="text-white">support@warmpaws.com</span>
              </li>

              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#FFB84D]" />
                <span>123 Pet Street, Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Business hours */}
          <div className="mt-6 p-4 bg-white/10 rounded-lg">
            <h4 className="font-semibold mb-2 text-[#FFB84D]">
              Business Hours
            </h4>
            <p className="text-sm text-gray-300">
              Mon - Sat: 9:00 AM - 8:00 PM
            </p>
            <p className="text-sm text-gray-300">Sunday: 10:00 AM - 6:00 PM</p>
            <p className="text-sm text-[#52C41A] font-semibold mt-2">
              24/7 Emergency Care Available
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#1f2a35] py-4 mt-10 border-t border-gray-700">
        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} WarmPaws — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
