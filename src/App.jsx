import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Trainer from "./pages/Trainer/Trainer";
import Pricing from "./pages/Pricing/Pricing";
import ContactUs from "./pages/Contact/ContactUs";
import Signup from "./pages/Signup/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import { useState } from "react";
import PaymentPage from "./pages/payment/PaymentPage";

function App() {
  const [subscriptionType, setSubscriptionType] = useState("Regular");
  return (
    <>
      <Navbar subscriptionType={subscriptionType} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/trainer" element={<Trainer />} />
        <Route path="/pricing" element={<Pricing setSubscriptionType={setSubscriptionType}/>} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/payment/1month" element={<PaymentPage pass={'1month'}/>} />
        <Route path="/payment/3month" element={<PaymentPage pass={'3month'}/>} />
        <Route path="/*" element={<h1>404: Page Not found</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
