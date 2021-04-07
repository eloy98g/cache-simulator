/* eslint-disable */
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/containers/Home.scss';

/* Local Widgets */
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
        Log In
      </button>
    </Link>
  );
};

/* Component */

const Home = () => {
  const [isUser, setIsUser] = useState(false);

  const handleChange = () => {
    setIsUser(!isUser);
  };

  return (
    <div className="window">
      <div className="window-content">
        <h3 className="title">{isUser ? 'User Login': 'Admin Login'}</h3>
        <InputButton text="Username or Email" />
        <InputButton text="Password" />
        <LoginButton />
        <p className="link" onClick={() => handleChange()}>
          {isUser ? 'Acceso como Administrador': 'Acceso como Usuario'}
        </p>
      </div>
    </div>
  );
};

export default Home;
