import "./CallToActionButton.css";

const CallToActionButton = ({
  as: Element = "a",
  children,
  href,
  className = "",
  ...rest
}) => {
  return (
    <Element className={`cta-button ${className}`} href={href} {...rest}>
      {children}
    </Element>
  );
};

export default CallToActionButton;
