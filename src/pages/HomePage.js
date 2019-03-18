import React, { Component } from "react";

import Modal from '../components/Modal';
import Box from "../components/Box";
import Logo from '../components/Logo';
import { format } from "url";
class HomePage extends Component {
  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

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
      if (left === 100) {
        left = 0;
        top += increment;
      }
    }
    return result;
  }
  render() {
    let array = require("../memorial.json");
    // array = this.shuffle(array);

    let boxDimensions = this.getBoxDimensions(array.length);
    let BoxRenders = array.map(box => (
      <Box
        name={box.name}
        key={box.name}
        id={JSON.parse(box.id)}
        top={boxDimensions[array.indexOf(box)].top}
        left={boxDimensions[array.indexOf(box)].left}
        width={boxDimensions[array.indexOf(box)].width}
        notes={box.notes}
        image={box.picture_url}
      />
    ));
    return (
      <div>
        <Logo />
        <div className={'boxes'}>
          {BoxRenders}
        </div>
        <Modal/>
      </div>
    );
  }
}

export default HomePage;
