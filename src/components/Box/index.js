import React, { Component } from "react";
import styled from "styled-components";

let BoxStyle = styled.div`
  left: ${props => props.left}%!important;
  top: ${props => props.top}%!important;
  background: black;
  width: 25%;
  height: 25%;
`;

let BoxBackground = styled.div`
  -webkit-filter: grayscale(100%);
  background-size: cover !important;
  background-image: url("https://firebasestorage.googleapis.com/v0/b/poolwithme-f854f.appspot.com/o/D10s9q9X0AETD0D.jpg?alt=media&token=0ee75088-34a1-4d8b-8d07-dd32edfb9675") !important;
`;

let Layer = styled.div`
  background-color: rgba(248, 247, 216, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default class Box extends Component {
  render() {
    return (
      <div>
        <BoxStyle
          id="about"
          className="box"
          left={this.props.left}
          top={this.props.top}
        >
          <BoxBackground className="header">
            <Layer>
              <nav>
                <h2>
                  <a href="#">
                    <span>{this.props.name}</span>
                  </a>
                </h2>
              </nav>
            </Layer>
          </BoxBackground>
        </BoxStyle>
      </div>
    );
  }
}
