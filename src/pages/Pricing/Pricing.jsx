import React, { useEffect } from "react";
import PS from "./Pricing.module.css";
import Background from "../../component/Background/Background";
import PricingBanner from "../../component/PricingBanner/PricingBanner";
import PricingCard from "../../component/PricingCard/PricingCard";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Rerender } from "../../Recoil/Atom";
import { useRecoilState } from "recoil";

export default function Pricing({ setSubscriptionType }) {
  const navigate = useNavigate();
  const [rerender, setRerender] = useRecoilState(Rerender);

  const img =
    "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      navigate("/signin");
    }
  }, [navigate]);

  useEffect(()=>{
    setRerender(!rerender)
  },[])

  function handleClick(pass) {
    if (confirm(`Are you sure you want to get ${pass} ?`)) {
      setSubscriptionType(pass);

      //getting data from local storage
      const input = JSON.parse(localStorage.getItem("loggedInUser"));

      input.subscription = pass;
      delete input.pass_date;

      //sending data to db
      axios
        .put("http://localhost:80/newuser/user/edit", input)
        .then(function (response) {
          console.log(response.data);
        });

      if (pass === '1 Month Pass')
        navigate('/payment/1month')
      else if (pass === '3 Month Pass')
        navigate('/payment/3month')
    }



    // location.reload();
  }
    // location.reload();

    // setRerender(!rerender)


  return (
    <>
      <Background heading="OUR PRICING" imgUrl={img} />
      <section className={PS.pricing_mainBackground}>
        <div className={PS.pricing_container}>
          <div className={PS.pass_part}>
            <div className={`${PS.pass_box} ${PS.left_box}`}>
              <div>
                <p>Month Pass</p>
                <h1>₹1000</h1>
                <span>/pass</span>
              </div>
              <p>-- ₹500 Joining Fee</p>
              <p>-- 1 Month Pass</p>
              <p>-- Free Gym Access</p>
              <p>-- 24 Hour Access</p>
              {/* <Link to='/payment/1month'> */}
              <button onClick={() => handleClick("1 Month Pass")}>
                GET STARTED
              </button>
              {/* </Link> */}
            </div>
            <div className={`${PS.pass_box} ${PS.right_box}`}>
              <div>
                <p>3 Months Pass</p>
                <h1>₹2500</h1>
                <span>/Pass</span>
              </div>
              <p>-- ₹0 Joining Fee</p>
              <p>-- No Contract</p>
              <p>-- Free Gym Access</p>
              <p>-- 1 Group Class Included</p>
              <p>-- 24 Hour Access</p>
              {/* <Link to='/payment/3month'> */}
              <button onClick={() => handleClick("3 Month Pass")}>
                GET STARTED
              </button>
              {/* </Link> */}
            </div>
          </div>
          <div className={PS.content_part}>
            <h4>
              <span>Member</span>ship
            </h4>
            <h2>From Punch Pass to Monthly or Annual</h2>
            <p>
              At Fitness Trainer, we are committed to providing flexible and
              convenient membership options to cater to your fitness needs.
              Whether you're a seasoned gym enthusiast or just getting started
              on your fitness journey, we have the perfect plan for you.
            </p>
            <h3>Each Plan included</h3>
            <ul>
              <li>
                <span>--</span> The best equipment global brand
              </li>
              <li>
                <span>--</span> The gym is open 24 hours a day, 7 days a week
              </li>
              <li>
                <span>--</span> Two safe payment methods
              </li>
              <li>
                <span>--</span> Group fitness classes in the price of the
                subscription
              </li>
              <li>
                <span>--</span> No long-term contract, period
              </li>
            </ul>
          </div>
        </div>
      </section>
      <PricingBanner />
      <section className={PS.pricing_feature_section}>
        <div className={PS.pricing_feature_heading}>
          <h4>JOIN US NOW</h4>
          <h1>JOIN US OUR FREE WORKOUT TRAINING</h1>
        </div>
        <div className={PS.Pfeature_container}>
          <PricingCard />
        </div>
      </section>
    </>
  );
}
