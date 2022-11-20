import React from "react";
import "../styles/Footer.css";
import { LinkedIn } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        {" "}
        <a
          href="https://www.linkedin.com/in/ilia-jaghmaidze-a16a12257/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedIn />
        </a>
      </div>
      <p> &copy; 2022 ilia.com</p>
    </div>
  );
}

export default Footer;
