import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-8">
          About Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="text-lg text-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p>
              At Vintage Books, our mission is to connect book enthusiasts with timeless treasures from the past. We strive to create a welcoming community where old books find new homes and stories are cherished for generations to come.
            </p>
            <p className="mt-4">
              We're committed to providing a seamless experience for both buyers and sellers, offering a diverse selection of vintage books and ensuring each transaction is handled with care and professionalism.
            </p>
          </div>
          <div className="text-lg text-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p>
              Our vision is to be the premier destination for old book enthusiasts worldwide. We aim to continuously expand our collection, partner with reputable sellers, and enhance our platform to provide the best possible experience for our community.
            </p>
            <p className="mt-4">
              Through our dedication to preserving literary history and fostering a love of reading, we aspire to make Vintage Books a beloved institution where stories from the past thrive in the present and inspire future generations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
