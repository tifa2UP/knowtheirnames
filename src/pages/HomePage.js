import React, { Component } from "react";

import Box from "../components/Box";
import Logo from '../components/Logo';
import { format } from "url";

class HomePage extends Component {
  getBoxDimensions(size) {
    let result = [];
    let top = 0;
    let left = 0;
    let increment = 100 / (window.innerWidth < 700 ? 2 : 4);
    for (let i = 0; i < size; i++) {
      result.push({
        top: top,
        left: left,
        width: increment
      });
      left += increment;
      if (left == 100) {
        left = 0;
        top += increment;
      }
    }
    return result;
  }
  render() {
    let array = [];
    for (let i = 0; i < 48; i++) {
      array.push(i);
    }
    let boxDimensions = this.getBoxDimensions(array.length);
    console.log(boxDimensions);
    let BoxRenders = array.map(box => (
      <Box
        name={"Abdellatif Abdelfattah"}
        key={box}
        top={boxDimensions[array.indexOf(box)].top}
        left={boxDimensions[array.indexOf(box)].left}
        width={boxDimensions[array.indexOf(box)].width}
        id={box}
        notes={
          "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
        }
      />
    ));
    return (
      <div>
        <Logo />
        <div className={'boxes'}>
        {BoxRenders}
        </div>
      </div>
    );
  }
}

export default HomePage;
