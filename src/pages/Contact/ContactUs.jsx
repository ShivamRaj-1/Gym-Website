import React, { useState, useEffect } from "react";
import styles from "./ContactUs.module.css";
import Background from "../../component/Background/Background";
import axios from "axios";
import ctn from "./gym.jpg";

export default function Contact() {
  const [input, setInput] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleFeedback(event) {
    event.preventDefault();
    axios
      .post("http://localhost:80/feedback/user/save", input)
      .then(function (response) {
        console.log(response.data);
      });
  }

  function handleSubmit() {
    if (!name || !email || !subject || !message) {
      alert("Please fill all fields");
      return;
    } else if (!validateEmail(email)) {
      alert("Invalid email format");
      return;
    }

    setInput({
      name: name,
      email: email,
      subject: subject,
      message: message,
    });

    alert("Thank you for your feedback");
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <>
      <Background heading="CONTACT US" imgUrl={ctn} />
      <div className={styles.parent}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.8642819412785!2d75.35153377406608!3d19.887951925983756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3d15bc6652f%3A0xb44413a328dcb453!2sFitness%20Trainer!5e0!3m2!1sen!2sin!4v1681972558184!5m2!1sen!2sin"
          width="100%"
          height="600"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          title="addressgym"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={styles.main_container}>
          <div className={styles.first_container}>
            <h1>Get In Touch</h1>
            <h4>
              If you are interested in working with us, please get in touch.
            </h4>
            <div className={styles.line}></div>
            <p>
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynamicus, qui
              sequitur mutationem consuetudium lectorum.
            </p>
            <p>
              Investigationes demonstraverunt lectores legere me lius quod ii
              legunt saepius. Claritas est etiam processus dynamicus, qui
              sequitur mutationem consuetudium lectorum.
            </p>
            <p>
              Address: Fitness Trainer Cidco Rd, Kirti Housing Society, Mathura
              Nagar, N-6, Kiradpura, Aurangabad, Maharashtra 43100 Email:
              <span style={{ color: " rgb(186, 14, 43)" }}>
                hello@albedo.com
              </span>
            </p>
            <p>
              Monday t Friday from9.00 am to 8.00 pm EST Saturday from 10.00 am
              to 6.00 pm EST
            </p>
          </div>
          <div className={styles.second_container}>
            <h1>FeedBack</h1>
            <form onSubmit={handleFeedback} className={styles.second_container}>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              <input
                type="email"
                placeholder="Your E-mail"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
              <textarea
                id=""
                cols="30"
                rows="10"
                placeholder="Message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <div>
                <button type="submit" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
