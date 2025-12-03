import React from 'react';
import { Link } from 'react-router-dom';
import { FaDollarSign, FaStar, FaMapMarkerAlt } from 'react-icons/fa';

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
            className="card bg-base-100 shadow-xl border border-gray-100 transition duration-300 hover:shadow-2xl hover:border-primary/50"
            data-aos="fade-up" // Inherits AOS from Home.jsx
        >
            <figure className="h-56">
                <img 
                    src={image} 
                    alt={serviceName} 
                    className="w-full h-full object-cover"
                />
            </figure>
            <div className="card-body p-5">
                <div className="flex justify-between items-center mb-2">
                    <h2 className="card-title text-2xl font-bold text-gray-800">
                        {serviceName}
                    </h2>
                    <div className="badge badge-lg badge-secondary text-white">
                        <FaStar className='mr-1' /> {rating}
                    </div>
                </div>

                <p className="text-sm text-gray-500 mb-3">
                    {description.substring(0, 80)}...
                </p>

                <div className="flex justify-between items-center text-lg font-semibold">
                    <p className="text-primary flex items-center">
                        <FaDollarSign />{price}
                    </p>
                    <p className="text-gray-600 flex items-center gap-1">
                        <FaMapMarkerAlt className='text-sm' /> {providerName}
                    </p>
                </div>

                <div className="divider my-2"></div>

                <div className="flex justify-between items-center text-sm">
                    <p className="text-success font-medium">
                        Slots Left: {slotsAvailable}
                    </p>
                    <Link to={`/service/${serviceId}`} className="btn btn-sm btn-primary">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;