import React, { Component } from "react";
import loginForm from "../utils/img/loginForm.jpg";
import headerBackground from "../utils/img/header-background.jpg";
import OIP from "../utils/img/OIP.jpg";
import illustration from "../utils/img/illustration_3-01.jpg";
import SlideshowModal from "./SlideshowModal";
export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {resumeData.portfolio &&
                resumeData.portfolio.map((item, i) => {
                  return (
                    <>
                      {/* <div id="modal-01" className="popup-modal mfp-hide">
                        <SlideshowModal item={item} />
                        <img
                        className="scale-with-grid"
                        src={`images/portfolio/modals/${item.imgurl}.jpg`}
                        alt=""
                      />

                        <div className="description-box">
                          <h4>{item.name}</h4>
                          <p>{item.description}</p>
                          <span className="categories">
                            <i className="fa fa-tag" />
                            Branding, Webdesign
                          </span>
                        </div>

                        <div className="link-box">
                          <a href="http://www.behance.net">Details</a>
                          <a
                            className="popup-modal-dismiss close"
                            onClick={() => {}}
                          >
                            Close
                          </a>
                        </div>
                      </div> */}
                      <div className="columns portfolio-item" key={i}>
                        <div className="item-wrap">
                        <SlideshowModal item={item} />
                          {/* <a href="#modal-01" data-mfp-src="#modal-01">
                            <img
                              src={
                                item.imgurl === "loginForm"
                                  ? loginForm
                                  : item.imgurl === "headerBackground"
                                    ? headerBackground
                                    : item.imgurl === "OIP"
                                      ? OIP
                                      : item.imgurl === "illustration"
                                        ? illustration
                                        : ""
                              }
                              className="item-img"
                              alt=""
                            />
                            <div className="overlay">
                              <div className="portfolio-item-meta">
                                <h5>{item.name}</h5>
                                <p>{item.description}</p>
                              </div>
                            </div>
                          </a> */}
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    );
  }
}
