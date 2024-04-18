import { Heading, Button, Paragraph } from "../index";
import { motion } from "framer-motion";

const ServiceCard = ({ title, icon, description }) => {
  // const transition = { duration: 2, type: "spring" };

  // initial={{
  //   transform: isOddItem
  //     ? "translate3d(-100%, 0, 0)"
  //     : "translate3d(150%, 0, 0)",
  // }}
  // whileInView={{
  //   transform: isOddItem ? "translate3d(0,0,0)" : "translate3d(100%,0,0)",
  // }}
  // transition={transition}
  return (
    <motion.li className="service-card flow-content--vertical">
      {icon}
      <Heading level="h3" className="sub-heading">
        {title}
      </Heading>
      <Paragraph>{description}</Paragraph>
      <Button className="service-card__btn">اطلاعات بیشتر</Button>
    </motion.li>
  );
};

export default ServiceCard;
