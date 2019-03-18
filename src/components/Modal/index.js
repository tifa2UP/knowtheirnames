import React from 'react';
import styled, { keyframes } from 'styled-components';

import Logo from '../Logo';
import BoxDescription from '../BoxDescription';
import { connect } from 'react-redux';
import { toggleModal } from '../../redux/actions';

let Background = styled.div`
  flex: 1;
  -webkit-filter: grayscale(100%);
  background-size: cover !important;
  background-image: url(${props => props.image}) !important;
`;

class Modal extends React.Component {
  render() {
    const memorial = this.props.currentMemorial
    return (
      this.props.showModal ? (
        <Contianer>
        <nav>
          <a id="back" onClick={this.props.onClose}>
            <i className="fa fa-times" />
          </a>
        </nav>
        <Logo />
        <Background {...this.props.currentMemorial}>
          <BoxDescription />
        </Background>
      </Contianer>
      ) 
      : null
    )
  }
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Contianer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-flow: column;
  padding: 80px 20px 20px;
  overflow-y: hidden;
  background: black;
  opacity: 1;
  animation-name: ${ fadeIn };
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 350ms;
  z-index: 100;

  a {
    cursor: pointer;
    color: #fff !important;
  }
`;

const mapDispatchToProps = (dispatch) => {
  return ({
    onClose: () => dispatch(toggleModal()),
  })
}

const mapStateToProps = (state) => {
  return {
    showModal: state.showModal,
    currentMemorial: state.currentMemorial,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);