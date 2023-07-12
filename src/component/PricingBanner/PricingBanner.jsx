import React from 'react'
import PB from './PricingBanner.module.css'
import Button from '../button/Button'

export default function PricingBanner() {
  return (
    <div className={PB.pbanner_background}>
        <div className={PB.pbanner_container}>
            <h1>May membership offer available Now</h1>
            <Button name='JOIN NOW FOR DETAILS'/>
        </div>
    </div> 
  )
}
 