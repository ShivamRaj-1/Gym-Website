import React, { useState } from "react";
import signUp from "./Signup.module.css";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUpPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const getUsersData = () => {
    const users = localStorage.getItem("users");
    try {
      if (users) {
        return JSON.parse(users);
      }
    } catch (error) {
      return [];
    }
    return [];
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const input = {
      name: name,
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:80/newuser/user/save", input)
      .then(function (response) {
        console.log(response.data);
      });

    if (!name || !email || !password) {
      setError("Please fill all fields");
      return;
    }
    if (!validateEmail(email)) {
      setError("Invalid email format");
      return;
    }
    if (password.length < 8) {
      alert("plz enter required 8 word");
      return;
    }
    const users = getUsersData();
    users.push({
      name,
      email,
      password,
    });

    // localStorage.setItem("users", JSON.stringify(users));
    alert("sign up done successfully");
    setError("");
    setName("");
    setEmail("");
    setPassword("");
    navigate("/signin");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className={signUp.mainContainer}>
      <div className={signUp.form}>
        <form onSubmit={handleSubmit}>
          <div className={signUp.inputDiv}>
            <p>name :</p>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <p>Email:</p>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <p>Password:</p>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
          </div>
          {error && <p className={signUp.error}>{error}</p>}
          <br />
          <div className={signUp.buttonDiv}>
            <p className={signUp.registerLink}>
              Already have an account.
              <Link to="/signin" className={signUp.link}>
                SignIn
              </Link>
            </p>
            <button type="submit" className={signUp.button}>
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
