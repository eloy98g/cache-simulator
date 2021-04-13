import React from 'react';
import '../styles/components/ItemSelection.scss';

const ItemSelection = (props) => {
  const pps = { ...props };

  const handleClick = (item) => {
    const currentElement = document
      .getElementById(pps.name)
      .getElementsByClassName('selected');
    const newElement = document.getElementById(item);

    if (currentElement.length > 0) {
      currentElement[0].classList.remove('selected');
    }
    newElement.classList.add('selected');
  };

  return (
    <div id={pps.name} className="container">
      {pps.items.map((item) => (
        <button
          type="button"
          className={pps.items.indexOf(item) === 0 ? `item selected` : `item`}
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
