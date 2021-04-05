import React from 'react';
import '../styles/components/InputLightButton.scss';

const InputLightButton = () => {
  return (
    <input
      className="input"
      type="text"
      autoComplete="off"
      name="name"
      required
    />
  );
};

export default InputLightButton;
