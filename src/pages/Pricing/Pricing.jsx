import React from 'react'
import PS from './Pricing.module.css'
import Background from '../../component/Background/Background'
import PricingBanner from '../../component/PricingBanner/PricingBanner';
import PricingCard from '../../component/PricingCard/PricingCard';

export default function Pricing() {
  const img = 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';

  return (
    <>
      <Background heading='OUR PRICING' imgUrl={img} />

      <section className={PS.pricing_mainBackground}>
        <div className={PS.pricing_container}>

          <div className={PS.pass_part}>

            <div className={`${PS.pass_box} ${PS.left_box}`}>
              <div>
                <p>Day Pass</p>
                <h1>$20</h1>
                <span>/pass</span>
              </div>
              <p>-- 1 Day Pass</p>
              <p>-- Free Gym Access</p>
              <p>-- 24 Hour Access</p>
              <button>GET STARTED</button>
            </div>

            <div className={`${PS.pass_box} ${PS.right_box}`}>
              <div>
                <p>Month to Month</p>
                <h1>$90</h1>
                <span>/month</span>
              </div>
              <p>-- $99 Joining Fee</p>
              <p>-- No Contract</p>
              <p>-- Free Gym Access</p>
              <p>-- 1 Group Class Included</p>
              <p>-- 24 Hour Access</p>
              <button>GET STARTED</button>
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
