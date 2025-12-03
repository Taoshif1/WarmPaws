import React, { useEffect, useState } from "react";
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

const Home = () => {
  const [services, setServices] = useState([]);

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

  return (
    <div>
      {/* Hero Slider Section */}
      <section className="mb-16">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-[400px] md:h-[500px] lg:h-[600px]"
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
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">
                    Keep Your Pets Warm This Winter ❄️
                  </h1>
                  <p className="mb-5">
                    Expert winter care services for your beloved furry friends.
                    Safe, cozy, and professional care.
                  </p>
                  <button className="btn btn-primary">Explore Services</button>
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
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">
                    Winter Wellness for Cats 🐱
                  </h1>
                  <p className="mb-5">
                    Specialized care and cozy shelters to keep your feline
                    friends comfortable all winter long.
                  </p>
                  <button className="btn btn-primary">Book Now</button>
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
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-5xl font-bold">
                    24/7 Emergency Care 🚑
                  </h1>
                  <p className="mb-5">
                    Round-the-clock winter emergency services. Your pet's
                    safety is our priority.
                  </p>
                  <button className="btn btn-primary">Contact Us</button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* Popular Winter Care Services */}
      <section className="max-w-7xl mx-auto px-4 mb-16">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4">
            Popular Winter Care Services
          </h2>
          <p className="text-gray-600">
            Explore our range of specialized winter care services for your pets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.serviceId} service={service} />
            
          ))}
        </div>
      </section>

      {/* Winter Care Tips Section */}
      <WinterTips></WinterTips>

      {/* Expert Vets Section */}
      <ExpertVets></ExpertVets>

      {/* Testimonials Section (Extra Section) */}
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;