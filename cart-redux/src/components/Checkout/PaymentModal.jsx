import React, { useState } from "react";
import Modal from "react-modal";
import remove from "../../assests/remove.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMobileScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faGooglePay } from "@fortawesome/free-brands-svg-icons";
import { useDispatch } from "react-redux";
import { addToCusDetails, addToOrder } from "../../redux/slice/orderSlice";

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

const PaymentModal = ({
  modal,
  toggleModal,
  cart,
  toggleModal1,
  name,
  mobile,
  email,
  pinCode,
  address,
}) => {
  const dispatch = useDispatch();
  const [creditClick, setCreditClick] = useState(true);
  const [googleClick, setGoogleClick] = useState(false);
  const [netClick, setNetClick] = useState(false);
  const [cardOwner, setCardOwner] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");
  const [googlePay, setGooglePay] = useState("");
  const [bankName, setBankName] = useState("--Please select your Bank--");

  const bankArr = [
    "State Bank of India",
    "American Bank",
    "Bank of Baroda",
    "Axis Bank",
    "HDFC Bank",
  ];

  const handleCardOwner = (e) => {
    setCardOwner(e.target.value);
  };

  const handleCardNumber = (e) => {
    setCardNumber(e.target.value);
  };

  const handleMonth = (e) => {
    setMonth(e.target.value);
  };

  const handleYear = (e) => {
    setYear(e.target.value);
  };

  const handleCvv = (e) => {
    setCvv(e.target.value);
  };

  const handleGoogleChange = (e) => {
    setGooglePay(e.target.value);
  };

  const handleBankChange = (e) => {
    setBankName(e.target.value);
  };

  const handleGoogle = () => {
    setGoogleClick(true);
    setCreditClick(false);
    setNetClick(false);
  };

  const handleNet = () => {
    setNetClick(true);
    setGoogleClick(false);
    setCreditClick(false);
  };

  const handleCredit = () => {
    setCreditClick(true);
    setGoogleClick(false);
    setNetClick(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleCardsOrders = (item) => {
    if (cardOwner !== "" && cardNumber !== "" && month !== "" && year !== "") {
      dispatch(addToOrder(item));
      dispatch(
        addToCusDetails({
          name: name,
          mobile: mobile,
          email: email,
          pinCode: pinCode,
          address: address,
        })
      );
      toggleModal();
      toggleModal1();
    }
  };

  const handleGpayOrders = (item) => {
    if (googlePay !== "") {
      dispatch(addToOrder(item));
      dispatch(
        addToCusDetails({
          name: name,
          mobile: mobile,
          email: email,
          pinCode: pinCode,
          address: address,
        })
      );
      toggleModal();
      toggleModal1();
    }
  };

  const handleBankOrders = (item) => {
    if (bankName !== "--Please select your Bank--") {
      dispatch(addToOrder(item));
      dispatch(
        addToCusDetails({
          name: name,
          mobile: mobile,
          email: email,
          pinCode: pinCode,
          address: address,
        })
      );
      toggleModal();
      toggleModal1();
    }
  };

  return (
    <>
      {/* {modal && ( */}
      <Modal
        isOpen={modal}
        onRequestClose={toggleModal}
        style={customStyles}
        overlayClassName="Overlay"
      >
        <div className="pay-container">
          <div className="modal-header">
            <div className="modal-header-text">Payments</div>
            <button onClick={toggleModal}>
              <img src={remove} alt="close" />
            </button>
          </div>
          <div className="payment-mode-button">
            <button
              className={`credit-card ${creditClick ? "pay-clicked" : ""} `}
              onClick={handleCredit}
            >
              <FontAwesomeIcon icon={faCreditCard} /> Credit Card
            </button>
            <button
              className={`g-pay ${googleClick ? "pay-clicked" : ""} `}
              onClick={handleGoogle}
            >
              {" "}
              <FontAwesomeIcon icon={faGoogle} /> Google Pay
            </button>
            <button
              className={`net-banking ${netClick ? "pay-clicked" : ""} `}
              onClick={handleNet}
            >
              <FontAwesomeIcon icon={faMobileScreenButton} /> Net Banking
            </button>
          </div>
          <div className="modal-form-content">
            {creditClick === true ? (
              <form method="post" onSubmit={handleSubmit}>
                <div className="form-group ">
                  {" "}
                  <label htmlFor="username">
                    <h6>Card Owner</h6>
                  </label>{" "}
                  <input
                    type="text"
                    name="username"
                    placeholder="Card Owner Name"
                    value={cardOwner}
                    onChange={handleCardOwner}
                    required
                    className="form-control "
                  />{" "}
                </div>
                <div className="form-group ">
                  {" "}
                  <label htmlFor="cardNumber">
                    <h6>Card number</h6>
                  </label>
                  <div className="input-group">
                    {" "}
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Valid card number"
                      value={cardNumber}
                      onChange={handleCardNumber}
                      className="form-control "
                      required
                    />
                    <div className="input-group-append">
                      {" "}
                      <span className="input-group-text text-muted">
                        {" "}
                        <i className="fab fa-cc-visa mx-1" />{" "}
                        <i className="fab fa-cc-mastercard mx-1" />{" "}
                        <i className="fab fa-cc-amex mx-1" />{" "}
                      </span>{" "}
                    </div>
                  </div>
                </div>
                <div className="row ml-n3">
                  <div className="col-sm-8">
                    <div className="form-group">
                      {" "}
                      <label>
                        <span className="hidden-xs">
                          <h6>Expiration Date</h6>
                        </span>
                      </label>
                      <div className="input-group">
                        {" "}
                        <input
                          type="number"
                          placeholder="MM"
                          name=""
                          className="form-control"
                          value={month}
                          onChange={handleMonth}
                          required
                        />{" "}
                        <input
                          type="number"
                          placeholder="YY"
                          name=""
                          className="form-control"
                          value={year}
                          onChange={handleYear}
                          required
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group mb-4">
                      {" "}
                      <label
                        data-toggle="tooltip"
                        title="Three digit CV code on the back of your card"
                      >
                        <h6>
                          CVV <i className="fa fa-question-circle d-inline" />
                        </h6>
                      </label>{" "}
                      <input
                        type="text"
                        required
                        className="form-control"
                        value={cvv}
                        onChange={handleCvv}
                      />{" "}
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  {" "}
                  <button
                    type="submit"
                    className="subscribe btn btn-primary btn-block shadow-sm"
                    onClick={() => handleCardsOrders(cart)}
                  >
                    {" "}
                    Confirm Payment{" "}
                  </button>
                </div>
              </form>
            ) : null}

            {googleClick === true ? (
              <form>
                <div className="gpay" style={{ marginTop: "20px" }}>
                  <div className="form-group col-md-6 ml-n3">
                    {" "}
                    <label htmlFor="gpayId">
                      <h6>Enter Your Google Pay Id</h6>
                    </label>{" "}
                    <input
                      type="text"
                      name="gpayId"
                      placeholder="Enter Your Upi No"
                      required
                      className="form-control "
                      value={googlePay}
                      onChange={handleGoogleChange}
                    />{" "}
                  </div>
                  <p>
                    {" "}
                    <button
                      type="submit"
                      class="btn btn-primary "
                      onClick={() => handleGpayOrders(cart)}
                    >
                      <FontAwesomeIcon
                        icon={faGooglePay}
                        size="lg"
                        marginRight="10px"
                      />{" "}
                      Pay Securely
                    </button>{" "}
                  </p>
                  <p className="text-muted">
                    {" "}
                    Note: After clicking on the button, you will be directed to
                    a secure gateway for payment.<br></br> After completing the
                    payment process, you will be redirected back to the website
                    to
                    <br></br>view details of your order.{" "}
                  </p>
                </div>
              </form>
            ) : null}
          </div>
          {netClick === true ? (
            <div id="net-banking" className="tab-pane  pt-3">
              <div class="form-group ">
                {" "}
                <label for="Select Your Bank">
                  <h6>Select your Bank</h6>
                </label>{" "}
                <select
                  className="form-control col-md-6"
                  id="ccmonth"
                  onChange={handleBankChange}
                >
                  <option value="" selected disabled>
                    {bankName}
                  </option>
                  {bankArr.map((item, id) => (
                    <option className="col-md-6" value={item} key={id}>
                      {item}
                    </option>
                  ))}
                </select>{" "}
              </div>
              <div className="form-group">
                <p>
                  {" "}
                  <button
                    type="submit"
                    class="btn btn-primary "
                    onClick={() => handleBankOrders(cart)}
                  >
                    <i class="fas fa-mobile-alt mr-2"></i> Proceed Payment
                  </button>{" "}
                </p>
              </div>
              <p className="text-muted">
                {" "}
                Note: After clicking on the button, you will be directed to a
                secure gateway for payment.<br></br> After completing the
                payment process, you will be redirected back to the website to
                <br></br>view details of your order.{" "}
              </p>
            </div>
          ) : null}
        </div>
      </Modal>
      {/* )} */}
    </>
  );
};

export default PaymentModal;
