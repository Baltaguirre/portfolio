import React, { Component } from "react";
import Modal from "react-modal";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
// work images
import loginForm from "../utils/img/loginForm.jpg";
import headerBackground from "../utils/img/header-background.jpg";
import OIP from "../utils/img/OIP.jpg";
import illustration from "../utils/img/illustration_3-01.jpg";

class PortfolioWork extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { item } = this.props;
    const { modalIsOpen } = this.state;
    return (
      <>
        <div onClick={this.openModal}>
          {" "}
          <img
            src={
              item.imgurl === "loginForm"
                ? loginForm
                : item.imgurl === "header-background"
                  ? headerBackground
                  : item.imgurl === "OIP"
                    ? OIP
                    : item.imgurl === "illustration_3-01"
                      ? illustration
                      : ""
            }
            className="item-img"
            alt=""
          />
          <div className="overlay">
            <div className="portfolio-item-meta">
              <h5>
                {item.name}
                SHIT
              </h5>
              <p>{item.description}</p>
            </div>
          </div>
        </div>{" "}
        <Modal isOpen={modalIsOpen} onRequestClose={this.closeModal} className="modal-container">
          <div className="popup-modal">
            <div id="slider">
              {" "}
              <AwesomeSlider animation="cubeAnimation" fillParent={false}>
                <div data-src={loginForm} />
                <div data-src={illustration} />
                <div data-src={headerBackground} />
              </AwesomeSlider>
            </div>
            <div className="description-box">
              <h4>{item.name}</h4>
              <p>{item.description}</p>
              <span className="categories">
                <i className="fa fa-tag" />
                Branding, Webdesign
              </span>
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default PortfolioWork;
