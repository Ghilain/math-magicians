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
        <div className="buttonContainer">
          <div className="calcNumber">
            <div className="calcNumber1">
              <button type="button" className="ac itemcalc heightbtn">AC</button>
              <button type="button" className="addneg itemcalc heightbtn">+/-</button>
              <button type="button" className="percent itemcalc heightbtn">%</button>
              <button type="button" className="seven itemcalc heightbtn">7</button>
              <button type="button" className="eight itemcalc heightbtn">8</button>
              <button type="button" className="nine itemcalc heightbtn">9</button>
              <button type="button" className="four itemcalc heightbtn">4</button>
              <button type="button" className="five itemcalc heightbtn">5</button>
              <button type="button" className="six itemcalc heightbtn">6</button>
              <button type="button" className="one itemcalc heightbtn">1</button>
              <button type="button" className="two itemcalc heightbtn">2</button>
              <button type="button" className="three itemcalc heightbtn">3</button>
            </div>

            <div className="calcNumber2">
              <button type="button" className="zero itemcalc1 heightbtn">0</button>
              <button type="button" className="dot itemcalc1 heightbtn">.</button>
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
      </div>
    );
  }
}
export default Calculator;
