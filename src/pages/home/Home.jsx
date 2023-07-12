
import React, { Fragment, useEffect,useState } from "react";
// import style from "./Home.module.css";
import style from "./demo.module.css";

import Button from "../../component/button/Button";
import TrainingProgram from "../../component/trainingProgram/TrainingProgram";
import { slideData } from "../../utils/HomePageSliderData.js";
import TrainerMain from '../../component/TrainerMain/TrainerMain'
import TrainerBanner from '../../component/TrainerBanner/TrainerBanner'
import { useNavigate } from "react-router";



export default function Home() {


  return (
    <Fragment>
      <div>
        <ImageSlider />
        <TrainingProgram />
        <TrainerBanner h1={'WORKOUT WITH'} h2={'PROFESSIONAL TRAINERS'} url={'https://preview.colorlib.com/theme/gym2/img/banner/offer.png.webp'} />
      </div>
      <TrainerMain show={true} />
    </Fragment>
  );
}

export function ImageSlider() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentSlideIndex === slideData.length-1) {
        setCurrentSlideIndex(0);
      } else {
        setCurrentSlideIndex(currentSlideIndex + 1);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlideIndex]);

  const bgImageStyle = {
    backgroundImage: `url(${slideData[currentSlideIndex].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100vh",
    opacity: '0.7',
  };

  const pageToJoin = () => {
    navigate('./signin')
  }

  return (
    <div className={style.containerStyles}>
      <div style={bgImageStyle}></div>
      <div className={style.des_carousal}>

        <div className={style.description}>
          <h1 style={{color: 'rgb(68, 20, 38)'}} >{slideData[currentSlideIndex].text}</h1>
          <Button name='Join With Us'
            onClick={pageToJoin}
          />
        </div>
        
      </div>
    </div>
  );
}

