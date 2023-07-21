import React from "react";
import PaymentForm from "./PaymentForm";
import PaymentSummary1 from "./PaymentSummary1";
import PaymentSummary3 from "./PaymentSummary3";
import './paymentStyle.css'

const PaymentPage = ({pass}) => {
  return (
    <div className="payment-page">
      <h1>Choose a Membership Plan</h1>
      <div className="payment-container">
        <PaymentForm />
        {
          (pass === '1month') ? <PaymentSummary1 /> : <PaymentSummary3 />
        }
      </div>
    </div>
  );
};

export default PaymentPage;
