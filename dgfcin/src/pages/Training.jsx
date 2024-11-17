import React from 'react';
import img2 from '../assets/65.jpg'
import img3 from '../assets/65.jpg'
import img4 from '../assets/65.jpg'
import img5 from '../assets/65.jpg'



const TrainingSection = () => {
  const images = [
   img2,img3,img4,img5
  ];

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">About Training</h2>
          <p className="text-sm text-gray-500 mt-2">(ANTI-CLOCKWISE FROM TOP LEFT)</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <img
              key={index}
              className="w-full h-64 object-cover rounded-lg shadow-md"
              src={image}
              alt={`Training ${index + 1}`}
            />
          ))}
        </div>
        <div className="mt-8 text-left md:text-left">
          <ul className="list-disc list-inside text-gray-700">
            <li>DTC Building</li>
            <li>Internal facilities with ergonomic chairs, A/C's, projector-screen, etc.</li>
            <li>
              Good visibility with safety posters showing road signs and messages with safety
              awareness on the walls.
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <p className="text-gray-700 leading-7">
            In DGFC, we have a MOTO “SAFETY FIRST.” Hence, we focus on the regular training of our
            Drivers, supervisors & staff to update them with all safety measures to be followed and
            motivate them with different slides, mock drills, road shows, and videos. We are having
            our own training centers in our Hub office Dharuhera and also in our Mumbai office.
          </p>
          <p className="text-gray-700 leading-7 mt-4">
            We also keep a regular watch on the health and fitness of our drivers by conducting
            regular monitoring of the health checkup reports such as health checkup and eye checkup
            by conducting checkup camps and also getting the checkups done in regular intervals from
            reputed medical institutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
