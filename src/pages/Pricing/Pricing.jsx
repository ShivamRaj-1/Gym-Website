import React from 'react'
import PS from './Pricing.module.css'
import Background from '../../component/Background/Background'
import PricingBanner from '../../component/PricingBanner/PricingBanner';
import PricingCard from '../../component/PricingCard/PricingCard';

export default function Pricing({ setSubscriptionType }) {
  const img = 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  function handleClick(pass){

    if(confirm(`Are you sure you want to get ${pass} ?`)){
      setSubscriptionType(pass);
    }

  }

  return (
    <> 
      <Background heading='OUR PRICING' imgUrl={img} />
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
              <button onClick={()=> handleClick("1 Month Pass")}>GET STARTED</button>
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
              <button onClick={()=> handleClick("3 Month Pass")}>GET STARTED</button>
            </div>
          </div>
          <div className={PS.content_part}>
            <h4><span>Member</span>ship</h4>
            <h2>From Punch Pass to Monthly or Annual</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquam odio est molestiae dolores quis maxime quae consequuntur deleniti amet excepturi sequi obcaecati unde iure, culpa corporis error eos iste?</p>
            <h3>Each Plan included</h3>
            <ul>
              <li><span>--</span> The best equipment global brand</li>
              <li><span>--</span> The gym is open 24 hours a day, 7 days a week</li>
              <li><span>--</span> Two safe payment methods</li>
              <li><span>--</span> Group fitness classes in the price of the subscription</li>
              <li><span>--</span> No long-term contract, period</li>
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
  )
}
