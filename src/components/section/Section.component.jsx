import "../section/section.styles.css";

export const SectionLayout = ({ children }) => {
  return <div className="section-container gd gd-col-2">{children}</div>;
};

export const SectionText = ({ children }) => {
  return (
    <>
      <div className="section-text-container ">
        <p> {children}</p>
        <button className="btn btn-round text-col-white bg-tertiary-purple btn-wd-fit-content">
          Learn more
        </button>
      </div>
    </>
  );
};

export const SectionImage = () => {
  return (
    <>
      <div className="section-image-container ">
        <img src="images/test-image.JPG" alt="yoda"></img>
      </div>
    </>
  );
};
export const Users = () => {
  return (
    <div className="user-testimony-wrapper ">
      <div className="user-testimony-container">
        <h3 className="mg-10">Our Artists Says</h3>
        <p>
          I am a undergraduate and a artist and since i found this platform my
          life has changed. i got signed in to one of the best record label in
          Nigeria and my audience reach has surpassed all thanks to 9jastar
        </p>
        <div className="user-details-container">
          <img src="images/9jastar /913.jpg" alt="user profile"></img>
          <p> Reya, 22</p>
          <p>Artist</p>
        </div>
      </div>
    </div>
  );
};
