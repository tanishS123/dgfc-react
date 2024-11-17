import React from 'react';
import img13 from "../assets/1.jpg";
import img14 from "../assets/glry.png";
import img17 from "../assets/galrylog.jpg";
import img15 from "../assets/galry (2).jpg";
import img16 from "../assets/galry (2).jpg";

const Servh = () => {
  const images = [
    img13,img14,img15,img16
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Service Heading */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Service</h2>
          <hr className="border-gray-400 w-12 mt-2" />
          <p className="mt-4 text-black font-medium">
          We provide a wide range of tailored services designed to meet the unique needs of our clients. From efficient logistics solutions to reliable shipment tracking, we ensure seamless and customer-focused experiences.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center mt-6">
          {/* Left Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold text-black">You Want To Track Your Shipment</h3>
            <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Phone no."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                placeholder="Enter Track ID"
                className="w-full col-span-1 sm:col-span-2 border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full col-span-1 sm:col-span-2 bg-indigo-600 text-white font-semibold rounded-lg px-4 py-2 mt-8 hover:bg-indigo-700 shadow-sm"
              >
                Track
              </button>
            </form>
          </div>

          {/* Right Section */}
          <div className="bg-white shadow-lg rounded-lg p-4">
            <div className="flex justify-center">
              <div className="text-center">
                <div className="flex items-center justify-center mr-4 -mt-28 mb-4">
                  
                  <img src={img17}/>
                    
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Logistics</h4>
                <hr className="border-gray-400 w-12 mt-2 mx-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Truck ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Servh;
