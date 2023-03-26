import { Routes, Route } from 'react-router-dom';

import Navbar from "../../components/Navbar";

import Footer from "../../components/Footer";

import Home from "../../pages/Home";
// import BookingPage from "../../pages/BookingPage";
// import { ConfirmBookingPage } from "../../pages/ConfirmBookingPage";

function App() {

  return (
    <>
    <Navbar />
    
      <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirm-booking" element={<ConfirmBookingPage />} /> */}
        </Routes>

    <Footer />
    </>
  );
}

export default App;
