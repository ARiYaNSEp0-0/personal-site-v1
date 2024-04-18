import "./Blur.css";

const Blur = ({ width, height, color, x, y, blur }) => {
  return (
    <div
      className="blur"
      style={{
        "--w": width,
        "--h": height,
        "--clr": color,
        "--x": x,
        "--y": y,
        "--blur": blur,
      }}
    ></div>
  );
};

export default Blur;
