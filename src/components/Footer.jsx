import React from "react";
import { Link } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content ">

      <div className="footer p-10 max-w-7xl mx-auto flex justify-between ">
        <nav>
          <h6 className="footer-title">Services</h6>
          <Link to="/services" className="link link-hover">Winter Care</Link>
          <Link to="/services" className="link link-hover">Pet Grooming</Link>
          <Link to="/services" className="link link-hover">Nutrition Plans</Link>
          <Link to="/services" className="link link-hover">Emergency Care</Link>
        </nav>


        <nav>
          <h6 className="footer-title">Legal</h6>
          <Link to="/" className="link link-hover">Terms of use</Link>
          <Link to="/" className="link link-hover">Privacy policy</Link>
          <Link to="/" className="link link-hover">Cookie policy</Link>
        </nav>

        <nav>
          <h6 className="footer-title">Contact</h6>
          <p>📧 support@warmpaws.com</p>
          <p>📞 +880 1712345678</p>
          <p>📍 151/C, Pet Street, Dhaka City</p>
        </nav>

        <nav>
          <h6 className="footer-title">Social</h6>
          <Link to="/" className="link link-hover"><FaSquareFacebook size={18} />
</Link>
          <Link to="/" className="link link-hover"><FaSquareXTwitter size={18}/>
</Link>
          <Link to="/" className="link link-hover"><FaLinkedin size={18}/>
</Link>
        </nav>

      </div>
      <div className="footer footer-center p-4 bg-base-300 text-base-content">
        <aside>
          <p>Copyright © 2025 WarmPaws - All rights reserved</p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;