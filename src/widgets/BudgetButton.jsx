import React from 'react';
import '../styles/components/ContactForm.scss';

const BudgetButton = () => {
  const items = ['3k', '5k', '10k', '20k', '40k', '60k', 'más']; // icon: &#x1F4B0;
  const spans = ['span0', 'span1', 'span2' ,'span3', 'span4', 'span5'];
  let first = null; 
  let second = null;
  let budget = [];
  
  const setBackground = () => {
    let firstButton = null;
    let secondButton = null;
    let aux;
    
    for(let i = 0; i<items.length; i +=1){
      if(first === items[i]){
        firstButton = i;
      }
      if(second === items[i]){
        secondButton = i;
      }
    }

    if(firstButton > secondButton){
      aux = firstButton;
      firstButton = secondButton;
      secondButton = aux;
    }
    for(let i = 0; i<spans.length; i +=1){
      if(i >= firstButton && i < secondButton){
        document.getElementById(spans[i]).classList.add('selected');
        document.getElementById(items[i]).classList.add('between');
      }
    }
  }

  const resetBackground = () => {
    for(let i = 0; i<spans.length; i +=1){
      document.getElementById(spans[i]).classList.remove('selected');
      document.getElementById(items[i]).classList.remove('between');
    }
  }

  const handleButton = (elementId) => {
    const element = document.getElementById(elementId);
    resetBackground();
    budget = [];
    if(element.classList.contains('selected')){
      element.classList.remove('selected');
      if(elementId === first){
        first = second;
        second = null;
      }
      else if(elementId === second){
        second = null;
      }
    }
    else {
      element.classList.add('selected');
      if(first === null){
        first = elementId;
      }else if(second === null){
        second = elementId;
      }else{
        document.getElementById(first).classList.remove('selected');
        first = second;
        second = elementId;
      }
    }
    if(first !== null && second !== null){
      budget.push(first);
      budget.push(second);
      setBackground();
    }
    console.log(budget);
  }
  
  const BudgetSpan = (id) => {
    return (
      <div className='budget-span' id={id} />
    )
  }

  const BudgetItem = ( name ) => {
    return (
      <button 
        className='interest-button budget-item'
        type='button'
        id={name}
        onClick={() => handleButton(name)}
      >
        <p>{name}</p>
      </button>
    )
  }

  return (
    <div className="budget-buttons">
      {items.map(item => (
        BudgetItem(item)
      ))}
      <div className="budget-span__container">
        {spans.map(item => (
            BudgetSpan(item)
        ))}
      </div>
    </div>
  )
}

export default BudgetButton;
