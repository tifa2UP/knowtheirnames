import React, { Component } from "react";
import styled from "styled-components";

import './share-bar.css';

export default class BoxDescription extends Component {
  render() {
    return (
      <div>
        <div className="header-title invisible">
          <div className="row">
            <div className="large-8 columns">
              <h2>{this.props.name}</h2>
              <p>{this.props.notes}</p>
            </div>
            <div className="share-bar">
              <ul className="vertical medium-horizontal menu">
                <li><a href="#0"><i className="fa fab fa-facebook-square"></i> <span>Share on Facebook</span></a></li>
                <li><a href="#0"><i className="fa fab fa-twitter-square"></i> <span>Share on Twitter</span></a></li>
                <li><a href="#0"><i className="fa fab fa-linkedin"></i> <span>Share on LinkedIn</span></a></li>
                <li><a href="#0"><i className="fa fas fa-link"></i> <span>Copy Link</span></a></li>
              </ul>
            </div>
          </div>
        </div>
        <nav>
          <a href="#" id="back" style={{ color: "#fff" }} onClick={this.props.onClose}>
            <i className="fa fa-close" />
          </a>
        </nav>
      </div>
    );
  }
}
