import React, { Component } from "react";
import Box from '../components/Box';

class HomePage extends Component {
  render() {
    return (
      <div>
        <div className="logo">
          <a href="index.html">AOKO.</a>
        </div>
        <Box />
        <Box />
        <Box />
        <Box />
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
