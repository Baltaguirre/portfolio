import React, { Component } from "react";
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/yofinal.jpg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>About Me</h2>
            <>
              {resumeData.aboutme.map((el, i) => {
                return <p key={i}>{el}</p>;
              })}
            </>
          </div>
        </div>
      </section>
    );
  }
}
