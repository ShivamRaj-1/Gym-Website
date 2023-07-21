import React from "react";
import { FaCheck } from "react-icons/fa";
import './paymentStyle.css'

const PaymentSummary3 = () => {
  return (
    <div className="payment-summary">
      <h2>Summary</h2>
      <div className="plan">
        <FaCheck className="check-icon" />
        <span>3 Months Gym Membership</span>
      </div>
      <div className="total">
        <span>Total:</span>
        <span>₹2500</span>
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/220px-QR_code_for_mobile_English_Wikipedia.svg.png" alt=""/>
    </div>
  );
};

export default PaymentSummary3;
