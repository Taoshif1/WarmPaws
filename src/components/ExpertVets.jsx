import React from 'react';
import { FaUserMd, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ExpertVets = () => {
    const vets = [
        { name: "Dr. Gazi Taoshif", specialty: "Cold-Weather Nutrition", clinic: "NutriPaws Clinic", photo: "https://i.ibb.co.com/hxTKHBpf/468546934-1243782253559302-2587543065512949540-n.jpg" },
        { name: "Dr. Mahafuza Moon", specialty: "Emergency Hypothermia", clinic: "RapidVet Services", photo: "https://i.ibb.co.com/xq1C2nTL/Messenger-creation-ce0bee23-4881-4ed1-b410-1e19c6376e1d.jpg" },
        { name: "Dr. Zhankar Mahbub", specialty: "Dermatology & Paw Care", clinic: "Tender Paws Clinic", photo: "https://i.ibb.co.com/HfGZSj2M/461494518-3927053130903991-1669048447871862858-n.jpg" },
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 -mt-5 py-16 mb-16" data-aos="fade-up">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                    Meet Our Expert Winter Vets
                </h2>
                <p className="text-gray-600">
                    Trusted professionals specialized in seasonal pet care.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {vets.map((vet, index) => (
                    <div key={index} className="card bg-base-100 shadow-xl text-center">
                        <figure className="px-10 pt-10">
                            <img 
                                src={vet.photo} 
                                alt={vet.name} 
                                className="rounded-full w-32 h-32 object-cover border-4 border-primary/50"
                            />
                        </figure>
                        <div className="card-body items-center text-center p-6">
                            <h2 className="card-title text-2xl font-bold">{vet.name}</h2>
                            <p className="text-primary font-semibold text-lg">{vet.specialty}</p>
                            <p className="text-gray-500 mb-4">{vet.clinic}</p>
                            <div className="card-actions">
                                <button className="btn btn-sm btn-outline btn-primary">
                                    <FaPhoneAlt /> Consult Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExpertVets;