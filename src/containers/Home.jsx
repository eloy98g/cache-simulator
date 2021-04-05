import React from 'react';
import InputLightButton from '../components/InputLightButton';
import '../styles/containers/Home.scss';

const Home = () => {
  return (
    <>
      <div className="window">
        <div className="window-content">
          <p>CACHE SIMULATOR</p>
          <InputLightButton />
        </div>
      </div>
    </>
  )
}

export default Home;