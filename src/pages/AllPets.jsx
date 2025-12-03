import React, { useEffect, useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaFilter, FaSortAmountDown, FaSortAmountUp, FaSearch } from 'react-icons/fa';

const AllPets = () => {
  const [services, setServices] = useState([]);
  const [filteredServices, setFilteredServices] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Filter & Sort States
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState(''); // 'asc' or 'desc'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  useEffect(() => {
    fetch('/services.json')
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setFilteredServices(data);
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

  // Apply Filters & Sorting
  useEffect(() => {
    let result = [...services];

    // 1. Search Filter
    if (searchQuery) {
      result = result.filter(service =>
        service.serviceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.providerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // 2. Category Filter
    if (selectedCategory !== 'all') {
      result = result.filter(service => service.category === selectedCategory);
    }

    // 3. Price Range Filter
    if (priceRange !== 'all') {
      result = result.filter(service => {
        const price = parseFloat(service.price);
        if (priceRange === 'low') return price < 50;
        if (priceRange === 'medium') return price >= 50 && price <= 100;
        if (priceRange === 'high') return price > 100;
        return true;
      });
    }

    // 4. Sorting (Ascending/Descending by Price)
    if (sortOrder === 'asc') {
      result.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortOrder === 'desc') {
      result.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    setFilteredServices(result);
  }, [searchQuery, sortOrder, selectedCategory, priceRange, services]);

  // Get Unique Categories
  const categories = ['all', ...new Set(services.map(s => s.category))];

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-bars loading-lg text-[#FF6B35]"></span>
      </div>
    );
  }

  return (
    <div className="container-custom py-12">
      {/* Header */}
      <div className="text-center mb-12" data-aos="fade-down">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">
          All Pet Care Services
        </h1>
        <p className="text-xl text-gray-600">
          Browse through our comprehensive collection of pet care services
        </p>
      </div>

      {/* Filters & Sorting Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-12" data-aos="fade-up">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Search */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold flex items-center gap-2">
                <FaSearch className="text-[#FF6B35]" /> Search
              </span>
            </label>
            <input
              type="text"
              placeholder="Search services..."
              className="input input-bordered w-full focus:border-[#FF6B35] focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold flex items-center gap-2">
                <FaFilter className="text-[#FF6B35]" /> Category
              </span>
            </label>
            <select
              className="select select-bordered w-full focus:border-[#FF6B35] focus:outline-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>
                  {cat === 'all' ? 'All Categories' : cat}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold flex items-center gap-2">
                <FaFilter className="text-[#FF6B35]" /> Price Range
              </span>
            </label>
            <select
              className="select select-bordered w-full focus:border-[#FF6B35] focus:outline-none"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            >
              <option value="all">All Prices</option>
              <option value="low">Under $50</option>
              <option value="medium">$50 - $100</option>
              <option value="high">Over $100</option>
            </select>
          </div>

          {/* Sort Order */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold flex items-center gap-2">
                {sortOrder === 'asc' ? <FaSortAmountUp className="text-[#FF6B35]" /> : <FaSortAmountDown className="text-[#FF6B35]" />}
                Sort by Price
              </span>
            </label>
            <select
              className="select select-bordered w-full focus:border-[#FF6B35] focus:outline-none"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="">Default</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Showing <span className="font-bold text-[#FF6B35]">{filteredServices.length}</span> of {services.length} services
          </p>
        </div>
      </div>

      {/* Services Grid - 4 Cards Per Row */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.serviceId} service={service} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20" data-aos="fade-up">
          <div className="text-6xl mb-4">🐾</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">No Services Found</h3>
          <p className="text-gray-500 mb-6">
            Try adjusting your filters or search query
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSortOrder('');
              setSelectedCategory('all');
              setPriceRange('all');
            }}
            className="btn bg-[#FF6B35] hover:bg-[#E55A2B] text-white border-none"
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Call to Action */}
      <div className="text-center mt-16 bg-gradient-to-r from-blue-50 to-purple-50 p-12 rounded-xl" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">Need Help Choosing?</h2>
        <p className="text-gray-600 mb-6 text-lg">
          Our pet care experts are here to help you find the perfect service for your furry friend.
        </p>
        <button className="btn bg-[#4A90E2] hover:bg-[#3A7BC8] text-white border-none btn-lg normal-case">
          Contact Us Today
        </button>
      </div>
    </div>
  );
};

export default AllPets;