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
  constructor(props) {
    super(props);
    // This will store a reference to the main node so it can be focused
    this.elementRef = React.createRef();
  }
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

  // Document-wide listener for Escape key press instead of component-/element-specific,
  // because otherwise we'd have to wait for the user to navigate to the close button
  // itself first, at which point they may as well press enter rather than escape.
  //
  // Implementation credits:
  // @link https://stackoverflow.com/a/46123962/781824
  // @link https://medium.com/@uistephen/keyboardevent-key-for-cross-browser-key-press-check-61dbad0a067a
  escape = event => {
    if (
      event.key === "Escape" ||
      event.code === "Escape" ||
      event.keyCode === 27
    ) {
      // Important to continue to use existing methods, e.g. somewhere up the
      // chain of onClose, focus is restored. Definitely need that here.
      if (this.props.onClose && typeof this.props.onClose === "function") {
        this.props.onClose();
      }
    }
  };

  componentDidMount() {
    this.elementRef.current.focus();
    document.addEventListener("keyup", this.escape, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keyup", this.escape, false);
  }

  render() {
    const clipboardMessage =
      "Read " + this.props.name + "'s story " + window.location.href;

    return (
      <div
        ref={this.elementRef}
        className="box__description"
        id={this.props.id}
        tabIndex={this.props.tabIndex}
        // Temporary workaround to hiding sibling that has bg, we'll have to use
        // an actual image at some point for a11y purposes. Background images
        // will never get read by screen readers.
        style={{ backgroundImage: "url(" + this.props.image + ")" }}
      >
        <div className="header-title">
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
                  <a
                    href="https://www.facebook.com/sharer/sharer.php?u=knowtheirname.com"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="show-for-sr">
                      Share this site on Facebook
                    </span>
                    <i className="fa fab fa-facebook-square" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/intent/tweet?text=Know%20their%20names.%20Know%20their%20stories.%20https://knowtheirname.com"
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="show-for-sr">
                      Share this site on Twitter
                    </span>
                    <i className="fa fab fa-twitter-square" />{" "}
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/shareArticle?mini=true&url=knowtheirname.com&title=&summary=&source="
                    target="_blank"
                    rel="noopener"
                  >
                    <span className="show-for-sr">
                      Share this site on LinkedIn
                    </span>
                    <i className="fa fab fa-linkedin-square" />{" "}
                  </a>
                </li>
                <li>
                  <Clipboard
                    component="a"
                    button-href="#"
                    data-clipboard-text={clipboardMessage}
                  >
                    <span className="show-for-sr">Copy this link</span>
                    <span className="fa fas fa-link"> </span>
                  </Clipboard>
                </li>
              </ul>
              <div style={{ fontSize: 16 }}>
                <a
                  href="https://www.launchgood.com/project/support_for_the_families__victims_of_the_new_zealand_mosque_shootings?src=NZshooting&utm_source=Homepagebanner&utm_medium=1&utm_campaign=NZShooting#!/"
                  target="_blank"
                  rel="noopener"
                >
                  Donate
                </a>{" "}
                |{" "}
                <a
                  href="https://goo.gl/forms/43iofEQLgtYJr5AH3"
                  target="_blank"
                  rel="noopener"
                >
                  Contact us
                </a>{" "}
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
            <span className="show-for-sr">
              Close this profile and go back to main page
            </span>
            <i className="fa fa-close" />
          </button>
        </nav>
      </div>
    );
  }
}
