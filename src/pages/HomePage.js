import React, { Component } from "react";

import Modal from '../components/Modal';
import Box from "../components/Box";
import Logo from '../components/Logo';
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

const DownPillStyle = styled.div`
  position: fixed;
  bottom: 20px;
  right: 10px;
  color: black;
  background: white;
  width: fit-content;
  border-radius: 90px;
  box-shadow: 0 8px 18px 0 rgba(34, 49, 89, 0.1);
  cursor: pointer;
  height: 40px;
  width: 40px;
  text-decoration: none !important;

  @keyframes chevron-animation {
    0% {
      bottom: 5vh;
    }
    50% {
      bottom: 4vh;
    }
  }
`;

const I = styled.i`
  animation-name: chevron-animation;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  will-change: auto;
  padding-top: 10px;
  font-size: 24px;

  @keyframes chevron-animation {
    0% {
      bottom: 5vh;
    }
    50% {
      bottom: 4vh;
    }
  }
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
    console.log(document.documentElement.scrollTop);
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
      <Box
        name={box.name}
        key={box.name}
        id={JSON.parse(box.id)}
        top={boxDimensions[array.indexOf(box)].top}
        left={boxDimensions[array.indexOf(box)].left}
        width={boxDimensions[array.indexOf(box)].width}
        notes={box.notes}
        image={box.picture_url}
        onClose={this.onClose}
        onClick={this.activateBox}
      />
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

    const DownPill = (
      <DownPillStyle onMouseDown={() => window.scrollBy(0, 200)}>
        <I style={{}} className="fa fa-angle-down" />
      </DownPillStyle>
    );
    return (
      <div onScroll={this.onScroll} style={{ scrollBehavior: "smooth" }}>
        <Logo />
        <div className={'boxes'}>
          {BoxRenders}
        </div>
        {DonationsPill}
        {this.state.activeBox ? "" : DownPill}
        <Modal />
      </div>
    );
  }
}

export default HomePage;
