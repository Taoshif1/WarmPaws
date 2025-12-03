import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ServiceCard from "../components/ServiceCard";
import WinterTips from "../components/WinterTips";
import ExpertVets from "../components/ExpertVets";
import Testimonials from "../components/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";
import {
  FaPaw,
  FaHeart,
  FaShieldAlt,
  FaUserMd,
  FaEnvelope,
  FaArrowRight,
  FaDonate,
  FaNewspaper,
} from "react-icons/fa";
import NewsletterSubscribe from "../components/NewsletterSubscribe";

const Home = () => {
  const [services, setServices] = useState([]);
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing! We'll send updates to ${email}`);
    setEmail("");
  };

  return (
    <div>
      {/* 1. Hero Slider Section */}
      <section className="mb-18">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[60vh] md:h-[65vh] lg:h-[70vh]"
        >
          <SwiperSlide>
            <div
              className="hero h-full"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co.com/QFd6Q6cw/pexels-pavel-danilyuk-6667382.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-white">
                <div className="max-w-2xl" data-aos="zoom-in">
                  <h1 className="mb-5 text-4xl md:text-6xl font-bold leading-tight">
                    Keep Your Pets Warm This Winter ❄️
                  </h1>
                  <p className="mb-8 text-lg md:text-xl">
                    Expert winter care services for your beloved furry friends.
                    Safe, cozy, and professional care.
                  </p>
                  <Link
                    to="/services"
                    className="btn bg-[#FF6B35] hover:bg-[#E55A2B] text-white border-none btn-lg normal-case"
                  >
                    Explore Services
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero h-full"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co.com/yFmb4Qzc/pexels-japheth-569170.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-white">
                <div className="max-w-2xl" data-aos="zoom-in">
                  <h1 className="mb-5 text-4xl md:text-6xl font-bold leading-tight">
                    Winter Wellness for Cats 🐱
                  </h1>
                  <p className="mb-8 text-lg md:text-xl">
                    Specialized care and cozy shelters to keep your feline
                    friends comfortable all winter long.
                  </p>
                  <Link
                    to="/services"
                    className="btn bg-[#4A90E2] hover:bg-[#3A7BC8] text-white border-none btn-lg normal-case"
                  >
                    Book Now
                    <FaHeart className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="hero h-full"
              style={{
                backgroundImage:
                  "url(https://i.ibb.co.com/RG9mHHgB/pexels-gustavo-fring-7155806.jpg)",
              }}
            >
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-white">
                <div className="max-w-2xl" data-aos="zoom-in">
                  <h1 className="mb-5 text-4xl md:text-6xl font-bold leading-tight">
                    24/7 Emergency Care 🚑
                  </h1>
                  <p className="mb-8 text-lg md:text-xl">
                    Round-the-clock winter emergency services. Your pet's safety
                    is our priority.
                  </p>
                  <Link
                    to="/contact"
                    className="btn bg-[#52C41A] hover:bg-[#45A517] text-white border-none btn-lg normal-case"
                  >
                    Contact Us
                    <FaUserMd className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* 2. Features/Why Choose Us Section */}
      <section className="container-custom mb-14" data-aos="fade-up">
        <div className="text-center mb-5">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Why Choose WarmPaws?
          </h2>
          <p className="text-gray-600 text-lg -mt-1">
            Your pet's comfort and safety are our top priorities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-18">
          {[
            {
              icon: FaPaw,
              title: "Expert Care",
              desc: "Certified professionals with years of experience",
            },
            {
              icon: FaHeart,
              title: "24/7 Support",
              desc: "Always here when your pet needs us most",
            },
            {
              icon: FaShieldAlt,
              title: "Safe & Secure",
              desc: "Top-quality facilities and equipment",
            },
            {
              icon: FaUserMd,
              title: "Licensed Vets",
              desc: "Qualified veterinarians on staff",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="card bg-white shadow-lg hover:shadow-xl transition-all p-6 text-center border-t-4 border-[#FF6B35]"
            >
              <feature.icon className="text-5xl text-[#FF6B35] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. All Items/Services Section - 4 Cards Per Row */}
      <section className="container-custom mb-30">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold pt-2 mb-4 text-gray-800">
            Popular Winter Care Services
          </h2>
          <p className="text-gray-600 text-lg">
            Explore our range of specialized winter care services for your pets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(0, 8).map((service) => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>

        <div className="text-center mt-10 mb-5">
          <Link
            to="/services"
            className="btn bg-[#FF6B35] hover:bg-[#E55A2B] text-white border-none btn-lg normal-case"
          >
            View All Services
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </section>

      {/* 4. Winter Care Tips Section */}
      <WinterTips />

      {/* 5. Expert Vets Section */}
      <ExpertVets />

      {/* 6. Donation/Support Campaign Section */}
      <section className="container-custom mb-20" data-aos="fade-up">
        <div className="bg-gradient-to-r from-[#FF6B35] to-[#FFB84D] rounded-3xl p-12 text-white shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <FaDonate className="text-6xl mb-4" />
              <h2 className="text-4xl font-bold mb-4">
                Support Street Animals This Winter
              </h2>
              <p className="text-xl mb-6 opacity-90">
                Your donation helps provide warm shelters, food, and medical
                care to homeless pets during harsh winter months.
              </p>
              <div className="flex gap-4">
                <Link
                  to="/donation-campaigns"
                  className="btn bg-white text-[#FF6B35] hover:bg-gray-100 border-none btn-lg normal-case"
                >
                  Donate Now
                </Link>
                <Link
                  to="/about"
                  className="btn btn-outline border-white text-white hover:bg-white hover:text-[#FF6B35] btn-lg normal-case"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="stats stats-vertical lg:stats-horizontal shadow-lg bg-white text-gray-800">
              <div className="stat">
                <div className="stat-title">Pets Helped</div>
                <div className="stat-value text-[#FF6B35]">2,500+</div>
                <div className="stat-desc">Last winter season</div>
              </div>
              <div className="stat">
                <div className="stat-title">Active Donors</div>
                <div className="stat-value text-[#4A90E2]">850+</div>
                <div className="stat-desc">Generous supporters</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section */}
      <Testimonials />

      {/* 8. Newsletter/Blog Section */}
      <NewsletterSubscribe></NewsletterSubscribe>

    </div>
  );
};

export default Home;
