import React, { useState } from "react";
import Navbar from "../Headers/Navbar";
import Footer from "../Footer/Footer";
import PaymentModal from "./PaymentModal";
import { useDispatch, useSelector } from "react-redux";
import { getTotalPrice } from "../../config/config";
import { addToOrder } from "../../redux/slice/orderSlice";
import SuccessModal from "./SuccessModal";

const CheckoutPage = () => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const cart = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleModal1 = () => {
    setModal1(!modal1);
  };

  const handleCodOrders = (item) => {
    dispatch(addToOrder(item));
    toggleModal1();
  };

  const handleOrders = (item) => {
    dispatch(addToOrder(item));
    toggleModal();
    toggleModal1();
  };

  return (
    <>
      <Navbar />
      <div className="check-container">
        <h4>Checkout</h4>
        <hr />
        <div className="row">
          <div className="col-md-12 mb-4">
            <div className="shadow bg-white p-3">
              <h4 className="text-dark">
                Item Total Amount :
                <span className="float-end text-success">
                  ${parseFloat(getTotalPrice(cart)) + parseFloat(5)}
                </span>
              </h4>
              <hr />
              <small>* Items will be delivered in 3 - 5 days.</small>
              <br />
              <small>* Tax and other charges are included ?</small>
            </div>
          </div>
          <div className="col-md-12">
            <div className="shadow bg-white p-3">
              <h4 className="text-dark">Basic Information</h4>
              <hr />
              <form action="" method="POST">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label>Full Name</label>
                    <input
                      type="text"
                      name="fullname"
                      className="form-control"
                      placeholder="Enter Full Name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Phone Number</label>
                    <input
                      type="number"
                      name="phone"
                      className="form-control"
                      placeholder="Enter Phone Number"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter Email Address"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label>Pin-code (Zip-code)</label>
                    <input
                      type="number"
                      name="pincode"
                      className="form-control"
                      placeholder="Enter Pin-code"
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label>Full Address</label>
                    <textarea
                      name="address"
                      className="form-control"
                      rows={2}
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-md-12 mb-3">
                    <label>Select Payment Mode: </label>
                    <div className="d-md-flex align-items-start">
                      <div
                        className="nav col-md-3 flex-column nav-pills me-3"
                        id="v-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <button
                          className="nav-link fw-bold"
                          id="cashOnDeliveryTab-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#cashOnDeliveryTab"
                          type="button"
                          role="tab"
                          aria-controls="cashOnDeliveryTab"
                          aria-selected="true"
                        >
                          Cash on Delivery
                        </button>
                        <button
                          className="nav-link fw-bold"
                          id="onlinePayment-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#onlinePayment"
                          type="button"
                          role="tab"
                          aria-controls="onlinePayment"
                          aria-selected="false"
                        >
                          Online Payment
                        </button>
                      </div>
                      <div
                        className="tab-content col-md-9"
                        id="v-pills-tabContent"
                      >
                        <div
                          className="tab-pane fade"
                          id="cashOnDeliveryTab"
                          role="tabpanel"
                          aria-labelledby="cashOnDeliveryTab-tab"
                          tabIndex={0}
                        >
                          <h6>Cash on Delivery Mode</h6>
                          <hr />
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => handleCodOrders(cart)}
                          >
                            Place Order
                          </button>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="onlinePayment"
                          role="tabpanel"
                          aria-labelledby="onlinePayment-tab"
                          tabIndex={0}
                        >
                          <h6>Online Payment Mode</h6>
                          <hr />
                          <button
                            type="button"
                            className="btn btn-warning"
                            // data-toggle="modal"
                            // data-target="#staticBackdrop"
                            onClick={toggleModal}
                          >
                            Pay Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        modal={modal}
        toggleModal={toggleModal}
        cart={cart}
        handleOrders={handleOrders}
      />
      <SuccessModal modal1={modal1} toggleModal1={toggleModal1} />
      <Footer />
    </>
  );
};

export default CheckoutPage;
