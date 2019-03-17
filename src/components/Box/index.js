import React, { Component } from "react";
import styled from "styled-components";

let BoxStyle = styled.div`
  left: ${props => props.left}%!important;
  top: ${props => props.top}%!important;
`;
export default class Box extends Component {
  render() {
    return (
      <div>
        <BoxStyle id="about" className="box" left="20" top="20">
          <div className="header">
            <nav>
              <h2>
                <a href="#">
                  <video loop autoPlay muted playsInline className="nav-video">
                    <source
                      src="images/@stock/works-2.optimized..faststart.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <svg
                    width={600}
                    height={338}
                    viewBox="0 0 600 338"
                    className="svg-graphic"
                    id="svg-graphic-works"
                  >
                    <defs>
                      <mask
                        id="works-mask"
                        x={0}
                        y={0}
                        width={600}
                        height={338}
                      >
                        <rect
                          x={0}
                          y={0}
                          width={600}
                          height={338}
                          fill="#fff"
                        />
                        <polygon
                          points="440.9,33.8 432.4,33.8 331.4,33.8 329.1,33.8 268.6,33.8 268.5,34.1 167.7,34.1 167.6,33.8 
          102.5,33.8 196.5,303.2 241.2,303.2 299.8,115.9 358.8,303.2 403.5,303.2 497.5,33.8   "
                        />
                      </mask>
                    </defs>
                    {/* rect should be bigger than 337.5, vector shape should be smaller than 337.5 */}
                    {/* the 337.5 is calcutated by 600 / 16 * 9 */}
                    <rect x={0} y={0} width={600} height={338} />
                  </svg>
                  <span>Works</span>
                </a>
              </h2>
            </nav>
            <div className="header-title invisible">
              <div className="row">
                <div className="large-8 columns">
                  <h2>Works</h2>
                  <p>
                    We build brands people trust. Our values and ideas bring
                    people and brands together.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="content invisible">
            <div className="works">
              <div className="large-3 medium-6 columns">
                <div className="item">
                  <a href="case-study.html">
                    <div className="circle-wrap">
                      <div className="media work-1" />
                    </div>
                    <div className="client-name">
                      <h2>Client</h2>
                      <h3>Twitter</h3>
                    </div>
                    <div className="project">
                      <h2>Project</h2>
                      <h3>New season background</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="large-3 medium-6 columns">
                <div className="item">
                  <a href="case-study-2.html">
                    <div className="circle-wrap">
                      <div className="media work-2" />
                    </div>
                    <div className="client-name">
                      <h2>Client</h2>
                      <h3>Twitter</h3>
                    </div>
                    <div className="project">
                      <h2>Project</h2>
                      <h3>New season</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="large-3 medium-6 columns">
                <div className="item">
                  <a href="case-study.html">
                    <div className="circle-wrap">
                      <div className="media work-3" />
                    </div>
                    <div className="client-name">
                      <h2>Client</h2>
                      <h3>Twitter</h3>
                    </div>
                    <div className="project">
                      <h2>Project</h2>
                      <h3>New season</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="large-3 medium-6 columns">
                <div className="item">
                  <a href="case-study-2.html">
                    <div className="circle-wrap">
                      <div className="media work-4" />
                    </div>
                    <div className="client-name">
                      <h2>Client</h2>
                      <h3>Twitter</h3>
                    </div>
                    <div className="project">
                      <h2>Project</h2>
                      <h3>New season</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="large-3 medium-6 columns">
                <div className="item">
                  <a href="case-study.html">
                    <div className="circle-wrap">
                      <div className="media work-5" />
                    </div>
                    <div className="client-name">
                      <h2>Client</h2>
                      <h3>Twitter</h3>
                    </div>
                    <div className="project">
                      <h2>Project</h2>
                      <h3>New season</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="large-3 medium-6 columns">
                <div className="item">
                  <a href="case-study-2.html">
                    <div className="circle-wrap">
                      <div className="media work-6" />
                    </div>
                    <div className="client-name">
                      <h2>Client</h2>
                      <h3>Twitter</h3>
                    </div>
                    <div className="project">
                      <h2>Project</h2>
                      <h3>New season</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="large-3 medium-6 columns">
                <div className="item">
                  <a href="case-study.html">
                    <div className="circle-wrap">
                      <div className="media work-7" />
                    </div>
                    <div className="client-name">
                      <h2>Client</h2>
                      <h3>Twitter</h3>
                    </div>
                    <div className="project">
                      <h2>Project</h2>
                      <h3>New season</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="large-3 medium-6 columns">
                <div className="item">
                  <a href="case-study-2.html">
                    <div className="circle-wrap">
                      <img src="images/@stock/work-8.jpg" alt />
                    </div>
                    <div className="client-name">
                      <h2>Client</h2>
                      <h3>Twitter</h3>
                    </div>
                    <div className="project">
                      <h2>Project</h2>
                      <h3>New season</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="large-3 medium-6 columns">
                <div className="item">
                  <a href="case-study.html">
                    <div className="circle-wrap">
                      <div className="media work-9" />
                    </div>
                    <div className="client-name">
                      <h2>Client</h2>
                      <h3>Twitter</h3>
                    </div>
                    <div className="project">
                      <h2>Project</h2>
                      <h3>New season</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="large-3 medium-6 columns">
                <div className="item">
                  <a href="case-study-2.html">
                    <div className="circle-wrap">
                      <div className="media work-10" />
                    </div>
                    <div className="client-name">
                      <h2>Client</h2>
                      <h3>Twitter</h3>
                    </div>
                    <div className="project">
                      <h2>Project</h2>
                      <h3>New season</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="large-3 medium-6 columns">
                <div className="item">
                  <a href="case-study.html">
                    <div className="circle-wrap">
                      <div className="media work-11" />
                    </div>
                    <div className="client-name">
                      <h2>Client</h2>
                      <h3>Twitter</h3>
                    </div>
                    <div className="project">
                      <h2>Project</h2>
                      <h3>New season</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="large-3 medium-6 columns">
                <div className="item">
                  <a href="case-study.html">
                    <div className="circle-wrap">
                      <div className="media work-12" />
                    </div>
                    <div className="client-name">
                      <h2>Client</h2>
                      <h3>Twitter</h3>
                    </div>
                    <div className="project">
                      <h2>Project</h2>
                      <h3>New season</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="large-4 medium-6 columns">
                <div className="item">
                  <a href="case-study.html">
                    <div className="circle-wrap">
                      <div className="media work-13" />
                    </div>
                    <div className="client-name">
                      <h2>Client</h2>
                      <h3>Twitter</h3>
                    </div>
                    <div className="project">
                      <h2>Project</h2>
                      <h3>New season</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="large-4 medium-6 columns">
                <div className="item">
                  <a href="case-study.html">
                    <div className="circle-wrap">
                      <div className="media work-14" />
                    </div>
                    <div className="client-name">
                      <h2>Client</h2>
                      <h3>Twitter</h3>
                    </div>
                    <div className="project">
                      <h2>Project</h2>
                      <h3>New season</h3>
                    </div>
                  </a>
                </div>
              </div>
              <div className="large-4 medium-6 columns">
                <div className="item">
                  <a href="case-study.html">
                    <div className="circle-wrap">
                      <div className="media work-15" />
                    </div>
                    <div className="client-name">
                      <h2>Client</h2>
                      <h3>Twitter</h3>
                    </div>
                    <div className="project">
                      <h2>Project</h2>
                      <h3>New season</h3>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </BoxStyle>
      </div>
    );
  }
}
