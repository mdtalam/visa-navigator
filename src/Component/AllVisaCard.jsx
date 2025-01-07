import React from "react";
import { Link } from "react-router-dom";

const AllVisaCard = ({ visa }) => {
  const {
    _id,
    countryImage,
    countryName,
    visaType,
    processingTime,
    fee,
    applicationMethod,
  } = visa;

  return (
    <div className="shadow-2xl rounded-lg overflow-hidden flex flex-col h-full">
      {/* Country Image */}
      <div className="flex-shrink-0">
        <img
          src={countryImage}
          alt={countryName}
          className="w-full h-48 object-cover"
        />
      </div>

      {/* Card Info */}
      <div className="flex-grow p-4">
        {/* Country Name */}
        <h3 className="text-xl font-semibold mb-2">{countryName}</h3>

        {/* Visa Type */}
        <p>{visaType}</p>

        {/* Processing Time */}
        <p>{processingTime} days</p>

        {/* Processing Time */}
        <p>{applicationMethod} days</p>

        {/* Fee */}
        <p>${fee}</p>
      </div>

      {/* Button */}
      <div className="p-4">
        <Link
          className="btn mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition w-full"
          to={`/visa-details/${_id}`}
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default AllVisaCard;
