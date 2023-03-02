import "./carousel.syles.css";

export const Carousel = ({ children, title }) => {
  return (
    <>
      <div className="carousel-wrapper">
        <h3>{title}</h3>
        <div className="carousel-item-container">{children}</div>
      </div>
    </>
  );
};
