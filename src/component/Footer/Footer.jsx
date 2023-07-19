import React from "react";
import Styles from "./footer.module.css";
import Fitness from "./Fitness";

import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import Account from "./Account";

export default function Footer() {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footer_box}>
        <div className={Styles.media}>
          <h1>Fitness Trainer</h1>
          <hr></hr>
          <h4>Best Fitness club</h4>
          <div className={Styles.content}>
            <p>Lorem ipsum dolor sit amet</p>
            <p>consectetuer adipiscing elit</p>
          </div>
          <div className={Styles.footer_box_social}>
            <div className={Styles.footer_social}>
              <li>
                <a
                  href="https://www.facebook.com/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <TiSocialFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedIn.com"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <TiSocialLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <TiSocialTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <TiSocialYoutube />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <TiSocialInstagram />
                </a>
              </li>
            </div>
          </div>
        </div>
        <div className={Styles.footer_box_discover}>
          <h1>Fitness Information</h1>
          <hr></hr>
          <Fitness />
        </div>
        <div className={Styles.footer_box_helpCenter}>
          <h1>My Account</h1>
          <hr></hr>
          <Account />
        </div>
      </div>
    </div>
  );
}