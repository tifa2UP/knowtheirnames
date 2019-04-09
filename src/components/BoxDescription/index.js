import React, { Component } from "react";
import { Helmet } from "react-helmet";
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

function isTab(event) {
  return event.key === "Tab" || event.code === "Tab" || event.keyCode === 9;
}
function isJustTab(event) {
  return isTab(event) && !event.shiftKey;
}
function isShiftTab(event) {
  return isTab(event) && event.shiftKey;
}

// function isArrowDirection(event, direction) {
//   const keyString = "Arrow" + direction;
//   let keyCode;
//   switch (keyString) {
//     case "ArrowUp":
//       keyCode = 38;
//       break;
//     case "ArrowRight":
//       keyCode = 39;
//       break;
//     case "ArrowDown":
//       keyCode = 40;
//       break;
//     case "ArrowLeft":
//       keyCode = 37;
//       break;
//     default:
//       break;
//   }
//   return (
//     event.key === keyString ||
//     event.code === keyString ||
//     event.keyCode === keyCode
//   );
// }

// function isArrow(event) {
//   const directions = ["Up", "Right", "Bottom", "Left"];
//   for (const direction of directions) {
//     if (isArrowDirection(event, direction)) {
//       return true;
//     }
//   }
//   return false;
// }

export default class BoxDescription extends Component {
  constructor(props) {
    super(props);
    // This will store a reference to the main node so it can be focused
    this.mainRef = React.createRef();
    this.firstLinkRef = React.createRef();
    this.closeRef = React.createRef();
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

  // If within a modal, the user cannot tab to the rest of the document.
  //
  // Note: these event handlers to be on keydown, if they're on keyup, it'll
  // detect as you tab into/onto the element, not tabbing from/out of it.
  mainTrapTab = event => {
    // Since this is the wrapping div, there may be conflicts due to event
    // bubbling with children below. So we check if the tab happened whilst on
    // this actual element.
    if (event.target === this.mainRef.current) {
      if (isShiftTab(event)) {
        event.preventDefault();
        this.closeRef.current.focus();
      }
      // Tried to override NVDA behavior to no avail
      // else if (isArrow(event)) {
      //   event.preventDefault();
      // }
    }
  };
  linkTrapTab = event => {
    if (isShiftTab(event)) {
      event.preventDefault();
      // this.mainRef.current.focus();
      this.closeRef.current.focus();
    }
  };
  closeTrapTab = event => {
    if (isJustTab(event)) {
      event.preventDefault();
      // this.mainRef.current.focus();
      this.firstLinkRef.current.focus();
    }
    // Tried to override NVDA behavior to no avail
    // else if (isArrow(event)) {
    //   event.preventDefault();
    // }
  };

  componentDidMount() {
    document.addEventListener("keyup", this.escape, false);
    this.mainRef.current.addEventListener("keydown", this.mainTrapTab, false);
    this.mainRef.current.focus();
    this.firstLinkRef.current.addEventListener(
      "keydown",
      this.linkTrapTab,
      false
    );
    this.closeRef.current.addEventListener("keydown", this.closeTrapTab, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keyup", this.escape, false);
    this.mainRef.current.removeEventListener(
      "keydown",
      this.mainTrapTab,
      false
    );
    this.firstLinkRef.current.removeEventListener(
      "keydown",
      this.linkTrapTab,
      false
    );
    this.closeRef.current.removeEventListener(
      "keydown",
      this.closeTrapTab,
      false
    );
    document.title = process.env.REACT_APP_DOC_TITLE;
  }

  render() {
    const clipboardMessage =
      "Read " + this.props.name + "'s story " + window.location.href;

    return (
      // eslint-disable-next-line jsx-a11y/role-supports-aria-props
      <div
        className="box__description"
        id={this.props.id}
        aria-modal="true"
        aria-labelledby={"dialog-title--" + this.props.id}
        // Wanted role="main", but role="dialog" is necessary to prevent NVDA from
        // allowing arrow keys to navigate to the rest of the invisible document.
        role="dialog"
        // Temporary workaround to hiding sibling that has bg, we'll have to use
        // an actual image at some point for a11y purposes. Background images
        // will never get read by screen readers.
        style={{ backgroundImage: "url(" + this.props.image + ")" }}
      >
        {/* 
          Created another wrapping div for this purpose:
          "NVDA will not announce the dialog role when the dialog itself receives focus"
          - source: https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/ 
        */}
        <div ref={this.mainRef} tabIndex={this.props.tabIndex}>
          <Helmet titleTemplate={process.env.REACT_APP_DOC_TITLE_TEMPLATE}>
            <title>{this.props.name}</title>
          </Helmet>

          <div className="header-title">
            {/* <ContributeDiv className="invisible"> contribute to this profile</ContributeDiv> */}
            <div className="row">
              <div />
              <div className="large-8 columns profile-copy">
                {/* @todo: For IE11 this needs to be the first element of a modal dialog. Wish it supported conditional comments... */}
                <h2 id={"dialog-title--" + this.props.id}>{this.props.name}</h2>
                <p>{this.getNotes()}</p>
              </div>
              <nav
                className="share-bar"
                // Had no effect in NVDA when BoxDescription was wrapped in an aria-live div
                // role="navigation"
                // aria-label="Share, donate, & contact links"
              >
                <ul className=" medium-horizontal menu">
                  <li>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=knowtheirname.com"
                      // rel=noreferrer is not necessary as IE/Edge takes care of this without rel attr
                      target="_blank" // eslint-disable-line react/jsx-no-target-blank
                      rel="noopener"
                      ref={this.firstLinkRef}
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
                      // rel=noreferrer is not necessary as IE/Edge takes care of this without rel attr
                      target="_blank" // eslint-disable-line react/jsx-no-target-blank
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
                      // rel=noreferrer is not necessary as IE/Edge takes care of this without rel attr
                      target="_blank" // eslint-disable-line react/jsx-no-target-blank
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
                      role="button"
                    >
                      <span className="show-for-sr">Copy this link</span>
                      <span className="fa fas fa-link"> </span>
                    </Clipboard>
                  </li>
                </ul>
                <div style={{ fontSize: 16 }}>
                  <a
                    href="https://www.launchgood.com/project/support_for_the_families__victims_of_the_new_zealand_mosque_shootings?src=NZshooting&utm_source=Homepagebanner&utm_medium=1&utm_campaign=NZShooting#!/"
                    // rel=noreferrer is not necessary as IE/Edge takes care of this without rel attr
                    target="_blank" // eslint-disable-line react/jsx-no-target-blank
                    rel="noopener"
                  >
                    Donate
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://goo.gl/forms/43iofEQLgtYJr5AH3"
                    // rel=noreferrer is not necessary as IE/Edge takes care of this without rel attr
                    target="_blank" // eslint-disable-line react/jsx-no-target-blank
                    rel="noopener"
                  >
                    Contact us
                  </a>{" "}
                </div>
                {/* UX: A link takes you somewhere, right now it's a UX effect so let's use a button. */}
                {/* <a href="/" id="back" style={{ color: "#fff" }}>
                      <i className="fa fa-close" />
                    </a>
                  */}
                <button
                  type="button"
                  id="back"
                  style={{ color: "#fff" }}
                  onClick={this.close}
                  className="box__close cursor--pointer"
                  ref={this.closeRef}
                >
                  <span className="show-for-sr">
                    Close this profile and go back to main page
                  </span>
                  <i className="fa fa-close" />
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
