import "./dashboard.route.css";
import { PlayIcon } from "../../svg/PlayIcon.svg";
import { MusicIcon } from "../../svg/music.svg";
import { Carousel } from "../../components/carousel/Carousel.component";
import { useParams, Link } from "react-router-dom";
import artists from "../../../src/artist.json";

export const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <DashboardHeader />
    </div>
  );
};
export const DashboardHeader = () => {
  const { artistId } = useParams();

  const { name, location, spotlight, listens, mainImage, currentListens } =
    artists.find(
      (element) => element.name.toLowerCase() === artistId.toLowerCase()
    );
  console.log();
  return (
    <>
      <div className="dashboard-header-container">
        <img className="dashboard-image" src={mainImage} alt={name}></img>
        <div className="dashboard-header-text-container">
          <h2 className="bg-black">{name}</h2>
          <p className="bg-black mg-10-t">
            <span>By</span> {name}
          </p>
          <div className="fl fl-row dashboard-text-info-container">
            <div className="dashboard-text-info">
              <span>
                <PlayIcon />
              </span>
              <p> {listens} plays</p>
            </div>
            <div className="dashboard-text-info">
              <span>
                <MusicIcon />
              </span>
              <p> {currentListens} currently listening</p>
            </div>
          </div>
        </div>
      </div>
      <Carousel title={"ARTIST SPOTLIGHT"}>
        {spotlight.map((item, index) => (
          <DashboardCard image={item} key={index} />
        ))}
      </Carousel>
      <div className="dashboard-wrapper">
        <h3 className="pd-20"> FAST RISING GEOGRAPHY</h3>
        <div className="dashboard-section-container">
          {location.map((element, index) => (
            <DashboardCard title={element} image={mainImage} key={index} />
          ))}
        </div>
      </div>
      <Link to="/explore-music"> go back </Link>
    </>
  );
};
export const DashboardCard = ({ title, image }) => {
  return (
    <div className="cardImage-container-dashboard block">
      <img src={image} alt="yoda" />
      <div className="cardImage-text-dashboard">
        {title !== "" && <h3 className="bg-black">{title}</h3>}
      </div>
    </div>
  );
};
