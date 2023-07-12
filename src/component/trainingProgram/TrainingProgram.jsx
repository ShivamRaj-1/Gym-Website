import React, { Fragment, useState } from "react";
import "../../App.css";
import styles from "./TrainingProgram.module.css";
import { MdArrowForwardIos, MdArrowBackIosNew } from "react-icons/md";
import { TrainingProgram_data } from '../../utils/TrainingProgram_data';

export default function TrainingProgram() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChangeLeft = () => {
    setCurrentIndex(currentIndex === 0 ? TrainingProgram_data.length - 3 : currentIndex - 1);
  };

  const handleSlideChangeRight = () => {
    setCurrentIndex(currentIndex === TrainingProgram_data.length - 3 ? 0 : currentIndex + 1);
  };
  // console.log(currentIndex);

  return (
    <Fragment>
      <div className={styles.mainContainer}>
        <h1>Training Program</h1>
        <div className={styles.carousal_div}>
          {window.screen.width > 840 ?
            TrainingProgram_data.slice(currentIndex, currentIndex + 3).map((ele, index) => {
              return (
                <div
                  key={index}
                  className={styles.carousal}
                //   style={{ backgroundImage: `url(${ele.img}) center cover` }}
                >
                  <b className={styles.imgText}>{ele.text}</b>
                  <img src={ele.img} alt={`Slide${index}`} />
                </div>
              );
            })
            :
            TrainingProgram_data.map((ele, index) => {
              return (
                <div
                  key={index}
                  className={styles.carousal}
                //   style={{ backgroundImage: `url(${ele.img}) center cover` }}
                >
                  <b className={styles.imgText}>{ele.text}</b>
                  <img src={ele.img} alt={`Slide${index}`} />
                </div>
              );
            })
          }
        </div>
        <div className={styles.buttonContainer}>
          <MdArrowBackIosNew className={styles.icon}
            onClick={handleSlideChangeLeft}

          />


          <MdArrowForwardIos className={styles.icon}
            onClick={handleSlideChangeRight}

          />

        </div>
      </div>
    </Fragment>
  );
}
