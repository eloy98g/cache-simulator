/* eslint-disable */
import React, {useState} from 'react';
import '../styles/containers/Dashboard.scss';
import { Link } from 'react-router-dom';
import SimulatorInput from '../components/SimulatorInput';

const Dashboard = () => {
  const [navItem, setNavItem] = useState(0);

  const navItems = [
    <p>Empty page</p>,
    <SimulatorInput/>,
    <p>Manual</p>,
    <p>Cuenta</p>
  ];

  const handleButton = (index) => {
    setNavItem(index)
  };

  return (
    <div className="dashboard">
      <div className="dashboard-container">
        <div className="sidebar">
          <div className="sb-buttons">
            <button type="button" className="sb-button" onClick={() => handleButton(1)}>
              Simulador
            </button>
            <button type="button" className="sb-button" onClick={() => handleButton(2)}>
              Manual Usuario
            </button>
            <button type="button" className="sb-button" onClick={() => handleButton(3)}>
              Cuenta
            </button>
          </div>
          <Link to="/">
            <button type="button" className="sb-button">
              Cerrar Sesión
            </button>
          </Link>
        </div>
        <div className="dashboard-content">
          {navItems[navItem]}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
