import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHeart, FaPaw, FaAward, FaUsers, FaShieldAlt, FaClock } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const stats = [
    { icon: FaPaw, number: '5,000+', label: 'Pets Helped' },
    { icon: FaUsers, number: '2,000+', label: 'Happy Clients' },
    { icon: FaAward, number: '15+', label: 'Awards Won' },
    { icon: FaClock, number: '5', label: 'Years of Service' },
  ];

  const values = [
    {
      icon: FaHeart,
      title: 'Compassionate Care',
      desc: 'We treat every pet with the love and attention they deserve, as if they were our own.',
    },
    {
      icon: FaShieldAlt,
      title: 'Safety First',
      desc: 'Your pet\'s safety and wellbeing are our top priorities in everything we do.',
    },
    {
      icon: FaAward,
      title: 'Professional Excellence',
      desc: 'Our team consists of certified professionals with years of experience in pet care.',
    },
    {
      icon: FaClock,
      title: '24/7 Availability',
      desc: 'Round-the-clock emergency services because we know pets don\'t follow schedules.',
    },
  ];

  const team = [
    {
      name: 'Dr. Taoshiflex Gazi',
      role: 'Chief Veterinarian',
      image: 'https://i.ibb.co.com/hxTKHBpf/468546934-1243782253559302-2587543065512949540-n.jpg',
      desc: 'DVM, 12 years of experience in emergency pet care',
    },
    {
      name: 'Dr. Moon Mahafuza',
      role: 'Pet Care Specialist',
      image: 'https://i.ibb.co.com/xq1C2nTL/Messenger-creation-ce0bee23-4881-4ed1-b410-1e19c6376e1d.jpg',
      desc: 'Certified groomer and pet behavior specialist',
    },
    {
      name: 'Dr. Mahbub Zhankar',
      role: 'Adoption Coordinator',
      image: 'https://i.ibb.co.com/HfGZSj2M/461494518-3927053130903991-1669048447871862858-n.jpg',
      desc: 'Dedicated to finding perfect homes for every pet',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FF6B35] to-[#FFB84D] text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About WarmPaws</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Dedicated to providing exceptional care and finding loving homes for pets since 2020
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all"
            >
              <stat.icon className="text-5xl text-[#FF6B35] mx-auto mb-4" />
              <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right">
              <img
                src="https://static.wixstatic.com/media/7c5b38_3be31aaad2c042988cdd60129aeeb739~mv2.jpg"
                alt="Our Story"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div data-aos="fade-left">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                WarmPaws was founded in 2020 with a simple mission: to provide every pet with the
                warmth, care, and love they deserve. What started as a small winter care initiative
                has grown into a comprehensive pet care service helping thousands of animals each year.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our founder, inspired by the struggles of street animals during harsh winters, decided
                to create a safe haven where pets could receive professional care, medical attention,
                and a chance to find loving forever homes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, WarmPaws has become a trusted name in pet care, serving the community with
                dedication, compassion, and professional excellence. We're proud of how far we've come,
                but we're even more excited about the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="container-custom py-20">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Core Values</h2>
          <p className="text-xl text-gray-600">
            The principles that guide everything we do at WarmPaws
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-all border-t-4 border-[#FF6B35]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <value.icon className="text-5xl text-[#FF6B35] mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-gray-800">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Dedicated professionals committed to your pet's wellbeing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2 text-gray-800">{member.name}</h3>
                  <p className="text-[#FF6B35] font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container-custom py-20">
        <div className="bg-gradient-to-r from-[#FF6B35] to-[#FFB84D] rounded-3xl p-12 text-white text-center" data-aos="zoom-in">
          <FaHeart className="text-6xl mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
            To create a world where every pet receives the love, care, and respect they deserve.
            We strive to be the bridge between homeless animals and loving families, providing
            exceptional care while working towards a future where no pet is left behind.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;