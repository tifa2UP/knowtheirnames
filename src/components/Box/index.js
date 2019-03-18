import React, { Component } from "react";
import styled from "styled-components";
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';

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
`;

class Box extends Component {
  getGreyColor = () => {
    return Math.round(Math.random() * 100);
  };
  onClick = () => {
    this.props.toggleModal();
    this.props.setCurrentMemorial(this.props)
    document.body.style.overflow = 'hidden';
    this.props.onClick();
  };

  onClose = () => {
    this.props.toggleModal();
    document.body.style.overflow = 'scroll';
    this.props.onClose();
  };

  render() {
    return (
      <LazyLoad height={this.props.width}>
        <BoxStyle
          id="about"
          className={`box`}
          left={this.props.left}
          top={this.props.top}
          width={this.props.width}
          height={this.props.width}
          onClick={this.onClick}
        >
          <BoxBackground className="header" image={this.props.image}>
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
      </LazyLoad>
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
