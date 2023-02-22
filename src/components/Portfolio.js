import React, { Component } from "react";
import loginForm from "../utils/img/loginForm.jpg";
import headerBackground from "../utils/img/header-background.jpg";
import OIP from "../utils/img/OIP.jpg";
import illustration from "../utils/img/illustration_3-01.jpg";
import PortfolioWork from "./PortfolioWork";
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
                      <div className="columns portfolio-item" key={i}>
                        <div className="item-wrap">
                          <PortfolioWork item={item} />
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
