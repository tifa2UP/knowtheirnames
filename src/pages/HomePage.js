import React, { Component } from "react";
import Box from "../components/Box";
import { format } from "url";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBox: false
    };
  }
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
    let increment = 100 / 4;
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

  activateBox = () => {
    this.setState({
      activeBox: true
    });
  };

  onClose = () => {
    console.log("parent onClose called")
    this.setState({
      activeBox: false
    });
    this.forceUpdate()
  };
  render() {
    let array = require("../memorial.json");
    // array = this.shuffle(array);

    let boxDimensions = this.getBoxDimensions(array.length);
    let BoxRenders = array.map(box => (
      <div>
        <Box
          name={box.name}
          key={box.id}
          top={boxDimensions[array.indexOf(box)].top}
          left={boxDimensions[array.indexOf(box)].left}
          width={boxDimensions[array.indexOf(box)].width}
          onClick={this.activateBox}
          notes={box.notes}
          image={box.picture_url}
          onClose={this.onClose}
          active={this.state.activeBox ? "invisible" : ""}
        />
      </div>
    ));
    return (
      <div>
        <div className="logo">
          <a href="/" style={{ color: "white" }}>
            KNOW THEIR NAMES.
          </a>
        </div>
        {BoxRenders}
      </div>
    );
  }
}

export default HomePage;
