import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculatorpage from './pages/calcuPage';
import Homepage from './pages/hom';
import Quotepage from './pages/quote';
import Navbar from './pages/Navbar';

class Rendcalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/calculator" element={<Calculatorpage />} />
          <Route path="/quote" element={<Quotepage />} />
        </Routes>
      </div>
    );
  }
}
export default Rendcalculator;
