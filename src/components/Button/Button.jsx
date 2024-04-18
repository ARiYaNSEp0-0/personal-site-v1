import "./Button.css";

const Button = ({
  children,
  className = "",
  onClick = () => {
    return;
  },
  ...props
}) => {
  return (
    <button onClick={onClick} className={`btn ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
