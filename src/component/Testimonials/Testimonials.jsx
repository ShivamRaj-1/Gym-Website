import React, {useState, useEffect} from 'react'
import TS from './Testimonials.module.css'
import {Testimonial_list} from '../../utils/Testimonial_list'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Testimonials() {

    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const timer = setTimeout(() => {

        const nextIndex = (currentIndex === Testimonial_list.length-1) ? 0 : currentIndex + 1
        setCurrentIndex(nextIndex) 
        
      }, 3000);

      return () => clearTimeout(timer);
    }, [currentIndex]);

    function handleLeftClick() {
        setCurrentIndex(currentIndex === 0 ? Testimonial_list.length - 1 : currentIndex - 1);
    }

    function handleRightClick() {
        setCurrentIndex(currentIndex === Testimonial_list.length - 1 ? 0 : currentIndex + 1);
    }

  return (
    <div className={TS.Testimonials_main_background}>
        <h4>TESTIMONIALS</h4>   
        <h1>OUR CLIENT SAY</h1>

        <div className={TS.testimonials_container} >

            <div className={TS.arrow_left} onClick={handleLeftClick}><IoIosArrowBack/></div>
            <div className={TS.Testimonials_box}>
                <img src={Testimonial_list[currentIndex].image} alt="" />
                <p>{Testimonial_list[currentIndex].feedback}</p>
                <h2>{Testimonial_list[currentIndex].name}</h2>
            </div>
            <div className={TS.arrow_right} onClick={handleRightClick}><IoIosArrowForward/></div>

        </div>

    </div>
  )
}
