import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col justify-center items-center my-10">
      <div className="text-center my-5">
        <h1 className="text-5xl md:text-7xl font-bold">Welcome to Medkit</h1>
        <p className="text-lg mt-4">
          Medkit is an individual seeking employment or residency in any of The
          Gulf Cooperation Council States.
        </p>
        <p className="text-2xl my-4 font-bold">
          We wish you good health and happiness.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-10">
        {/* Medical Examinations Card */}
        <div className="bg-white text-black p-6 rounded-lg shadow-lg flex-1">
          <div className="flex flex-col items-start mb-4">
            <span className="bg-purple-400 rounded-full p-4">
              <FaUserCircle className="text-4xl text-white" />
            </span>
            <h3 className="mt-5 text-xl font-semibold">Medical Examinations</h3>
          </div>
          <p className="text-sm mb-6">
            Book your health check-up appointment or view your test results
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/appointment")}
              className="bg-black text-white md:px-4 md:py-2 p-2 rounded-md hover:bg-purple-600"
            >
              Book an Appointment
            </button>
            <button className="bg-gray-200 text-black md:px-4 md:py-2 p-2 rounded-md hover:bg-purple-400">
              View Medical Reports
            </button>
          </div>
        </div>
        {/* Medical Examinations Card */}
        <div className="bg-white text-black p-6 rounded-lg shadow-2xl md:shadow-lg flex-1">
          <div className="flex flex-col items-start mb-4">
            <span className="bg-purple-400 rounded-full p-4">
              <FaUserCircle className="text-4xl text-white" />
            </span>
            <h3 className="mt-5 text-xl font-semibold">Medical Examinations</h3>
          </div>
          <p className="text-sm mb-6">
            Book your health check-up appointment or view your test results
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => navigate("/appointment")}
              className="bg-black text-white md:px-4 md:py-2 p-2 rounded-md hover:bg-purple-600"
            >
              Book an Appointment
            </button>
            <button className="bg-gray-200 text-black md:px-4 md:py-2 p-2 rounded-md hover:bg-purple-400">
              View Medical Reports
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
