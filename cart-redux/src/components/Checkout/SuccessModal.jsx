import Modal from "react-modal";
import React from "react";
import remove from "../../assests/remove.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    // width: "600px",
    // height: "600px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "16px",
    background: "var(--light-gohan, #FFF)",
    boxShadow:
      "0px 0px 1px 0px rgba(0, 0, 0, 0.20), 0px 0px 32px -8px rgba(0, 0, 0, 0.12), 0px 32px 32px -8px rgba(0, 0, 0, 0.08)",
  },
};

const SuccessModal = ({ modal1, toggleModal1 }) => {
  return (
    <Modal
      isOpen={modal1}
      onRequestClose={toggleModal1}
      style={customStyles}
      overlayClassName="Overlay"
    >
      <div className="thank-container">
        <div className="modal-header-thank">
          <div className="modal-header-text"></div>
          <button onClick={toggleModal1}>
            <img src={remove} alt="close" />
          </button>
        </div>
        <div className="modal-cnf-icon">
          <FontAwesomeIcon icon={faCheckCircle} size="4x" className="faCheck" />
        </div>
        <div className="modal-cnf-text">
          <h3>Thank You!</h3>
          <p>Your order is being placed</p>
        </div>
        <div className="thank-button">
          <Link to="/orders">
            <button>Track Your Order</button>
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default SuccessModal;
