import React, { Component } from "react";
import styled from "styled-components";

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
          </div>
        </div>
         <nav>
          <a href="#" id="back" style={{color: "#fff"}} onClick={this.props.onClose}>
            <i className="fa fa-close" />
          </a>
        </nav>
      </div>
    );
  }
}
