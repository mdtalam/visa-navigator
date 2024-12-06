import React from 'react';
import { useLoaderData } from 'react-router-dom';

const NewDetails = () => {
    const visaDetails = useLoaderData()
    return (
        <div>
            {visaDetails._id}
        </div>
    );
};

export default NewDetails;