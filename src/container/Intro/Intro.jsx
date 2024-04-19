import { CallToAction, Heading, Paragraph } from "../../components";
import bloblBack from "../../assets/images/Path 4.svg";
import blobFront from "../../assets/images/Path 5.svg";
import person from "../../assets/images/person.webp";

import "./Intro.css";

const Intro = () => {
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
        </div>
      </div>
    </header>
  );
};

export default Intro;
