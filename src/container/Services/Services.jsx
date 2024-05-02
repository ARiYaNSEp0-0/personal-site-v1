import { Heading, CallToAction, Paragraph } from "../../components";

import { MdDesignServices, MdCode, MdSearch } from "react-icons/md";

import ServiceCard from "./ServiceCard";

import resume from "../../assets/resume.pdf";

import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "طراحی",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم",
      iconType: "design",
    },
    {
      id: 2,
      title: "توسعه",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم",
      iconType: "code",
    },
    {
      id: 3,
      title: "بهینه سازی موتور های جست و جو",
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگر ها و متون بلکه روزنامه و مجله در ستون و سطر آنچنان که لازم",
      iconType: "seo",
    },
  ];

  const serviceIconTypes = {
    design: <MdDesignServices />,
    code: <MdCode />,
    seo: <MdSearch />,
  };

  return (
    <section className="services">
      <div className="container container-md" id="services">
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
                <ServiceCard
                  key={id}
                  icons={serviceIconTypes}
                  {...serviceInfo}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
