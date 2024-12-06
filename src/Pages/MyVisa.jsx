import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from "../Provider/AuthProvider";


const MyVisa = () => {
  const [applications, setApplications] = useState([]);
  const { user } = useContext(AuthContext); // Assuming user info is available from context
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    // Fetch the user's visa applications from the backend
    fetch(`http://localhost:5000/application/${user.email}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setApplications(data);
      })
      .catch((error) => {
        console.error("Error fetching applications:", error);
        Swal.fire({
          title: 'Error!',
          text: 'Could not fetch your visa applications. Please try again later.',
          icon: 'error',
          confirmButtonText: 'Close',
        });
      });
  }, [user, navigate]);

  const handleCancelApplication = (applicationId) => {
    // Confirm the cancellation
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, cancel it!',
      cancelButtonText: 'No, keep it',
    }).then((result) => {
      if (result.isConfirmed) {
        // Send delete request to the backend
        fetch(`http://localhost:5000/application/cancel/${applicationId}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then(() => {
            setApplications(applications.filter(app => app._id !== applicationId)); // Remove from state
            Swal.fire(
              'Cancelled!',
              'Your application has been cancelled.',
              'success'
            );
          })
      }
    });
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-6">My Visa Applications</h1>

      {applications?.length === 0 ? (
        <p className="text-center">You have no visa applications.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((application) => (
            <div key={application._id} className="border rounded-lg shadow-lg overflow-hidden">
              <img
                src={application.countryImage}
                alt={application.countryName}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{application.countryName}</h2>
                <p><strong>Visa Type:</strong> {application.visaType}</p>
                <p><strong>Processing Time:</strong> {application.processingTime} days</p>
                <p><strong>Fee:</strong> ${application.fee}</p>
                <p><strong>Validity:</strong> {application.validity}</p>
                <p><strong>Application Method:</strong> {application.applicationMethod}</p>
                <p><strong>Applied Date:</strong> {application.appliedDate}</p>
                <p><strong>Applicant's Name:</strong> {`${application.firstName} ${application.lastName}`}</p>
                <p><strong>Applicant's Email:</strong> {application.email}</p>
                
                <button
                  onClick={() => handleCancelApplication(application._id)}
                  className="mt-4 w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                >
                  Cancel Application
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyVisa;
