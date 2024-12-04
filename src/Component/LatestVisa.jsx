import React from "react";
import { useNavigate } from "react-router-dom";

// Sample Data for Latest Visas
const latestVisa = [
  {
    id: 1,
    country: "Canada",
    image: "https://via.placeholder.com/300", // Replace with actual image URL
    visaType: "Tourist Visa",
    processingTime: "7-10 days",
    fee: "$150",
    validity: "6 months",
    applicationMethod: "Online",
  },
  {
    id: 2,
    country: "Australia",
    image: "https://via.placeholder.com/300",
    visaType: "Work Visa",
    processingTime: "15-20 days",
    fee: "$250",
    validity: "1 year",
    applicationMethod: "Offline",
  },
  {
    id: 3,
    country: "Australia",
    image: "https://via.placeholder.com/300",
    visaType: "Work Visa",
    processingTime: "15-20 days",
    fee: "$250",
    validity: "1 year",
    applicationMethod: "Offline",
  },
  // Add more visa data here
];

const LatestVisas = () => {
  const navigate = useNavigate();

  const handleSeeDetails = (visaId) => {
    navigate(`/visa-details/${visaId}`); // Navigate to the visa details page
  };

  const handleSeeAllVisas = () => {
    navigate("/all-visas"); // Navigate to the All Visas page
  };

  return (
    <div className="py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">Latest Visas</h2>

        {/* Visa Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {latestVisa.map((visa) => (
            <div
              key={visa.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={visa.image}
                alt={`${visa.country} Visa`}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{visa.country}</h3>
                <p>
                  <span className="font-semibold">Visa Type:</span>{" "}
                  {visa.visaType}
                </p>
                <p>
                  <span className="font-semibold">Processing Time:</span>{" "}
                  {visa.processingTime}
                </p>
                <p>
                  <span className="font-semibold">Fee:</span> {visa.fee}
                </p>
                <p>
                  <span className="font-semibold">Validity:</span> {visa.validity}
                </p>
                <p>
                  <span className="font-semibold">Application Method:</span>{" "}
                  {visa.applicationMethod}
                </p>
                <button
                  className="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary w-full"
                  onClick={() => handleSeeDetails(visa.id)}
                >
                  See Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* See All Visas Button */}
        <div className="text-center mt-6">
          <button
            className="px-6 py-3 bg-primary text-white rounded hover:bg-secondary"
            onClick={handleSeeAllVisas}
          >
            See All Visas
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestVisas;
