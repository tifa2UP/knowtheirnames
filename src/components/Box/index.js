import React, { Component } from "react";
import styled from "styled-components";
import BoxDescription from "../BoxDescription";

let BoxStyle = styled.div`
  left: ${props => (props.active ? 0 : props.left)}%!important;
  ${
    ""
    /**
     * - We cannot use position: fixed for active state b/c
     *   - it's always a fixed position from the top so 100% is below the screen even when we scroll
     *   - - so something that is on the screen with position: absolute gets taken out, then animates to the top
     * - So instead we keep position: absolute and just position to how far the user has scrolled from the top of the page
     **/
  }
  top: ${props =>
    props.active ? window.pageYOffset + "px" : props.top + "%"}!important;
  background: black;
  width: ${props => (props.active ? "100" : props.width)}%!important;
  height: ${props => (props.active ? "100" : props.height)}%!important;
  ${
    "" /* display: ${props => (props.active === "invisible" ? "display: none" : "")}; */
  }
`;

let BoxBackground = styled.div`
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
    // console.log("Box onClick");
    document.body.style.overflow = "hidden";
    if (this.props.onClick && typeof this.props.onClick === "function") {
      this.props.onClick();
    }
    this.setState({
      activeBox: true
    });
  };

  onClose = () => {
    // console.log("onClose called");
    document.body.style.overflow = "";
    this.setState({
      activeBox: false
    });
    this.props.onClose();
  };

  render() {
    // console.log("rendered: ", this.props.name, this.props.active);
    return (
      <div onClick={this.onClick}>
        <BoxStyle
          id="about"
          active={this.state.activeBox}
          className={`box box--about ${this.state.activeBox ? "active" : ""}`}
          left={this.props.left}
          top={this.props.top}
          width={this.props.width}
          height={this.props.width}
        >
          <BoxBackground className="header" image={this.props.image}>
            <Layer className="header__layer" color={this.getGreyColor()}>
              <nav>
                <h2>
                  <a className="cursor--pointer">
                    <span>{this.props.name}</span>
                  </a>
                </h2>
              </nav>
            </Layer>
          </BoxBackground>
          {this.state.activeBox ? (
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
