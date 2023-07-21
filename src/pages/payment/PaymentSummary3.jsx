import React from "react";
import { FaCheck } from "react-icons/fa";
import './paymentStyle.css'
import qr from './qrcode.png'

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
      <img src={qr} style={{width:"15rem"}} alt="qr code"/>
    </div>
  );
};

export default PaymentSummary3;
