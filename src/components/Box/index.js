import React, { Component } from "react";
import styled from "styled-components";
import BoxDescription from "../BoxDescription";

let BoxStyle = styled.div`
  left: ${props => (props.active ? "" : props.left)}%!important;
  top: ${props => (props.active ? "" : props.top)}%!important;
  background: black;
  width: ${props => (props.active ? "" : props.width)}%!important;
  height: ${props => (props.active ? "" : props.height)}%!important;
  display: ${props => (props.active == "invisible" ? "display: none" : "")};
`;

let BoxBackground = styled.div`
  -webkit-filter: grayscale(100%);
  background-size: cover !important;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/poolwithme-f854f.appspot.com/o/D10s9q9X0AETD0D.jpg?alt=media&token=0ee75088-34a1-4d8b-8d07-dd32edfb9675") !important;
`;

let Layer = styled.div`
  background-color: rgba(
    ${props => props.color},
    ${props => props.color},
    ${props => props.color},
    0.7
  );
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBox: false
    };
  }
  getGreyColor = () => {
    return Math.random() * 100;
  };

  onClick = () => {
    this.props.onClick();
    this.setState({
      activeBox: true
    });
  };
  render() {
    return (
      <div onClick={this.onClick}>
        <BoxStyle
          id="about"
          active={this.state.activeBox}
          className={`box ${
            this.state.activeBox ? "active" : this.props.active
          }`}
          left={this.props.left}
          top={this.props.top}
          width={this.props.width}
          height={this.props.width}
        >
          <BoxBackground className="header">
            <Layer color={this.getGreyColor()}>
              <nav>
                <h2>
                  <a href="#">
                    <span>{this.props.name}</span>
                  </a>
                </h2>
              </nav>
            </Layer>
          </BoxBackground>
          {this.props.active? <BoxDescription /> : ""}
        </BoxStyle>
      </div>
    );
  }
}
