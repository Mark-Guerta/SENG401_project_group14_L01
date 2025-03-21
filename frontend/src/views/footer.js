import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
      <span className="footer-text">© 2025 White Dressing.</span>
      </div>
    <div className="footer-center">
      <div className="footer-item">
      About Us
      <span className="tooltip"> SENG401 G14 <br></br> Mark Jimenez <br></br> Ivan Ibe <br></br> 
      Mark Guerta <br></br> Altin Bakiu <br></br> Danial Farrukh <br></br> John Tumacder</span>
      </div>
      <div className="footer-item">
      Contact
      <span className="tooltip">White.D@gmail.com <br></br> (403)-123-4567 </span>
      </div>
    </div>
    <div className="footer-right"> 
    <img src="/external/Logo3.png" className="footer-logo"/>
    </div> 
  </footer>
  );
};

export default Footer;
