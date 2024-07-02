import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul>
                <h1>Home</h1>
                <li><Link to="/">Home</Link></li>

                <h1>User</h1>
                <li><Link to="/login">LoginForm</Link></li>
                <li><Link to="/register">RegisterForm</Link></li>
                <li><Link to="/change-role">ChangeRole</Link></li>

                <h1>Service</h1>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/services/new">Add Service</Link></li>
                <li><Link to="/services-by-id">serviceByID</Link></li>

                <h1>Appointment</h1>
                <li>
                    <Link exact to="/appointments">Appointment List</Link>
                </li>
                <li>
                    <Link to="/appointments/new">Create Appointment</Link>
                </li>
                <li>
                    <Link to="/appointments/expert">Appointments by Expert</Link>
                </li>
                <li>
                    <Link to="/appointments/user">Appointments by User</Link>
                </li>
                <li>
                    <Link to="/appointmentsDetail">Appointments Details</Link>
                </li>

                <h1>Review</h1>
                <li><Link to="/reviews">Reviews</Link></li>
                <li><Link to="/reviews/new">Add Review</Link></li>
                <li><Link to="/reviews/by-id">ReviewByID</Link></li>


                <h1>ExpertService</h1>
                <li><Link to="/expert-services">Expert Services</Link></li>
                <li><Link to="/expert-services/new">Add Expert Service</Link></li>
                <li><Link to="/get-experts-by-service">Experts by Service   </Link></li>


                <h1>Payment</h1>
                <li><Link to="/payments">Payments</Link></li>
                <li><Link to="/payments/new">Add Payment</Link></li>
                <li><Link to="/payments-by-id">Payment By ID</Link></li>
                
                <h1>Logs</h1>
                <li><Link to="/plant-care-logs">Plant Care Logs</Link></li>
                <li><Link to="/plant-care-logs/new">Add Plant Care Log</Link></li>

                <h1>PlantType</h1>
                <li><Link to="/plant-types">Plant Types</Link></li>
                <li><Link to="/plant-types/new">Add Plant Type</Link></li>
                <li><Link to="/plant-types-byId">Plant Type by Id</Link></li>

                <h1>PlantType Service</h1>
                <li><Link to="/plant-type-services">Plant Type Services</Link></li>
                <li><Link to="/plant-type-services/new">Add Plant Type Service</Link></li>

                <h1>AppointmentService</h1>
                <li>
                    <Link to="/appointment-services">Appointment Services</Link>
                </li>
                <li>
                    <Link to="/add-appointment-services">Create Appointment Services</Link>
                </li>
                <li>
                    <Link to="/ap-by-se">Ap. by Se.ID</Link>
                </li>
                <li>
                    <Link to="/se-by-ap">Se. by Ap.ID</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
