import React, { useEffect, useState } from 'react';
import { getAllServices } from '../../api/services';

const ServiceList = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            const data = await getAllServices();
            setServices(data);
        };
        fetchServices();
    }, []);

    return (
        <div>
            <h1>Services</h1>
            <ul>
                {services.map(service => (
                    <li key={service.id}>{service.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ServiceList;
