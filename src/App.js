import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./components/Home";
import Login from "./components/Authentication/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Authentication/Signup";
import ForgetPassword from "./components/Authentication/ForgetPassword";
import { useState } from "react";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import Profile from "./components/Authentication/Profile";


function App() {
  const [IsmodalOpen, setIsModalOpen]= useState(false)

  //open create event modal
  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  //waiting to clear form value for modal has been closed
  const closeModalHandler = (clearForm) => {
    setIsModalOpen(false);
    setTimeout(()=>clearForm(),500)
    
  };

  return (
    <>
     <Router>
      <ScrollToTop />
      <Navbar onModalOpen={openModalHandler}/>
      <CreateEvent open={IsmodalOpen} closeModalHandler={closeModalHandler}/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/account/login" element={<Login />} />
        <Route exact path="/account/register" element={<Signup />} />
        <Route exact path="/account/forget-password" element={<ForgetPassword />} />
        <Route exact path="/account/user/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;


