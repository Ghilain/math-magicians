import React from 'react';
import '../components/calculator.css';
import Calculator from '../components/Calculator';

const Calculatorpage = () => (
  <div className="mainContainer">
    <div className="textDiv">
      <p>
        Let&apos;s do some math!
      </p>
    </div>
    <Calculator />
  </div>
);

export default Calculatorpage;
