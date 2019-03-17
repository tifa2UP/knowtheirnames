import React, { Component } from "react";
import styled from "styled-components";
import { connect } from 'react-redux';

import { toggleModal, setCurrentMemorial } from '../../redux/actions';
import BoxDescription from "../BoxDescription";

let BoxStyle = styled.div`
  left: ${props => props.left}%!important;
  top: ${props => props.top}%!important;
  background: black;
  width: ${props =>  props.width}%!important;
  height: ${props => props.height}%!important;
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

class Box extends Component {
  getGreyColor = () => {
    return Math.random() * 100;
  };
  onClick = () => {
    this.props.toggleModal();
    this.props.setCurrentMemorial(this.props.id)
  };

  onClose = () => {
    this.props.toggleModal();
  };

  render() {
    return (
      <div onClick={this.onClick}>
        <BoxStyle
          id="about"
          className={`box`}
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
        </BoxStyle>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return ({
    showModal: state.showModal,
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: () => dispatch(toggleModal()),
    setCurrentMemorial: (id) => dispatch(setCurrentMemorial(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Box);
