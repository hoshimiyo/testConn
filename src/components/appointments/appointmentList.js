import React, { useEffect, useState } from 'react';
import { getAllAppointments } from '../../api/appointments';

const AppointmentList = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchAppointments = async () => {
            const data = await getAllAppointments();
            setAppointments(data);
        };
        fetchAppointments();
    }, []);

    return (
        <div>
            <h1>Appointments</h1>
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment.id}>{appointment.title} - {appointment.date}</li>
                ))}
            </ul>
        </div>
    );
};

export default AppointmentList;
