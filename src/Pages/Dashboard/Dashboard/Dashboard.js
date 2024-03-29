import React from 'react';
import { Col } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
    return (
        <section style={{ marginTop: '100px' }}>
            <div className="row container-fluid">

                <Col xs={12} md={2}>
                    <Sidebar></Sidebar>
                </Col>
                <Col xs={12} md={10}>
                    {/* <h1 style={{ marginTop: '50px' }}>Welcome to  Dashboard</h1> */}
                    <Outlet />
                </Col>
            </div>
        </section>
    );
};

export default Dashboard;