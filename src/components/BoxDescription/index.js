import React, { Component } from "react";
import Clipboard from 'react-clipboard.js';
import styled from "styled-components";
import "./share-bar.css";

const ContributeDiv = styled.div`
  visibility: visible;
  position: absolute;
  top: 10%;
  right: 10%;
  z-index: 2;
  padding-right: 10%;
  color: #fff;
`;

export default class BoxDescription extends Component {
  getNotes = () => {
    if (this.props.notes != "") {
      return this.props.notes;
    } else {
      return <a href="">share their story</a>;
    }
  };

  render() {
    const clipboardMessage = 'Read ' + this.props.name + '\'s story ' + window.location.href;

    return (
      <div>
        <div className="header-title invisible">
        {/* <ContributeDiv className="invisible"> contribute to this profile</ContributeDiv> */}
          <div className="row">
            <div />
            <div className="large-8 columns">
              <h2>{this.props.name}</h2>
              <p>{this.getNotes()}</p>
            </div>
            <div className="share-bar">
              <ul className="vertical medium-horizontal menu">
                <li><a href="#0"><i className="fa fab fa-facebook-square"></i> <span>Share on Facebook</span></a></li>
                <li><a href="#0"><i className="fa fab fa-twitter-square"></i> <span>Share on Twitter</span></a></li>
                <li><a href="#0"><i className="fa fab fa-linkedin"></i> <span>Share on LinkedIn</span></a></li>
                <li><Clipboard component="a" button-href="#" data-clipboard-text={clipboardMessage}><i className="fa fas fa-link"></i> Copy Link </Clipboard></li>
              </ul>
            </div>
          </div>
        </div>
        <nav>
          <a href="/" id="back" style={{ color: "#fff" }}>
            <i className="fa fa-close" />
          </a>
        </nav>
      </div>
    );
  }
}
