import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home/Home";
import MainAbout from "./pages/mainabout/MainAbout";

import MainContact from "./pages/contact/MainContact";
import InsuranceForm from "./components/insurance/HomeInsurance";
import TravelInsurance from "./components/insurance/Travelinsurance";
import CarInsurance from "./components/insurance/Carinsurance";
import Business from "./components/insurance/Business";
import Health from "./components/insurance/Health";
import Mainfitness from "./pages/fitness/Mainfitness";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Login from "./components/Login";
import RegistrationForm from "./components/ResistrationFrom";
import BlogList from "./components/blog/BlogList";
import BlogDetails from "./components/blog/BlogDetails";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<MainAbout />} />
            <Route path="/fitness" element={<Mainfitness/>} />
            <Route path="/contact" element={<MainContact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegistrationForm/>}/>
            <Route path="/insuranceform" element={<InsuranceForm/>} />
            <Route path="/insurance-travel" element={<TravelInsurance/>} />
            <Route path="/insurance-car" element={<CarInsurance/>}/>
            <Route path="/insurance-business" element={<Business/>}/>
            <Route path="/insurance-health" element={<Health/>}/>
            <Route path="/privacy" element={<PrivacyPolicy/>}/>
             <Route path="/blog" element={<BlogList />} />
             <Route path="/post/:id" element={<BlogDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
