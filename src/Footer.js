import React from "react";

const Footer = () => {

const today = new Date()

  return (
  <footer>
      <h6>Saporito Inc. &copy; {today.getFullYear()} </h6>
  </footer>
  );
};

export default Footer;
