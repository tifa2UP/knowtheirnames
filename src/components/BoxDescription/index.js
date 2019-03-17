import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { connect } from 'react-redux';

import { toggleModal } from "../../redux/actions";

class BoxDescription extends Component {
  render() {
    return (
      <div>
        <div className="header-title">
          <div className="row">
            <div className="large-8 columns">
              <h2>{this.props.name}</h2>
              <p>{this.props.notes}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    name: state.currentMemorial.name,
    notes: state.currentMemorial.notes,
  })
}

export default connect(mapStateToProps)(BoxDescription); 
