import React from "react";

const About = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16 lg:px-24">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Image */}
        <div>
          <img
            src="https://source.unsplash.com/random/800x600/?travel,africa"
            alt="About Tembea360"
            className="rounded-lg shadow-md object-cover w-full h-full"
          />
        </div>

        {/* Right Text */}
        <div>
          <h2 className="text-3xl font-bold text-green-800 mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            TemBea360 is your all-in-one travel companion designed to connect
            explorers with authentic destinations and local experiences around
            the world. Whether you're discovering hidden gems in Africa or
            iconic landmarks across the globe, TemBea360 helps you plan, explore,
            and experience travel like never before — with trusted guides and
            immersive 360° views that bring every journey to life.
          </p>

          <h2 className="text-2xl font-bold text-green-800 mb-3">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed">
            Our mission at TemBea360 is to inspire meaningful travel by bridging
            the gap between travelers and local guides. We believe every journey
            should tell a story — one of adventure, connection, and discovery.
            With TemBea360, you don’t just visit places; you experience them.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
