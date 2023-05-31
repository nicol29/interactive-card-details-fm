import React from 'react';
import { useState } from 'react';
import './styles/App.scss';
import Form from './form';
import { CardState, Errors } from './Interfaces';


function App() {
  const [cardState, setCardState] = useState<CardState>({
    cardNum: null,
    name: "JANE APPLESEED",
    date: {
      month: null,
      year: null
    },
    cvc: null
  });

  const [errors, setErrors] = useState<Errors>({
    name: null,
    cardNum: null,
    month: null,
    year: null,
    cvc: null
  });

  return (
    <div className="App">
      <div className="colour-img-bg">
        <div className="cvc-card">
          <p>{cardState.cvc}</p>
        </div>
        <div className="main-card">
          <svg width="84" height="47" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="23.478" cy="23.5" rx="23.478" ry="23.5" fill="#fff"/><path d="M83.5 23.5c0 5.565-4.507 10.075-10.065 10.075-5.559 0-10.065-4.51-10.065-10.075 0-5.565 4.506-10.075 10.065-10.075 5.558 0 10.065 4.51 10.065 10.075Z" stroke="#fff"/></svg>
          <p className="card-num">{cardState.cardNum}</p>
          <div className="name-date-section">
            <p>{cardState.name}</p>
            <p>{cardState.date.month}/<span>{cardState.date.year}</span></p>
          </div>
        </div>
      </div>
      <Form 
        errors={errors} 
        setErrors={setErrors}
        cardState={cardState} 
        setCardState={setCardState}
      />
    </div>
  );
}

export default App;

