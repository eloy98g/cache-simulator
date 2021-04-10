import React from 'react';
import '../styles/components/ItemSelection.scss';

const ItemSelection = (props) => {
  const handleClick = (item) => {
    const currentElement = document.getElementsByClassName('selected');
    const newElement = document.getElementById(item);

    console.log(`current: ${currentElement[0].id}`);
    console.log(`nuevo: ${newElement.id}`);

    newElement.classList.add('selected');
    if(currentElement.length > 0){
      currentElement[0].classList.remove('selected');
    }
  };

  const pps = { ...props };
  return (
    <div className="container">
      {pps.items.map((item) => (
        <button
          type="button"
          className={pps.items.indexOf(item) === 0 ? 'item selected' : 'item'}
          id={item}
          onClick={() => handleClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default ItemSelection;
