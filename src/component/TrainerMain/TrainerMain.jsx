import React from 'react'
import { Link } from 'react-router-dom'
import TMS from './TrainerMain.module.css'
import TrainerCard from '../TrainerCard/TrainerCard'

export default function TrainerMain({ show }) {
  return (
    <div className={TMS.trainerMain_mainBackground}>
      <div className={TMS.trainer_container}>
        <div className={TMS.heading_part}>
          <h1>Meet <span>Our</span> Team </h1>
          <p>Powered by a transformative bussiness model,propretary technology,tried and tested methodology,and tested methodology ,and some of the best fitness industry brains in the world .we,ve rewritten the rules and changed the game</p>
        </div>
        <div className={TMS.card_container}>
          <TrainerCard />
        </div>
        {
          show ?
            <div className={TMS.button_part}>
              <Link to='/trainer' ><button>SEE THE WHOLE TEAM</button></Link>
            </div>
            : null
        }
      </div>
    </div>
  )
}
