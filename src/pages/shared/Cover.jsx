import { Parallax } from "react-parallax";

const Cover = ({ img, title, subtitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div className="hero h-[600px]">
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{subtitle}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};
export default Cover;
