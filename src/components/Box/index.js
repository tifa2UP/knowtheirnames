import React, { Component } from "react";
import styled from "styled-components";
import BoxDescription from "../BoxDescription";

let BoxStyle = styled.div`
  left: ${props => (props.active ? "" : props.left)}%!important;
  top: ${props => (props.active ? "" : props.top)}%!important;
  background: black;
  width: ${props => (props.active ? "" : props.width)}%!important;
  height: ${props => (props.active ? "" : props.height)}%!important;
  display: ${props => (props.active === "invisible" ? "display: none" : "")};
`;

let BoxBackground = styled.div`
  filter: grayscale(100%);
  -webkit-filter: grayscale(100%);
  background-size: cover !important;
  background-image: url(${props => props.image}) !important;
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

  ${BoxStyle}:hover & {
    background-color: rgba(
      ${props => props.color},
      ${props => props.color},
      ${props => props.color},
      0.3
    );
  }
`;

export default class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeBox: false
    };
  }
  getGreyColor = () => {
    return Math.round(Math.random() * 100);
  };

  onClick = () => {
    document.body.style.overflow = "hidden";
    this.props.onClick();
    this.setState({
      activeBox: true
    });
  };

  onClose = () => {
    console.log("onClose called");
    this.setState({
      activeBox: false
    });
    this.props.onClose();
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
          <BoxBackground className="header" image={this.props.image}>
            <Layer className="header__layer" color={this.getGreyColor()}>
              <nav>
                <h2>
                  <a href="#">
                    <span>{this.props.name}</span>
                  </a>
                </h2>
              </nav>
            </Layer>
          </BoxBackground>
          {this.props.active ? (
            <BoxDescription
              name={this.props.name}
              notes={this.props.notes}
              onClose={this.onClose}
            />
          ) : (
            ""
          )}
        </BoxStyle>
      </div>
    );
  }
}
