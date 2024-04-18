import "./Paragraph.css";

const Paragraph = ({ children, className = "" }) => {
  return <p className={`paragraph ${className}`}>{children}</p>;
};

export default Paragraph;
