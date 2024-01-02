import React from "react";
import Modal from "react-modal";
import remove from "../../assests/remove.png";
import { getPriceAfterDiscount } from "../../config/config";

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

const OrderInfo = ({
  filteredItem,
  cusDetails,
  modal,
  toggleModal,
  isClick,
}) => {
  return (
    <>
      <Modal
        isOpen={modal}
        onRequestClose={toggleModal}
        style={customStyles}
        overlayClassName="Overlay"
      >
        <div className="paySum-container">
          <div className="modal-header-sum">
            <div className="modal-header-text">Order Info</div>
            <button onClick={toggleModal}>
              <img src={remove} alt="close" />
            </button>
          </div>
          <hr style={{ margin: "10px", color: "black", borderRadius: "1px" }} />
          <div className="order-summary">
            {isClick
              ? filteredItem && (
                  <div className="pro-summary">
                    <span className="theme-color">Payment Summary</span>
                    <div className="mb-3">
                      <hr className="new1 text-secondary" />
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="font-weight-bold">
                        {filteredItem.product.title}(Qty:{filteredItem.quantity}
                        )
                      </span>
                      <span className="text-muted">
                        $
                        {getPriceAfterDiscount(
                          filteredItem.product.price,
                          filteredItem.product.discountPercentage
                        ) * filteredItem.quantity}
                      </span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <small>Shipping</small>
                      <small>$5.00</small>
                    </div>
                    <div className="d-flex justify-content-between">
                      <small>Tax</small>
                      <small>$0.00</small>
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                      <span className="font-weight-bold">Total</span>
                      <span className="font-weight-bold theme-color">
                        ${" "}
                        {getPriceAfterDiscount(
                          filteredItem.product.price,
                          filteredItem.product.discountPercentage
                        ) *
                          filteredItem.quantity +
                          parseInt(5)}
                      </span>
                    </div>
                  </div>
                )
              : null}
            <hr />
            <h5>Delivery Address</h5>
            <hr />
            <div className="user-summary">
              <p>Jhon Doe</p>
              <p>7743461000</p>
              <p>jhonDoe7@gmail.com</p>
              <p>
                31-B,Hoshiyarpur,Sector-51,<br></br>Noida,Uttar Patdesh
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default OrderInfo;
