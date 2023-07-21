import React from "react";
import { FaAmazonPay, FaApplePay, FaGooglePay } from "react-icons/fa";
import { GrPaypal } from "react-icons/gr";
import { SiPaytm } from "react-icons/si";
import { MdPayment } from "react-icons/md";
import "./paymentStyle.css";
import { useNavigate } from "react-router-dom";

const PaymentForm = () => {
  const navigate = useNavigate();

  function handlePay() {
    alert("Payment Successful. Enjoy your membership with us.");
    navigate("/pricing");
  }

  return (
    <div className="payment-form">
      <h2>Payment Information</h2>
      <form onSubmit={handlePay}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
        <label htmlFor="card">Card Number:</label>
        <input type="number" id="card" required />
        <div className="payment-method">
          <MdPayment />
          <FaAmazonPay />
          <GrPaypal />
          <SiPaytm />
          <FaApplePay />
          <FaGooglePay />
        </div>
        <div className="expiration-cvv">
          <div>
            <label htmlFor="expiration">Expiration Date:</label>
            <input type="year" id="expiration" placeholder="mm-yy" required />
          </div>
          <div>
            <label htmlFor="cvv">CVV:</label>
            <input type="password" id="cvv" required />
          </div>
        </div>
        <button type="submit" className="sub_btn">
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
