import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useContext, useEffect, useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const { isAuthorized, setIsAuthorized, user } = useContext(Context);

  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "https://job-magnet.onrender.com/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message), setIsAuthorized(true);
    }
  };

  return (
    <nav className={isAuthorized? "navbarShow" : "navbarShow"}>
      <div className="container">
        <div className="hello">
          <h1>Job Magnet</h1>
        </div>
        <ul className={!show? "menu" : "show-menu menu"}>
          {isAuthorized? (
            <>
              <li>
                <Link to={"/"} onClick={() => setShow(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/job/getall"} onClick={() => setShow(false)}>
                  All Jobs
                </Link>
              </li>
              <li>
                <Link to={"/applications/me"} onClick={() => setShow(false)}>
                  {user && user.role === "Recruiter"
                   ? "Applicant's Applications"
                    : "My Applications"}
                </Link>
              </li>
              {user && user.role === "Recruiter"? (
                <>
                  <li>
                    <Link to={"/job/post"} onClick={() => setShow(false)}>
                      Post New Job
                    </Link>
                  </li>
                  <li>
                    <Link to={"/job/me"} onClick={() => setShow(false)}>
                      View Your Jobs
                    </Link>
                  </li>
                </>
              ) : (
                <></>
              )}
              <li>
                <button onClick={handleLogout}>LOGOUT</button>
              </li>
            </>
          ) : (
            <>
            <li>
                <Link to={"/"} onClick={() => setShow(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/about"} onClick={() => setShow(false)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to={"/demo"} onClick={() => setShow(false)}>
                  Demo
                </Link>
              </li>
              <li>
                <Link to={"/contact"} onClick={() => setShow(false)}>
                  Contact Us
                </Link>
              </li>
            </>
          )}
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;