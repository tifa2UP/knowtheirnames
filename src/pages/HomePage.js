import React, { Component } from "react";
import Box from '../components/Box';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="logo">
          <a href="index.html">AOKO.</a>
        </div>
        <Box name="abc" top="0" left="0"/>
        <Box name="abc" top="0" left="50"/>
        <Box name="abc" top="50" left="0"/>
        <Box name="abc" top="50" left="50"/>
 
        <nav>
          <a href="#" id="back" className="hide">
            <i className="fa fa-close" />
          </a>
        </nav>
      </div>
    );
  }
}

export default HomePage;
