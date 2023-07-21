import React from "react";
import { FaCheck } from "react-icons/fa";
import './paymentStyle.css'
import qr from './qrcode.png'

const PaymentSummary1 = () => {
  return (
    <div className="payment-summary">
      <h2>Summary</h2>
      <div className="plan">
        <FaCheck className="check-icon" />
        <span>Monthly Gym Membership</span>
      </div>
      <div className="total">
        <span>Total:</span>
        <span>₹1000</span>
      </div>
      <img src={qr} style={{width:"15rem"}} alt="qr code"/>
    </div>
  );
};

export default PaymentSummary1;
