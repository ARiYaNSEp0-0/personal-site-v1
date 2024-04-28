import {
  CallToAction,
  Heading,
  Paragraph,
  SocialMedia,
} from "../../components";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

import bloblBack from "../../assets/images/Path 4.svg";
import blobFront from "../../assets/images/Path 5.svg";
import person from "../../assets/images/person.webp";

import "./Intro.css";

const Intro = () => {
  const introSocials = [
    {
      id: 1,
      address: "https://github.com/ARiYaNSEp0-0",
      icon: <FaGithub size={"2rem"} />,
    },
    { id: 2, address: "#", icon: <FaLinkedin size={"2rem"} /> },
    { id: 3, address: "#", icon: <FaWhatsapp size={"2rem"} /> },
  ];
  return (
    <header className="introduction">
      <div className="container container-lg">
        <div className="introduction__inner  equal-columns">
          <div className="introduction__text flow-content--vertical">
            <Heading level="h1" className="page-heading">
              سلام به <span>سایت شخصی من</span> خوش آمدید
            </Heading>
            <Paragraph>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </Paragraph>
            <CallToAction href="#contact" className="flow-content--large">
              استخدام من
            </CallToAction>
          </div>

          <div className="introduction__visual flex-center">
            <img className="blob--back" src={bloblBack} alt="" />
            <img className="blob--front" src={blobFront} alt="" />
            <img className="person" src={person} alt="person logo." />
          </div>

          <SocialMedia direction="vertical" socials={introSocials} />
        </div>
      </div>
    </header>
  );
};

export default Intro;
