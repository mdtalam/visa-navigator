import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AllVisaCard = ({ visa }) => {
  const {
    _id,
    countryImage,
    countryName,
    visaType,
    processingTime,
    requiredDocuments,
    description,
    ageRestriction,
    fee,
    validity,
    applicationMethod,
  } = visa;
  console.log(_id)
  // const {_id,countryImage,countryName,visaType,processingTime,requiredDocuments,description,ageRestriction,fee,validity,applicationMethod} = visa;
  // console.log(visaData)
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Country Image */}
        <img
          src={countryImage}
          alt={countryName}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          {/* Country Name */}
          <h3 className="text-xl font-semibold mb-2">{countryName}</h3>

          {/* Visa Type */}
          <p className="text-gray-600">
            <strong>Visa Type:</strong> {visaType}
          </p>

          {/* Processing Time */}
          <p className="text-gray-600">
            <strong>Processing Time:</strong> {processingTime} days
          </p>

          {/* Fee */}
          <p className="text-gray-600">
            <strong>Fee:</strong> ${fee}
          </p>

          {/* "See Details" Button */}
          <Link
            className="btn mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition w-full"
            to={`/visa-details/${visa._id}`}
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllVisaCard;
