import React from "react";
import styles from "./About.module.css";
import Button from "../../component/button/Button";
import Background from "../../component/Background/Background";
import Testimonials from "../../component/Testimonials/Testimonials";
import { Link } from "react-router-dom";

export default function About() {
  const img =
    "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

  return (
    <>
      <div className={styles.transparentBackground}></div>
      <Background heading="ABOUT US" imgUrl={img} />
      <div className={styles.container}>
        <section className={styles.about}>
          <iframe
            src="https://www.youtube.com/embed/vei81-bZhG4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
          <div className={styles.content}>
            <h2>About Us</h2>
            <p>
              Fitness Trainer India celebrates 20th Anniversary this year. The
              gym community is getting stronger each year while taking forward
              the legacy in fitness. We are a largest co-ed gym chain with 700+
              centres internationally. Fitness Trainer India is present in 25
              states and 90+ cities.
            </p>
            <Link
              to="https://www.youtube.com/@OFFICIALTHENXSTUDIOS"
              target="_BLANK"
            >
              <Button name="Learn More" />
            </Link>
          </div>
        </section>
        <section className={styles.choose}>
          <iframe
            src="https://www.youtube.com/embed/Rd3XHPk5me4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
          <div className={styles.content}>
            <h2>Why Choose Us?</h2>
            <ul>
              <li>
                <h3>Consultations With Expert</h3>
                <p>
                  After their inception in August of 1965 at Venice, California,
                  Fitness Trainer has become the largest co-ed gym chain in the world
                  with over 700+ clubs in 28 countries. Today, Fitness Trainer has
                  expanded its fitness profile to offer all the latest equipment
                  and services, including group exercise, personal gym training,
                  cardiovascular equipment, spinning and yoga, while maintaining
                  its core weightlifting tradition
                </p>
              </li>
              <li>
                <h3>Best Workout Facilities</h3>
                <p>
                  The year 2022 marked the 20th anniversary of Gold's Gym India.
                  In these glorious years Fitness Trainer has expanded its legacy
                  into 150+ gyms in India across 95+ cities and a few more ready
                  to start in the near future.
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
      <Testimonials />
    </>
  );
}
