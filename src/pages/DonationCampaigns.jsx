import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import toast from 'react-hot-toast';
import { FaDonate, FaHeart, FaPaw, FaCheckCircle, FaBone, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DonationCampaigns = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [selectedCampaign, setSelectedCampaign] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const campaigns = [
    {
      id: 1,
      title: 'Winter Shelter Program',
      icon: FaHome,
      goal: 50000,
      raised: 35000,
      description:
        'Help us provide warm shelters and blankets for street animals during harsh winter months.',
      image: 'https://pet-health-content-media.chewy.com/wp-content/uploads/2024/11/04161314/dog-frisco-jacket-standing-in-snow-1024x615-1.jpeg',
      color: 'from-[#FF6B35] to-[#FFB84D]',
    },
    {
      id: 2,
      title: 'Medical Emergency Fund',
      icon: FaHeart,
      goal: 30000,
      raised: 22000,
      description:
        'Emergency medical care for injured and sick street animals who need immediate attention.',
      image: 'https://media.istockphoto.com/id/507583006/photo/cute-border-collie-puppy-with-an-emergency-kit.jpg?s=612x612&w=0&k=20&c=Gw_zgbKXtm_-GlehR-lF0dC1pXTq_fTqC_GH_z2CSII=',
      color: 'from-[#4A90E2] to-[#6BA8E8]',
    },
    {
      id: 3,
      title: 'Daily Food Program',
      icon: FaBone,
      goal: 40000,
      raised: 31000,
      description:
        'Provide nutritious daily meals to homeless dogs and cats in our community.',
      image: 'https://images.unsplash.com/photo-1608408891486-f5cade977d19?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGV0JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D',
      color: 'from-[#52C41A] to-[#73D13D]',
    },
  ];

  const quickAmounts = [500, 1000, 2500, 5000];

  const handleDonation = (e) => {
    e.preventDefault();
    if (!selectedCampaign) {
      toast.error('Please select a campaign to donate to');
      return;
    }
    if (!donationAmount || donationAmount < 100) {
      toast.error('Minimum donation amount is ৳100');
      return;
    }
    toast.success(
      `Thank you for your generous donation of ৳${donationAmount}! Your contribution makes a difference.`
    );
    setDonationAmount('');
    setSelectedCampaign('');
  };

  const impactStats = [
    { icon: FaPaw, number: '2,500+', label: 'Pets Helped' },
    { icon: FaHeart, number: '1,200+', label: 'Lives Saved' },
    { icon: FaHome, number: '800+', label: 'Homes Found' },
    { icon: FaDonate, number: '৳5M+', label: 'Funds Raised' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#FF6B35] to-[#FFB84D] text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center" data-aos="fade-up">
            <FaDonate className="text-6xl mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Make a Difference Today</h1>
            <p className="text-xl md:text-2xl opacity-90">
              Your donation helps provide food, shelter, and medical care to animals in need
            </p>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="container-custom py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6" data-aos="fade-up">
          {impactStats.map((stat, index) => (
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

      {/* Active Campaigns */}
      <section className="bg-gray-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Active Campaigns</h2>
            <p className="text-xl text-gray-600">Choose a cause that speaks to your heart</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => {
              const percentage = Math.round((campaign.raised / campaign.goal) * 100);
              return (
                <div
                  key={campaign.id}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <img
                    src={campaign.image}
                    alt={campaign.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6">
                    <div
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${campaign.color} text-white px-4 py-2 rounded-full mb-4`}
                    >
                      <campaign.icon />
                      <span className="font-semibold">Active Campaign</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-gray-800">{campaign.title}</h3>
                    <p className="text-gray-600 mb-6">{campaign.description}</p>

                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-semibold text-gray-700">
                          ৳{campaign.raised.toLocaleString()} raised
                        </span>
                        <span className="text-sm font-semibold text-gray-700">
                          ৳{campaign.goal.toLocaleString()} goal
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div
                          className={`bg-gradient-to-r ${campaign.color} h-3 rounded-full transition-all`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <p className="text-center mt-2 text-sm text-gray-600 font-semibold">
                        {percentage}% funded
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedCampaign(campaign.title);
                        document.getElementById('donation-form').scrollIntoView({ behavior: 'smooth' });
                      }}
                      className={`btn bg-gradient-to-r ${campaign.color} text-white border-none w-full btn-lg normal-case hover:opacity-90`}
                    >
                      Donate Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section id="donation-form" className="container-custom py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12" data-aos="zoom-in">
            <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center flex items-center justify-center gap-3">
              <FaHeart className="text-[#FF6B35]" />
              Make Your Donation
            </h2>

            <form onSubmit={handleDonation} className="space-y-6">
              {/* Campaign Selection */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">Select Campaign</span>
                </label>
                <select
                  value={selectedCampaign}
                  onChange={(e) => setSelectedCampaign(e.target.value)}
                  className="select select-bordered w-full text-lg focus:border-[#FF6B35] focus:outline-none"
                  required
                >
                  <option value="">Choose a campaign</option>
                  {campaigns.map((campaign) => (
                    <option key={campaign.id} value={campaign.title}>
                      {campaign.title}
                    </option>
                  ))}
                  <option value="general">General Fund</option>
                </select>
              </div>

              {/* Quick Amount Buttons */}
              <div>
                <label className="label">
                  <span className="label-text font-semibold text-lg">Quick Select Amount</span>
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {quickAmounts.map((amount) => (
                    <button
                      key={amount}
                      type="button"
                      onClick={() => setDonationAmount(amount.toString())}
                      className={`btn btn-lg ${
                        donationAmount === amount.toString()
                          ? 'bg-[#FF6B35] text-white'
                          : 'btn-outline border-[#FF6B35] text-[#FF6B35]'
                      }`}
                    >
                      ৳{amount}
                    </button>
                  ))}
                </div>
              </div>

              {/* Custom Amount */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">Or Enter Custom Amount</span>
                </label>
                <input
                  type="number"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(e.target.value)}
                  placeholder="Enter amount (min ৳100)"
                  min="100"
                  className="input input-bordered w-full text-lg focus:border-[#FF6B35] focus:outline-none"
                  required
                />
              </div>

              {/* Donor Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Your Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="input input-bordered focus:border-[#FF6B35] focus:outline-none"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="input input-bordered focus:border-[#FF6B35] focus:outline-none"
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn bg-gradient-to-r from-[#FF6B35] to-[#FFB84D] text-white border-none w-full btn-lg normal-case text-lg hover:opacity-90"
              >
                <FaCheckCircle className="mr-2" />
                Complete Donation of ৳{donationAmount || '0'}
              </button>

              <p className="text-center text-sm text-gray-500 mt-4">
                🔒 Your donation is secure and tax-deductible. You will receive a receipt via email.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container-custom">
          <div className="text-center mb-12" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4 text-gray-800">Other Ways to Help</h2>
            <p className="text-xl text-gray-600">Every contribution makes a difference</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center" data-aos="fade-up">
              <FaPaw className="text-6xl text-[#FF6B35] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Volunteer</h3>
              <p className="text-gray-600 mb-4">
                Join our team and help care for animals at our shelter
              </p>
              <Link to="/about" className="btn btn-outline border-[#FF6B35] text-[#FF6B35]">Learn More</Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center" data-aos="fade-up" data-aos-delay="100">
              <FaBone className="text-6xl text-[#4A90E2] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Donate Supplies</h3>
              <p className="text-gray-600 mb-4">
                Contribute pet food, blankets, toys, and medical supplies
              </p>
              <Link to="/donation-campaigns" className="btn btn-outline border-[#4A90E2] text-[#4A90E2]">View Wishlist</Link>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center" data-aos="fade-up" data-aos-delay="200">
              <FaHome className="text-6xl text-[#52C41A] mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3">Foster a Pet</h3>
              <p className="text-gray-600 mb-4">
                Provide temporary care until we find them forever homes
              </p>
              <Link to='/services' className="btn btn-outline border-[#52C41A] text-[#52C41A]">Apply Now</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationCampaigns;