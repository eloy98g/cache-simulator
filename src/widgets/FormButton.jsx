import React from 'react';

const FormButton = ({ name, handleButton }) => {
  return (
    <button 
      className='interest-button'
      type='button'
      id={name}
      onClick={() => handleButton(name)}
    >
      <p>{name}</p>
    </button>
  )
}

export default FormButton;
