import React, { useContext, useEffect } from "react";
import "./App.css";
import { Context } from "./main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home/Home";
import ContactUsPage from "./components/Home/contact";
import AboutPage from "./components/Home/about";
import Jobs from "./components/Job/Jobs";
import JobDetails from "./components/Job/JobDetails";
import Application from "./components/Application/Application";
import MyApplication from "./components/Application/MyApplication";
import PostJob from "./components/Job/PostJob";
import NotFound from "./components/NotFound/NotFound";
import MyJobs from "./components/Job/MyJobs";
import Demo from "./components/Home/Demo";
import ForgotPassword from "./components/Auth/ForgotPassword";

const App = () => {
  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://job-magnet.onrender.com/api/v1/user/getUser",
          {
            withCredentials: true,
          }
        );
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        setIsAuthorized(false);
      }
    };
    fetchUser();
  }, [isAuthorized]);

  return (
    <>
      <BrowserRouter>
    
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/application/:id" element={<Application />} />
          <Route path="/applications/me" element={<MyApplication />} />
          <Route path="/job/post" element={<PostJob />} />
          <Route path="/job/me" element={<MyJobs />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/demo" element={<Demo/>} />
          <Route path="/forgot/:email" element={<ForgotPassword />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        
        <Toaster />
      </BrowserRouter>
    </>
  );
};

export default App;
