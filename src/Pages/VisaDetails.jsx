import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import Modal from "../Component/Modal";
import { AuthContext } from "../Provider/AuthProvider";
 // A reusable modal component

const VisaDetails = () => {
  const loadedData = useLoaderData();

  const {_id,
    countryImage,
    countryName,
    visaType,
    processingTime,
    requiredDocuments,
    description,
    ageRestriction,
    fee,
    validity,
    applicationMethod,} = loadedData


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const { user } = useContext(AuthContext); // Assume user info is available from context
  const navigate = useNavigate();

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleApply = (e) => {
    e.preventDefault();

    const applicationData = {
      email: user?.email,
      firstName: formData.firstName || "",
      lastName: formData.lastName || "",
      appliedDate: new Date().toISOString().split("T")[0],
      fee: fee,
      visaId: _id,
    };
    

    // Save applicationData to the database
    fetch("http://localhost:5000/application", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(applicationData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setIsModalOpen(false);
        if(data.insertedId){
          Swal.fire({
            title: 'Success!',
            text: 'Visa application submitted successfully!',
            icon: 'success',
            confirmButtonText: 'Close'
          })
        }
        navigate("/my-visa-applications");
      })
      
  };

  // Redirect if not logged in
//   if (!user) {
//     navigate("/login");
//     return null;
//   }

  return (
    <div className="container mx-auto py-10 px-4 w-2/3 mb-10">
      <h1 className="text-3xl text-center font-bold mb-6">Visa Details</h1>
      <h1 className="text-2xl font-bold mb-4">Country Name: {countryName}</h1>
      <img
        src={countryImage}
        alt={countryName}
        className="w-full h-80 object-cover rounded-lg mb-4"
      />
      <div className="text-gray-800 space-y-4 *:text-lg">
        <p>
          <strong>Visa Type:</strong> 
          {visaType}
        </p>
        <p>
          <strong>Processing Time:</strong> 
          {processingTime} days
        </p>
        <p>
          <strong>Required Documents:</strong>{" "}
          {requiredDocuments.join(", ")}
        </p>
        <p>
          <strong>Age Restriction:</strong> 
          {ageRestriction}+
        </p>
        <p>
          <strong>Fee:</strong> 
          ${fee}
        </p>
        <p>
          <strong>Validity:</strong> 
          {validity}
        </p>
        <p>
          <strong>Application Method:</strong> 
          {applicationMethod}
        </p>
        <p>
          <strong>Description:</strong> 
          {description}
        </p>
      </div>

      {/* Apply for Visa Button */}
      <button
        className="text-lg mt-6 px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition"
        onClick={() => setIsModalOpen(true)}
      >
        Apply for the Visa
      </button>

      {/* Application Modal */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)} title="Apply for Visa">
          <form onSubmit={handleApply} className="space-y-4">
            <div>
              <label className="block text-gray-600">Email</label>
              <input
                type="email"
                value={user?.email}
                readOnly
                className="w-full px-3 py-2 border rounded bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-600">First Name</label>
              <input
                type="text"
                name="firstName"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">Last Name</label>
              <input
                type="text"
                name="lastName"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div>
              <label className="block text-gray-600">Applied Date</label>
              <input
                type="text"
                value={new Date().toISOString().split("T")[0]}
                readOnly
                className="w-full px-3 py-2 border rounded bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-600">Fee</label>
              <input
                type="text"
                value={`$${fee}`}
                readOnly
                className="w-full px-3 py-2 border rounded bg-gray-100"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition"
            >
              Apply
            </button>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default VisaDetails;
