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
  background-image: url("https://firebasestorage.googleapis.com/v0/b/poolwithme-f854f.appspot.com/o/D10s9q9X0AETD0D.jpg?alt=media&token=0ee75088-34a1-4d8b-8d07-dd32edfb9675") !important;
`;

class Modal extends React.Component {
  render() {
    return (
      this.props.showModal ? (
        <Contianer >
        <nav>
          <a id="back" onClick={this.props.onClose}>
            <i className="fa fa-times" />
          </a>
        </nav>
        <Logo />
        <Background>
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
  animation-duration: 500ms;

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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);