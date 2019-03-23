import React, { Component } from "react";
import Clipboard from "react-clipboard.js";
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
  getFirstName = () => {
    return this.props.name.substring(0, this.props.name.indexOf(" "));
  };
  getNotes = () => {
    if (this.props.notes != "") {
      return this.props.notes;
    } else {
      return (
        <span>
          We don't have enough information about {this.getFirstName()} yet.{" "}
          <a href="https://goo.gl/forms/43iofEQLgtYJr5AH3">
            Help us add their story.
          </a>
        </span>
      );
    }
  };
  close = event => {
    // Prevent bubbling up to Box.onClick
    event.stopPropagation();
    if (this.props.onClose && typeof this.props.onClose === "function") {
      this.props.onClose();
    }
  };

  render() {
    const clipboardMessage =
      "Read " + this.props.name + "'s story " + window.location.href;

    return (
      <div>
        <div className="header-title invisible">
          {/* <ContributeDiv className="invisible"> contribute to this profile</ContributeDiv> */}
          <div className="row">
            <div />
            <div className="large-8 columns profile-copy">
              <h2>{this.props.name}</h2>
              <p>{this.getNotes()}</p>
            </div>
            <div className="share-bar">
              <ul className=" medium-horizontal menu">
                <li>
                  <a href="https://www.facebook.com/sharer/sharer.php?u=knowtheirname.com">
                    <i className="fa fab fa-facebook-square" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/intent/tweet?text=Know%20their%20names.%20Know%20their%20stories.%20https://knowtheirname.com">
                    <i className="fa fab fa-twitter-square" />{" "}
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/shareArticle?mini=true&url=knowtheirname.com&title=&summary=&source=">
                    <i className="fa fab fa-linkedin-square" />{" "}
                  </a>
                </li>
                <li>
                  <Clipboard
                    component="a"
                    button-href="#"
                    data-clipboard-text={clipboardMessage}
                  >
                    <span className="fa fas fa-link"> </span>
                  </Clipboard>
                </li>
              </ul>
              <div style={{ fontSize: 16 }}>
                <a href="https://www.launchgood.com/project/support_for_the_families__victims_of_the_new_zealand_mosque_shootings?src=NZshooting&utm_source=Homepagebanner&utm_medium=1&utm_campaign=NZShooting#!/">
                  Donate
                </a>{" "}
                |{" "}
                <a href="https://goo.gl/forms/43iofEQLgtYJr5AH3">Contact us</a>{" "}
              </div>
            </div>
          </div>
        </div>
        <nav>
          {/* UX: A link takes you somewhere, right now it's a UX effect so let's use a button. */}
          {/* <a href="/" id="back" style={{ color: "#fff" }}>
            <i className="fa fa-close" />
          </a> */}
          <button
            type="button"
            id="back"
            style={{ color: "#fff" }}
            onClick={this.close}
            className="box__close cursor--pointer"
          >
            <i className="fa fa-close" />
          </button>
        </nav>
      </div>
    );
  }
}
