import React from 'react';

function Newsletter() {
  return (
    <div className="bg-black text-white py-11 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-16 space-y-4 md:space-y-0">
        
        {/* Newsletter Heading */}
        <h2 className="text-2xl font-bold">JOIN OUR NEWSLETTER</h2>
        
        {/* Input and Button with gap */}
        <div className="flex">
          <input
            type="email"
            placeholder="enter your email here"
            className="px-4 py-2 rounded-l-md text-gray-700 outline-none"
          />
          <button className="bg-white text-blue-900 ml-14 px-4 py-2 font-semibold rounded-r-md hover:bg-gray-200">
            subscribe now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
