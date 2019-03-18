import React, { Component } from "react";
import styled from "styled-components";

export default class BoxDescription extends Component {
  getNotes = () => {
    if (this.props.notes != "") {
      return this.props.notes;
    } else {
      return <a href="">share their story</a>;
    }
  };
  render() {
    return (
      <div>
        <div className="header-title invisible">
          <div className="row">
            <div className="large-8 columns">
              <h2>{this.props.name}</h2>
              <p>{this.getNotes()}</p>
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
