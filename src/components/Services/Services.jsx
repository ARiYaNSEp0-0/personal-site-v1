import { Heading, CallToAction, ServiceCard, Paragraph } from "../index";

import { MdDesignServices, MdCode, MdSearch } from "react-icons/md";

import "./Services.css";

import resume from "../../assets/resume.pdf";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "طراحی",
      icon: <MdDesignServices />,
      description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
      استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
      ستون و سطرآنچنان که لازم`,
    },
    {
      id: 2,
      title: "توسعه",
      icon: <MdCode />,
      description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
      استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
      ستون و سطرآنچنان که لازم`,
    },
    {
      id: 3,
      title: "بهینه سازی موتور های جست و جو",
      icon: <MdSearch />,
      description: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
      استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
      ستون و سطرآنچنان که لازم`,
    },
  ];

  return (
    <section className="services">
      <div className="container container-md">
        <div className="services__inner equal-columns">
          <div className="services__text flow-content--vertical">
            <Heading level="h2" className="section-heading">
              چه کار ها و <span>خدماتی انجام میدم؟</span>
            </Heading>
            <Paragraph>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم
            </Paragraph>
            <CallToAction
              href={resume}
              download="ariyan-sepahi-resume"
              className="flow-content--medium"
            >
              دانلود رزومه
            </CallToAction>
          </div>
          <div className="cards">
            <ul className="services-cards">
              {services.map(({ id, ...serviceInfo }) => (
                <ServiceCard key={id} {...serviceInfo} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
