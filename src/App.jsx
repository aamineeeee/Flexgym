import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./assets/components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Classes from "./pages/Classes/Classes";
import Trainers from "./pages/Trainers/Trainers";
import Contact from "./pages/Contact/Contact";
import ServicesCard from "./assets/components/ServicesCard/ServicesCard";
import TeamCard from "./assets/components/TeamCard/TeamCard";
import Footer from "./assets/components/Footer/Footer";
import Register from "./pages/Register/Register";
import Register2 from "./pages/Register/Register2";
import TopProducts from "./assets/components/TopProducts/TopProducts";
import Subsc from "./pages/subsc/subsc";
import Profile from "./assets/components/Profile/Profile";
import Abonnements from "./assets/components/Abonnements/Abonnements";
import History from "./assets/components/History/History";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home ServicesCard={ServicesCard} TeamCard={TeamCard} />}
          />
          <Route
            path="/about"
            element={<About ServicesCard={ServicesCard} TeamCard={TeamCard} />}
          />
          <Route path="/classes" element={<Classes />} />
          <Route path="/trainers" element={<Trainers TeamCard={TeamCard} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register2" element={<Register2 />} />
          <Route path="/TopProducts" element={<TopProducts />} />
          <Route path="/subsc" element={<Subsc />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Abonnements" element={<Abonnements />} />
          <Route path="/History" element={<History />} />
          
          {/*<Route path="*" element={<ErrorPage/>} />*/}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
