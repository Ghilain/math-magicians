import React from 'react';
import { LoremIpsum } from 'react-lorem-ipsum';
import './pages.css';

const Homepage = () => (
  <div className="homeText">
    <h2>Welcome to our Page!</h2>
    <LoremIpsum p={2} />
  </div>
);

export default Homepage;
