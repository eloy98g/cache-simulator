import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/containers/Home.scss';

const InputButton = (props) => {
  const pps = { ...props };
  return (
    <input
      className="input"
      type="text"
      autoComplete="off"
      name="name"
      placeholder={pps.text}
      required
    />
  );
};

const LoginButton = () => {
  return (
    <Link to="/dashboard">
      <button type="button" className="button">
        {' '}
        Log In
      </button>
    </Link>
  );
};

const Home = () => {
  return (
    <div className="window">
      <div className="window-content">
        <h3 className="title">User login</h3>
        <InputButton text="Username or Email" />
        <InputButton text="Password" />
        <LoginButton />
        <a className="link" href="/">
          Acceso como administrador
        </a>
      </div>
    </div>
  );
};

export default Home;
