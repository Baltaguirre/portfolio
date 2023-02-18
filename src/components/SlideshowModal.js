import React, { Component } from "react";
import Modal from "react-modal";
import loginForm from "../utils/img/loginForm.jpg";
import headerBackground from "../utils/img/header-background.jpg";
import OIP from "../utils/img/OIP.jpg";
import illustration from "../utils/img/illustration_3-01.jpg";

class SlideshowModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      currentSlide: 0,
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  handlePrev = () => {
    this.setState((prevState) => ({
      currentSlide: prevState.currentSlide - 1,
    }));
  };

  handleNext = () => {
    this.setState((prevState) => ({
      currentSlide: prevState.currentSlide + 1,
    }));
  };

  render() {
    const { item } = this.props;
    const { modalIsOpen, currentSlide } = this.state;
    return (
      <>
        <a href="#modal-01" data-mfp-src="#modal-01" onClick={this.openModal}>
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
        </a>
        <div className="popup-modal mfp-hide" id="modal-01" >
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Slideshow Modal"
          >
            <div className="slideshow-modal">
              <div className="slideshow-modal__image-wrapper">
                <img
                  className="slideshow-modal__image"
                  src={`../utils/img/${
                    item.imgurl
                  }.jpg`}
                  alt=""
                />
              </div>

              <div className="slideshow-modal__description-box">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
                <span className="slideshow-modal__categories">
                  <i className="fa fa-tag" />
                  Branding, Webdesign
                </span>
              </div>

              <div className="slideshow-modal__controls">
                <button
                  className="slideshow-modal__control slideshow-modal__prev"
                  onClick={this.handlePrev}
                  disabled={currentSlide === 0}
                >
                  &lt;
                </button>
                <button
                  className="slideshow-modal__control slideshow-modal__next"
                  onClick={this.handleNext}
                  disabled={currentSlide === item.slideCount - 1}
                >
                  &gt;
                </button>
              </div>

              <button
                className="slideshow-modal__close"
                onClick={this.closeModal}
              >
                Close
              </button>
            </div>
          </Modal>
        </div>
      </>
    );
  }
}

export default SlideshowModal;

// import React, { useState } from "react";
// import Modal from "react-modal";

// const SlideshowModal = ({ item }) => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   const handlePrev = () => {
//     setCurrentSlide(currentSlide - 1);
//   };

//   const handleNext = () => {
//     setCurrentSlide(currentSlide + 1);
//   };

//   return (
//     <>
//       <div className="portfolio-item">
//         <img
//           className="portfolio-item__image"
//           src={`images/portfolio/modals/${item.imgurl}.jpg`}
//           alt=""
//           onClick={openModal}
//         />
//         <div className="portfolio-item__overlay">
//           <h4 className="portfolio-item__name">{item.name}</h4>
//           <p className="portfolio-item__description">{item.description}</p>
//         </div>
//       </div>

//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         contentLabel="Slideshow Modal"
//       >
//         <div className="slideshow-modal">
//           <div className="slideshow-modal__image-wrapper">
//             <img
//               className="slideshow-modal__image"
//               src={`images/portfolio/modals/${item.imgurl}_${currentSlide}.jpg`}
//               alt=""
//             />
//           </div>

//           <div className="slideshow-modal__description-box">
//             <h4>{item.name}</h4>
//             <p>{item.description}</p>
//             <span className="slideshow-modal__categories">
//               <i className="fa fa-tag" />
//               Branding, Webdesign
//             </span>
//           </div>

//           <div className="slideshow-modal__controls">
//             <button
//               className="slideshow-modal__control slideshow-modal__prev"
//               onClick={handlePrev}
//               disabled={currentSlide === 0}
//             >
//               &lt;
//             </button>
//             <button
//               className="slideshow-modal__control slideshow-modal__next"
//               onClick={handleNext}
//               disabled={currentSlide === item.slideCount - 1}
//             >
//               &gt;
//             </button>
//           </div>

//           <button
//             className="slideshow-modal__close"
//             onClick={closeModal}
//           >
//             Close
//           </button>
//         </div>
//       </Modal>
//     </>
//   );
// };

// export default SlideshowModal;
