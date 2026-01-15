import "./Main.css";
import mainPageImage from "../assets/ExOpMainPageImage.jpg";

const Main = () => {
  return (
    <div className="main">
      <div className="main__intro-container">
        <h1 className="main__intro">
          Affordable, reliable, and efficient home services in the Southern Tier
          and surrounding areas!
        </h1>
      </div>
      <img src={mainPageImage} alt="mainPage" className="main__image" />
    </div>
  );
};

export default Main;
