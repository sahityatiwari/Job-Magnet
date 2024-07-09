import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Context } from "../../main";
import React, { useContext } from "react";

const Footer = () => {
  const { isAuthorized } = useContext(Context);

  return (

    <footer className={isAuthorized ? "footerShow" : "footerHide"}>

      <div>&copy; All Rights Reserved By Sahitya.</div>

      <div>
        <Link to={"https://www.linkedin.com/in/sahitya-tiwari-021b57232?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target="_blank">
          <FaLinkedin />
        </Link>
        
        <Link to={"hhttps://www.instagram.com/kya_sahitya/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>

    </footer>

  );
};

export default Footer;