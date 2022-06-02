import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {

      total: 0,
      next: '',
      operation: '',
    };
  }

  handleClick(e) {
    const GetValue = e.target.value;
    this.setState((state) => calculate({
      next: state.next,
      total: state.total,
      operation: state.operation,
    }, GetValue));
  }

  // Change code above this line
  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="calcContainer">
        <div className="inputCalc">
          <p>
            {total}
            {' '}
            {operation}
            {' '}
            {next}
            {' '}
          </p>
        </div>
        <div className="buttonContainer">
          <div className="calcNumber">
            <div className="calcNumber1">
              <button type="button" onClick={this.handleClick} className="ac itemcalc heightbtn" value="AC">AC</button>
              <button type="button" onClick={this.handleClick} className="addneg itemcalc heightbtn" value="+/-">+/-</button>
              <button type="button" onClick={this.handleClick} className="percent itemcalc heightbtn" value="%">%</button>
              <button type="button" onClick={this.handleClick} className="seven itemcalc heightbtn" value="7">7</button>
              <button type="button" onClick={this.handleClick} className="eight itemcalc heightbtn" value="8">8</button>
              <button type="button" onClick={this.handleClick} className="nine itemcalc heightbtn" value="9">9</button>
              <button type="button" onClick={this.handleClick} className="four itemcalc heightbtn" value="4">4</button>
              <button type="button" onClick={this.handleClick} className="five itemcalc heightbtn" value="5">5</button>
              <button type="button" onClick={this.handleClick} className="six itemcalc heightbtn" value="6">6</button>
              <button type="button" onClick={this.handleClick} className="one itemcalc heightbtn" value="1">1</button>
              <button type="button" onClick={this.handleClick} className="two itemcalc heightbtn" value="2">2</button>
              <button type="button" onClick={this.handleClick} className="three itemcalc heightbtn" value="3">3</button>
            </div>

            <div className="calcNumber2">
              <button type="button" onClick={this.handleClick} className="zero itemcalc1 heightbtn" value="0">0</button>
              <button type="button" onClick={this.handleClick} className="dot itemcalc1 heightbtn" value=".">.</button>
            </div>

          </div>

          <div className="calcOperators">
            <button type="button" onClick={this.handleClick} className="divid" value="÷">÷</button>
            <button type="button" onClick={this.handleClick} className="times" value="x">&times;</button>
            <button type="button" onClick={this.handleClick} className="minus" value="-">-</button>
            <button type="button" onClick={this.handleClick} className="add" value="+">+</button>
            <button type="button" onClick={this.handleClick} className="equal" value="=">=</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
