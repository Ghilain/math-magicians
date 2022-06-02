import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Change code above this line
  render() {
    return (
      <div className="calcContainer">
        <div className="inputCalc">0</div>
        <div className="calcNumber">

          <div className="calcNumber1">
            <button type="button" className="ac itemcalc">AC</button>
            <button type="button" className="addneg itemcalc">+/-</button>
            <button type="button" className="percent itemcalc">%</button>
            <button type="button" className="seven itemcalc">7</button>
            <button type="button" className="eight itemcalc">8</button>
            <button type="button" className="nine itemcalc">9</button>
            <button type="button" className="four itemcalc">4</button>
            <button type="button" className="five itemcalc">5</button>
            <button type="button" className="six itemcalc">6</button>
            <button type="button" className="one itemcalc">1</button>
            <button type="button" className="two itemcalc">2</button>
            <button type="button" className="three itemcalc">3</button>
          </div>

          <div className="calcNumber2">
            <button type="button" className="zero itemcalc1">0</button>
            <button type="button" className="dot itemcalc1">.</button>
          </div>

        </div>

        <div className="calcOperators">
          <button type="button" className="divid">÷</button>
          <button type="button" className="times">&times;</button>
          <button type="button" className="minus">-</button>
          <button type="button" className="add">+</button>
          <button type="button" className="equal">=</button>
        </div>
      </div>
    );
  }
}
export default Calculator;
