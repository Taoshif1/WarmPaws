import React, { useState } from "react";
import { FaNewspaper, FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";

const NewsletterSubscribe = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      toast.error("Please enter a valid email!");
      return;
    }

    toast.success("Subscribed successfully! 🎉");
    setEmail("");
  };

  return (
    <section className="container-custom mb-20" data-aos="fade-up">
      <div className="bg-gradient-to-br from-[#4A90E2] to-[#6BA8E8] rounded-3xl p-12 text-white shadow-2xl">
        <div className="max-w-3xl mx-auto text-center">
          <FaNewspaper className="text-6xl mx-auto mb-6" />

          <h2 className="text-4xl font-bold mb-4">
            Stay Updated with Pet Care Tips
          </h2>

          <p className="text-xl mb-8 opacity-90">
            Subscribe to our newsletter for expert advice, seasonal care tips,
            and exclusive offers for your furry friends.
          </p>

          <form
            onSubmit={handleNewsletterSubmit}
            className="flex gap-4 max-w-xl mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-lg flex-grow text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button
              type="submit"
              className="btn bg-[#FF6B35] hover:bg-[#E55A2B] text-white border-none btn-lg normal-case"
            >
              <FaEnvelope className="mr-2" />
              Subscribe
            </button>
          </form>

          <p className="text-sm mt-4 opacity-75">
            Join 5,000+ pet parents receiving our weekly care tips
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;
