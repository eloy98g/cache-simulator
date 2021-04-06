import React from 'react';
import '../styles/containers/Home.scss';

const InputButton = (props) => {
  const pps = {...props}
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
    <button type="button" className="button">
      {' '}
      Log In
    </button>
  );
};

const Home = () => {
  return (
    <>
      <div className="window">
        <div className="window-content">
          <p>CACHE SIMULATOR</p>
          <InputButton text="Username or Email" />
          <InputButton text="Password" />
          <LoginButton />
        </div>
      </div>
    </>
  );
};

export default Home;
