import React, { Component } from "react";
import Box from "../components/Box";
import { format } from "url";
import styled from "styled-components";

const DonationsPillStyle = styled.a`
  position: fixed;
  bottom: 44px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  color: white;
  background: #54b54a;
  padding: 20px;
  width: fit-content;
  border-radius: 90px;
  box-shadow: 0 8px 18px 0 rgba(34, 49, 89, 0.1);
  cursor: pointer;
  text-decoration: none !important;
`;
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBox: false,
      donateInvisible: true
    };
  }
  shuffle = array => {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

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
  };

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
    console.log("parent onClose called");
    this.setState({
      activeBox: false
    });
    this.forceUpdate();
  };

  onScroll = () => {
    console.log(document.documentElement.scrollTop )
    if (document.documentElement.scrollTop < 100) {
    } else {
      this.setState({
        donateInvisible: false
      });
    }
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

    const DonationsPill = (
      <DonationsPillStyle
        className={`appear ${
          this.state.donateInvisible ? "invisible" : "notinvisible"
        }`}
        target="_blank"
        href="https://www.launchgood.com/project/support_for_the_families__victims_of_the_new_zealand_mosque_shootings?src=NZshooting&utm_source=Homepagebanner&utm_medium=1&utm_campaign=NZShooting#!/"
      >
        Donate to the families
      </DonationsPillStyle>
    );
    return (
      <div onScroll={this.onScroll}>
        <div className="logo">
          <a
            href="/"
            style={{ color: "white", textDecoration: "none !important" }}
          >
            KNOW THEIR NAMES.
          </a>
        </div>
        {BoxRenders}
        {DonationsPill}
      </div>
    );
  }
}

export default HomePage;
