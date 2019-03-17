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

  activateBox = () => {
    this.setState({
      activeBox: true
    });
  };

  onClose = () => {
    this.setState({
      activeBox: false
    });
  };
  render() {
    let array = [];
    for (let i = 0; i < 48; i++) {
      array.push(i);
    }
    let boxDimensions = this.getBoxDimensions(array.length);
    console.log(boxDimensions);
    let BoxRenders = array.map(box => (
      <div>
        <Box
          name={"Abdellatif Abdelfattah"}
          key={box}
          top={boxDimensions[array.indexOf(box)].top}
          left={boxDimensions[array.indexOf(box)].left}
          width={boxDimensions[array.indexOf(box)].width}
          onClick={this.activateBox}
          notes={
            "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum"
          }
          onClose={this.onClose}
          active={this.state.activeBox ? "invisible" : ""}
        />
      </div>
    ));
    return (
      <div>
        <div className="logo">
          <a href="index.html" style={{ color: "white" }}>
            KNOW THEIR NAMES.
          </a>
        </div>
        {BoxRenders}
      </div>
    );
  }
}

export default HomePage;
