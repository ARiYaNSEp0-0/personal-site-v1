import { Heading, Button, Paragraph } from "../../components";
import { motion } from "framer-motion";
const ServiceCard = ({ title, iconType, icons, description }) => {
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: "spring", duration: 5 }}
      className="service-card flow-content--vertical"
    >
      {icons[iconType]}
      <Heading level="h3" className="sub-heading">
        {title}
      </Heading>
      <Paragraph>{description}</Paragraph>
      <Button className="service-card__btn">اطلاعات بیشتر</Button>
    </motion.li>
  );
};

export default ServiceCard;
