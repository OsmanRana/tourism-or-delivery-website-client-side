import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../Hooks/useAuth';
import useBooking from '../Hooks/useBooking';
import AdminDashboardInfo from './AdminDashboardInfo';


const AdminDashboard = () => {
    const { booking } = useBooking();
    const history = useHistory()
    const {user} = useAuth();
    return (
        <div>
            <h2 className="text-center">This is Admin Dashboard</h2>
            {
                booking?.map(booked => <AdminDashboardInfo
                    key={booked._id}
                    booked={booked}
                ></AdminDashboardInfo>
                )
            }
            {
                !user.email && history.push('/home')
            }
        </div>
    );
};

export default AdminDashboard;