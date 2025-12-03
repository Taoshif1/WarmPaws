import React from 'react';
import { Link } from 'react-router-dom';
import { FaDollarSign, FaStar, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({ service }) => {
    const { 
        serviceId, 
        serviceName, 
        providerName, 
        price, 
        rating, 
        slotsAvailable, 
        description, 
        image 
    } = service;

    return (
        <div 
            className="card bg-white shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:border-[#FF6B35] flex flex-col h-full"
            data-aos="fade-up"
        >
            {/* Fixed Height Image */}
            <figure className="h-52 overflow-hidden">
                <img 
                    src={image} 
                    alt={serviceName} 
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
            </figure>

            {/* Card Body - Flex Grow to Fill Space */}
            <div className="card-body p-5 flex flex-col flex-grow">
                
                {/* Title & Rating Row */}
                <div className="flex justify-between items-start mb-3">
                    <h2 className="card-title text-xl font-bold text-gray-800 line-clamp-2 flex-grow pr-2">
                        {serviceName}
                    </h2>
                    <div className="badge badge-lg bg-[#FFB84D] text-white border-none flex-shrink-0">
                        <FaStar className='mr-1' /> {rating}
                    </div>
                </div>

                {/* Description - Fixed 3 lines */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                    {description}
                </p>

                {/* Provider Info */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <FaMapMarkerAlt className='text-[#FF6B35]' />
                    <span className="font-medium">{providerName}</span>
                </div>

                {/* Divider */}
                <div className="divider my-2"></div>

                {/* Bottom Section - Pushed to bottom */}
                <div className="mt-auto">
                    {/* Price & Slots */}
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-1 text-2xl font-bold text-[#FF6B35]">
                            <FaDollarSign className="text-xl" />
                            <span>{price}</span>
                        </div>
                        <div className={`badge ${slotsAvailable > 5 ? 'badge-success' : 'badge-warning'} gap-2`}>
                            {slotsAvailable} Slots Left
                        </div>
                    </div>

                    {/* View Details Button - Full Width */}
                    <Link 
                        to={`/service/${serviceId}`} 
                        className="btn bg-[#FF6B35] hover:bg-[#E55A2B] text-white border-none w-full normal-case font-medium group"
                    >
                        See More
                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;