import React from 'react'
import TS from './Trainer.module.css'
import Background from '../../component/Background/Background'
import { Trainer_details } from '../../utils/Trainer_details'
import TrainerBanner from '../../component/TrainerBanner/TrainerBanner';

export default function Trainer() {
  const img = 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';

  const trainer_card = [
    {
      img: 'https://preview.colorlib.com/theme/gym2/img/svg_icon/1.svg',
      heading: 'Weightlifting',
      description: 'Weightlifting is a challenging and empowering sport that builds both physical strength and mental resilience.',
    },
    {
      img: 'https://preview.colorlib.com/theme/gym2/img/svg_icon/2.svg',
      heading: 'Specific Muscles',
      description: 'Specific muscles refer to individual muscles in the body that play a crucial role in various movements and functions, contributing to overall strength, stability, and mobility.',
    },
    {
      img: 'https://preview.colorlib.com/theme/gym2/img/svg_icon/3.svg',
      heading: 'Flex Your Muscles',
      description: '"Flex your muscles" is an idiomatic expression encouraging someone to demonstrate their strength, skills, or capabilities confidently.',
    },
    {
      img: 'https://preview.colorlib.com/theme/gym2/img/svg_icon/4.svg',
      heading: 'Cardio Exercises',
      description: 'Cardio exercises, also known as cardiovascular exercises, are activities that elevate the heart rate and improve cardiovascular fitness, leading to enhanced endurance and overall health.',
    },
  ]
  return (
    <div className={TS.trainer_mainBackground}>
      <Background heading='OUR COACH' imgUrl={img} />
      <section className={TS.coach_section}>
        <h3>OUR TEAM</h3>
        <h1>TRAIN WITH EXPERTS</h1>
        <div className={TS.coach_div}>
          {
            Trainer_details.map((elem, index) => {
              return (
                <div
                  style={{
                    background: `url(${elem.url}) `,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: 'center',
                  }}
                  className={TS.coach_box}
                  key={index}>
                  <div className={TS.coach_box_details} >
                    <h2> {elem.name} </h2>
                    <p> {elem.coach} </p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
      <TrainerBanner h1={'A BIG OFFER FOR'} h2={'THIS SUMMER'} url={'https://preview.colorlib.com/theme/gym2/img/banner/big_offer.png.webp'} />
      <section className={TS.features_section}>
        <h1>PUSH YOUR LIMITS</h1>
        <p>Our trainers will help you to master all the different workouts and exercises, and push your limits. </p>
        <div className={TS.feature_container}>
          {
            trainer_card.map((elem, index) => {
              return (
                <div className={TS.feature_box} key={index}>
                  <img src={elem.img} alt="" />
                  <h3>{elem.heading}</h3>
                  <p>{elem.description}</p>
                </div>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}
