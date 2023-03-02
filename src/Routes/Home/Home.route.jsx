import "./Home.styles.css";
import { Header } from "../../components/navbar/Navbar.component";
import {
  SectionImage,
  SectionText,
  SectionLayout,
  Users,
} from "../../components/section/Section.component";

export const Home = () => {
  return (
    <>
      <Header>
        <Hero />
      </Header>

      <SectionLayout>
        <SectionImage />
        <SectionText>
          With 9jastar you get to know the artists who are changing the game and
          making waves with their incredible talent. They are the voices that
          inspire us, the sounds that move us, and the beats that make us dance.
          From rising stars to music legends, our website is dedicated to
          promoting these amazing artists and giving them the recognition they
          deserve.
        </SectionText>
      </SectionLayout>
      <SectionLayout>
        <SectionText>
          With 9jastar you get to know the artists who are changing the game and
          making waves with their incredible talent. They are the voices that
          inspire us, the sounds that move us, and the beats that make us dance.
          From rising stars to music legends, our website is dedicated to
          promoting these amazing artists and giving them the recognition they
          deserve.
        </SectionText>
        <SectionImage />
      </SectionLayout>
      <Users />
    </>
  );
};

export const Hero = () => {
  return (
    <div className="hero-container gd gd-col-2 ">
      <div className="text-container">
        <h1 className="text-col-white">
          GET THAT VISIBILITY NEEDED AS AN UPCOMING ARTIST WITH 9JASTAR
        </h1>
        <p className="text-col-grey-light">
          We believe that music has the power to bring people together and
          create positive change in the world. Through our website, we aim to
          spread the joy of music and connect fans with the artists they love.
        </p>
        <button className="btn bg-tertiary-purple btn-round text-col-white">
          Get started
        </button>
      </div>
      <div className="image-container-wrapper">
        <div className="image-container">
          <img src="images/test-image.JPG" alt="yoda" />
        </div>
        <div className="image-container top-item">
          <img src="images/test-image.JPG" alt="yoda" />
        </div>
      </div>
    </div>
  );
};
