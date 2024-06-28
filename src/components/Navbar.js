import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/services/new">Add Service</Link></li>
                <li><Link to="/appointments">Appointments</Link></li>
                <li><Link to="/appointments/new">Add Appointment</Link></li>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/reviews/new">Add Review</Link></li>
                <li><Link to="/expert-services">Expert Services</Link></li>
                <li><Link to="/expert-services/new">Add Expert Service</Link></li>
                <li><Link to="/payments">Payments</Link></li>
                <li><Link to="/payments/new">Add Payment</Link></li>
                <li><Link to="/plant-care-logs">Plant Care Logs</Link></li>
                <li><Link to="/plant-care-logs/new">Add Plant Care Log</Link></li>
                <li><Link to="/plant-types">Plant Types</Link></li>
                <li><Link to="/plant-types/new">Add Plant Type</Link></li>
                <li><Link to="/plant-type-services">Plant Type Services</Link></li>
                <li><Link to="/plant-type-services/new">Add Plant Type Service</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
