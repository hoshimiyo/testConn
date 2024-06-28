import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ServiceList from './components/services/serviceList';
import ServiceDetail from './components/services/serviceDetail';
import ServiceForm from './components/services/serviceForm';
import Register from './components/accounts/register';
import Login from './components/accounts/login';
import ChangeRole from './components/accounts/changeRole';
import AppointmentList from './components/appointments/appointmentList';
import AppointmentForm from './components/appointments/appointmentForm';
import ReviewList from './components/reviews/reviewList';
import ReviewForm from './components/reviews/reviewForm';
import ExpertServiceList from './components/expertServices/expertServiceList';
import ExpertServiceForm from './components/expertServices/expertServiceForm';
import PaymentList from './components/payments/paymentList';
import PaymentForm from './components/payments/paymentForm';
import PlantCareLogList from './components/plantCareLogs/plantCareLogList';
import PlantCareLogForm from './components/plantCareLogs/plantCareLogForm';
import PlantTypeList from './components/plantTypes/plantTypeList';
import PlantTypeForm from './components/plantTypes/plantTypeForm';
import PlantTypeServiceList from './components/plantTypesServices/plantTypeServiceList';
import PlantTypeServiceForm from './components/plantTypesServices/plantTypeServiceForm';


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<ServiceList />} />
                <Route path="/services/new" element={<ServiceForm isEditMode={false} />} />
                <Route path="/services/:id/edit" element={<ServiceForm isEditMode={true} />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/change-role" element={<ChangeRole />} />
                <Route path="/appointments" element={<AppointmentList />} />
                <Route path="/appointments/new" element={<AppointmentForm isEditMode={false} />} />
                <Route path="/appointments/:id/edit" element={<AppointmentForm isEditMode={true} />} />
                <Route path="/reviews" element={<ReviewList />} />
                <Route path="/reviews/new" element={<ReviewForm isEditMode={false} />} />
                <Route path="/reviews/:id/edit" element={<ReviewForm isEditMode={true} />} />
                <Route path="/expert-services" element={<ExpertServiceList />} />
                <Route path="/expert-services/new" element={<ExpertServiceForm />} />
                <Route path="/payments" element={<PaymentList />} />
                <Route path="/payments/new" element={<PaymentForm isEditMode={false} />} />
                <Route path="/payments/:id/edit" element={<PaymentForm isEditMode={true} />} />
                <Route path="/plant-care-logs" element={<PlantCareLogList />} />
                <Route path="/plant-care-logs/new" element={<PlantCareLogForm isEditMode={false} />} />
                <Route path="/plant-care-logs/:id/edit" element={<PlantCareLogForm isEditMode={true} />} />
                <Route path="/plant-types" element={<PlantTypeList />} />
                <Route path="/plant-types/new" element={<PlantTypeForm isEditMode={false} />} />
                <Route path="/plant-types/:id/edit" element={<PlantTypeForm isEditMode={true} />} />
                <Route path="/plant-type-services" element={<PlantTypeServiceList />} />
                <Route path="/plant-type-services/new" element={<PlantTypeServiceForm />} />
            </Routes>
        </Router>
    );
};

export default App;
