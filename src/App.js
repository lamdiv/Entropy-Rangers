import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./components/Home";
import Login from "./components/Authentication/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/Authentication/Signup";
import ForgetPassword from "./components/Authentication/ForgetPassword";
import { useContext, useState } from "react";
import CreateEvent from "./components/CreateEvent/CreateEvent";
import Profile from "./components/Authentication/Profile";
import Event from "./components/Event";
import JoinEvent from "./components/JoinEvent/JoinEvent";
import AuthContext from "./store/auth-context";

function App() {
  const [IsmodalOpen, setIsModalOpen] = useState(false);
  const ctx = useContext(AuthContext);

  //open create event modal
  const openModalHandler = () => {
    setIsModalOpen(true);
  };

  //waiting to clear form value for modal has been closed
  const closeModalHandler = (clearForm) => {
    setIsModalOpen(false);
    setTimeout(() => clearForm(), 500);
  };

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar onModalOpen={openModalHandler} />
        <CreateEvent open={IsmodalOpen} closeModalHandler={closeModalHandler}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/event" element={<Event />} />
          <Route exact path="/account/login" element={<Login />} />
          <Route exact path="/account/register" element={<Signup />} />
          <Route
            exact
            path="/account/forget-password"
            element={<ForgetPassword />}
          />

          <Route exact path="/account/user/:id" element={ctx.isLoggedIn? <Profile /> : <Navigate to="/" />} />
          <Route exact path="/event/calculate" element={ctx.isLoggedIn? <JoinEvent /> : <Navigate to="/account/login" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
