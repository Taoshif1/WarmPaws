import React from 'react';
import { FaMitten, FaPaw, FaLeaf, FaCarSide } from 'react-icons/fa';

const WinterTips = () => {
    const tips = [
        { icon: FaMitten, title: "Protect Paws", desc: "Use paw balm and boots to prevent ice, salt, and snow from cracking their pads." },
        { icon: FaPaw, title: "Limit Outdoor Time", desc: "Reduce long walks, especially during blizzards or extreme cold, to prevent hypothermia." },
        { icon: FaLeaf, title: "Boost Nutrition", desc: "Consult a vet for a diet change to ensure they have enough energy to maintain body heat." },
        { icon: FaCarSide, title: "Check Under Cars", desc: "Cats often hide in engine compartments for warmth. Always tap the hood before starting." },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 bg-base-200 rounded-xl my-20" data-aos="fade-up">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">
                    Essential Winter Care Tips
                </h2>
                <p className="text-gray-600">
                    A quick guide to keeping your furry friend safe and warm.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {tips.map((tip, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
                        <tip.icon className="text-5xl text-primary mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                        <p className="text-gray-500 text-sm">{tip.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WinterTips;