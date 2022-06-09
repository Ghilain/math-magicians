import React from 'react';
import '../components/calculator.css';
import { LoremIpsum } from 'react-lorem-ipsum';

const Homepage = () => (
  <div className="homeText">
    <h2>Welcome to our Page!</h2>
    <LoremIpsum p={2} />
  </div>
);

export default Homepage;
