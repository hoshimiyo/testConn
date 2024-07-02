import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import ServiceList from './components/services/serviceList';
import ServiceDetail from './components/services/serviceDetail';
import ServiceForm from './components/services/serviceForm';

import RegisterForm from './components/accounts/register';
import LoginForm from './components/accounts/login';
import ChangeRole from './components/accounts/changeRole';

import AppointmentList from './components/appointments/appointmentList';
import AppointmentForm from './components/appointments/appointmentForm';
import AppointmentDetail from './components/appointments/appointmentDetail';
import CreateAppointment from './components/appointments/appointmentForm';
import DeleteAppointment from './components/appointments/deleteAppointment';



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
import ExpertForm from './components/appointments/experA.Form';
import UserForm from './components/appointments/userA.Form';

import AppointmentServicesList from './components/appointmentService/appointmentServiceList';
import CreateAppointmentService from './components/appointmentService/createAppointmentService';
import DeleteAppointmentService from './components/appointmentService/deleteAppointmentService';
import AppointmentDetails from './components/appointmentService/appointmentByService';
import ServiceDetails from './components/appointmentService/servicesByAppointmentId';
import ExpertDetails from './components/expertServices/expertDetail';
import PlantTypeDetails from './components/plantTypes/plantTypeById';
import ReviewDetails from './components/reviews/getReviewById';
import PaymentDetails from './components/payments/paymentById';
import GetServiceById from './components/services/serviceByID';


const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/services" element={<ServiceList />} />
                <Route path="/services/new" element={<ServiceForm isEditMode={false} />} />
                <Route path="/services/:id/edit" element={<ServiceForm isEditMode={true} />} />
                <Route path="/services/:id" element={<ServiceDetail />} />
                <Route path="/services-by-id" element={<GetServiceById />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/change-role" element={<ChangeRole />} />

                <Route path="/appointments" element={<AppointmentList />} />
                <Route path="/appointments/new" element={<AppointmentForm isEditMode={false} />} />
                <Route path="/appointments/:id/edit" element={<AppointmentForm isEditMode={true} />} />
                <Route exact path="/appointmentsDetail" component={AppointmentDetail} />
                <Route path="/appointments/create" component={CreateAppointment} />
                <Route path="/appointments/expert" element={<ExpertForm />} />
                <Route path="/appointments/user" element={<UserForm />} />
                <Route path="/appointments/:id/delete" component={DeleteAppointment} />

                <Route path="/reviews" element={<ReviewList />} />
                <Route path="/reviews/new" element={<ReviewForm isEditMode={false} />} />
                <Route path="/reviews/by-id" element={<ReviewDetails />} />
                <Route path="/reviews/:id/edit" element={<ReviewForm isEditMode={true} />} />

                <Route path="/expert-services" element={<ExpertServiceList />} />
                <Route path="/expert-services/new" element={<ExpertServiceForm />} />
                <Route path="/get-experts-by-service" element={<ExpertDetails />} />

                <Route path="/payments" element={<PaymentList />} />
                <Route path="/payments/new" element={<PaymentForm isEditMode={false} />} />
                <Route path="/payments/:id/edit" element={<PaymentForm isEditMode={true} />} />
                <Route path="/payments-by-id" element={<PaymentDetails/>} />

                <Route path="/plant-care-logs" element={<PlantCareLogList />} />
                <Route path="/plant-care-logs/new" element={<PlantCareLogForm isEditMode={false} />} />
                <Route path="/plant-care-logs/:id/edit" element={<PlantCareLogForm isEditMode={true} />} />

                <Route path="/plant-types" element={<PlantTypeList />} />
                <Route path="/plant-types/new" element={<PlantTypeForm isEditMode={false} />} />
                <Route path="/plant-types/:id/edit" element={<PlantTypeForm isEditMode={true} />} />
                <Route path="/plant-types-byId" element={<PlantTypeDetails/>} />
                
                <Route path="/plant-type-services" element={<PlantTypeServiceList />} />
                <Route path="/plant-type-services/new" element={<PlantTypeServiceForm />} />

                <Route path="/appointment-services" element={<AppointmentServicesList/>} />
                <Route path="/add-appointment-services" element={<CreateAppointmentService/>} />
                <Route path="/delete-appointment-services" element={<DeleteAppointmentService/>} />
                <Route path="/ap-by-se" element={<AppointmentDetails/>} />
                <Route path="/se-by-ap" element={<ServiceDetails/>} />
            </Routes>
        </Router>
    );
};

export default App;
