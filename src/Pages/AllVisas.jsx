import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllVisaCard from '../Component/AllVisaCard';

const AllVisas = () => {
    const visas = useLoaderData();
    console.log(visas._id)

    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl text-center my-10'>All Visas: {visas.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {
                    visas?.map(visa=> <AllVisaCard key={visa._id} visa={visa}></AllVisaCard>)
                }
            </div>
        </div>
    );
};

export default AllVisas;