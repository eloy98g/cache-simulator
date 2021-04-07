/* eslint-disable */
import React from 'react';
import '../styles/containers/Dashboard.scss';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard-content">
        <div className="sidebar">
          <div className="sb-buttons">
            <button type="button" className="sb-button">
              Simulador
            </button>
            <button type="button" className="sb-button">
              Manual Usuario
            </button>
            <button type="button" className="sb-button">
              Cuenta
            </button>
          </div>
          <Link to="/">
            <button type="button" className="sb-button">
              Cerrar Sesión
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
