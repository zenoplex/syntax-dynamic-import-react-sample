// @flow
import React from 'react';
import { Link } from 'react-router';

const About = () =>
  <div>
    <h1>ABOUT</h1>

    <div><Link to="/dynamic">Jump to dynamic</Link></div>
    <div><Link to="/">Jump to home</Link></div>
  </div>;

export default About;
