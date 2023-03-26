import { Routes, Route } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import Home from "../../pages/Home";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Reserve from '../../pages/Reserve';
// import BookingPage from "../../pages/BookingPage";
// import { ConfirmBookingPage } from "../../pages/ConfirmBookingPage";

function App() {

  return (
    <>
    <Navbar />
    
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reserve" element={<Reserve />} />
          {/* <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirm-booking" element={<ConfirmBookingPage />} /> */}
        </Routes>

    <Footer />
    </>
  );
}

export default App;
