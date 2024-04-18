import "./Heading.css";

const Heading = ({ level: Heading = "h2", children, className, ...props }) => {
  return (
    <Heading className={`heading ${className}`} {...props}>
      {children}
    </Heading>
  );
};

export default Heading;
