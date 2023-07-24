import React, { useEffect } from "react";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Btn from "../button/Button";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import styles from "./Navbar.module.css";
import logo from "./logo.png";
import axios from "axios";
import { Rerender } from "../../Recoil/Atom";
import { useRecoilState } from "recoil";

export default function Navbar({ subscriptionType }) {
  const [user, setUser] = useState("");
  const [rerender, setRerender] = useRecoilState(Rerender);

  useEffect(() => {
    axios
      .get("http://localhost:80/newuser/user/save")
      .then(function (response) {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (loggedInUser) {
          const email = loggedInUser.email;
          const password = loggedInUser.password;

          const foundUser = response.data.find(
            (user) => user.email === email && user.password === password
          );

          setUser(foundUser);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [rerender]);

  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    setMenu(!menu);
  }

  function handleLogout() {
    localStorage.removeItem("loggedInUser");
    navigate("/signin");
  }

  const currentUser = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <nav className={styles.navBar}>
      <Link to={"/"} className={styles.Logo}>
        <div className={styles.left}>
          <img className={styles.logo} src={logo} alt="logo" />
        </div>
      </Link>
      <div>
        <ul className={styles.listItems}>
          <li>
            <Link to={"/"} className={styles.link}>
              Home
            </Link>
          </li>
          <li>
            <Link to={"/about"} className={styles.link}>
              AboutUs
            </Link>
          </li>
          <li>
            <Link to={"/trainer"} className={styles.link}>
              Trainers
            </Link>
          </li>
          <li>
            <Link to={"/pricing"} className={styles.link}>
              Pricing
            </Link>
          </li>
          <li>
            <Link to={"/contact"} className={styles.link}>
              Contact Us
            </Link>
          </li>
          {!currentUser ? (
            <Link to={"/signin"}>
              <Btn name="Join Us" />
            </Link>
          ) : (
            <PopupState variant="popover" popupId="demo-popup-popover">
              {(popupState) => (
                <div>
                  <Button variant="contained" {...bindTrigger(popupState)}>
                    {currentUser.name}
                  </Button>
                  <Popover
                    {...bindPopover(popupState)}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "center",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "center",
                    }}
                  >
                    <Typography sx={{ p: 2 }}>
                      {user.subscription ? user.subscription : subscriptionType}
                    </Typography>
                    <hr />
                    <Typography sx={{ p: 2 }} onClick={handleLogout}>
                      Logout
                    </Typography>
                  </Popover>
                </div>
              )}
            </PopupState>
          )}
        </ul>
        <div className={styles.menuContainer}>
          <MdMenu
            style={{ fontSize: 40 }}
            className={styles.menu}
            onClick={() => handleClick()}
          />
          {menu && (
            <ul className={styles.hiddenMenu}>
              <li>
                <Link to={"/"} className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about"} className={styles.link}>
                  AboutUs
                </Link>
              </li>
              <li>
                <Link to={"/trainer"} className={styles.link}>
                  Trainers
                </Link>
              </li>
              <li>
                <Link to={"/pricing"} className={styles.link}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className={styles.link}>
                  Contact Us
                </Link>
              </li>

              {!currentUser ? (
                <Link to={"/signin"}>
                  <Btn name="Join Us" />
                </Link>
              ) : (
                <PopupState variant="popover" popupId="demo-popup-popover">
                  {(popupState) => (
                    <div>
                      <Button variant="contained" {...bindTrigger(popupState)}>
                        {currentUser.name}
                      </Button>
                      <Popover
                        {...bindPopover(popupState)}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                      >
                        <Typography sx={{ p: 2 }}>
                          {user.subscription || subscriptionType}
                        </Typography>
                        <hr />
                        <Typography sx={{ p: 2 }} onClick={handleLogout}>
                          Logout
                        </Typography>
                      </Popover>
                    </div>
                  )}
                </PopupState>
              )}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
