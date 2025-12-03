import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
    const reviews = [
        {
            text: "WarmPaws coat fitting service was a lifesaver. My golden retriever is happier and warmer than ever on his winter walks!",
            name: "Ahmed J.",
            pet: "Buddy (Golden Retriever)",
        },
        {
            text: "The Paw Moisturizing Therapy is fantastic. No more cracked paws, even after playing in the snow and ice. Highly recommend!",
            name: "David T.",
            pet: "Milo (Labrador)",
        },
        {
            text: "Quick and professional emergency check-up service when my cat was shivering. They saved the day!",
            name: "Fatima A.",
            pet: "Mittens (Cat)",
        },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-20 mb-16" data-aos="fade-up">
            <div className="text-center mb-10">
                <h2 className="text-4xl font-bold mb-4">
                    What Our Customers Say
                </h2>
                <p className="text-gray-600">
                    Real stories from happy pet parents.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {reviews.map((review, index) => (
                    <div key={index} className="card bg-white shadow-lg p-6 border-t-4 border-primary">
                        <FaQuoteLeft className="text-3xl text-primary mb-4 opacity-50" />
                        <p className="italic text-gray-700 mb-4">"{review.text}"</p>
                        <p className="font-bold text-gray-800">- {review.name}</p>
                        <p className="text-sm text-gray-500">{review.pet}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;