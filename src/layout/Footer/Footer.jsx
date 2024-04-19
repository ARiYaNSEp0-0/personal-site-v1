import "./Footer.css";
import { SocialMedia } from "../../components";

import wave1 from "../../assets/images/wave-1.svg";
import wave2 from "../../assets/images/wave-3.svg";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const footerSocials = [
    { id: 1, address: "#", icon: <FaInstagram size={"2rem"} /> },
    { id: 2, address: "#", icon: <FaGithub size={"2rem"} /> },
    { id: 3, address: "#", icon: <FaLinkedin size={"2rem"} /> },
  ];
  return (
    <footer className="footer">
      <img className="footer__wave-back" src={wave1} alt="" />
      <img className="footer__wave-front" src={wave2} alt="" />
      <div className="container container-lg">
        <div className="footer__inner equal-columns">
          <div className="footer__contact-information flex-center">
            <span>ariansepahi.v8@gmail.com</span>
          </div>
          <div className="footer__socials flex-center">
            <SocialMedia socials={footerSocials} direction="horizotal" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
