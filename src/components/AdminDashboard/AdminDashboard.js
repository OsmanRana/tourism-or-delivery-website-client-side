import React from 'react';
import { useHistory } from 'react-router';
import useAuth from '../Hooks/useAuth';
import useBooking from '../Hooks/useBooking';
import AdminDashboardInfo from './AdminDashboardInfo';
import AddNewPackage from './AddNewPackage';


const AdminDashboard = () => {
    const { booking } = useBooking();
    const history = useHistory()
    const { user } = useAuth();
    return (
        <div>
            <hr />
            <h2 className="text-center text-secondary">This is Admin Dashboard</h2>
            <hr />
            <h2 className="text-center text-primary">Manage All Bookings</h2>
            <hr />
            <div>
            <div className=" row row-cols-md-3 ">
                {
                    booking?.map(booked => <AdminDashboardInfo
                        key={booked._id}
                        booked={booked}
                    ></AdminDashboardInfo>
                    )
                }
            </div>
            <AddNewPackage></AddNewPackage>
            </div>
            {
                !user.email && history.push('/home')
            }
        </div>
    );
};

export default AdminDashboard;