import "./AboutUs.css";
import aboutImage from "../assets/carrying-boxes.jpg";

const AboutUs = () => {
  return (
    <div className="about">
      <img src={aboutImage} alt="carrying-boxes" className="about__image" />
      <h1 className="about__title">About Us</h1>
      <p className="about__info">
        At Expansive Operations, we are committed to making home projects and
        moves simpler, smoother, and stress-free. We specialize in professional
        loading and unloading services for moving trucks, ensuring your
        belongings are handled with care, efficiency, and respect.
      </p>
      <h1 className="about__title">Other Services</h1>
      <p className="about__info">
        Beyond moving support, we offer a wide range of residential services
        designed to help homeowners tackle the tasks that often get pushed
        aside. From general repairs and interior painting to junk removal and
        landscaping, our team brings reliability, skill, and attention to detail
        to every job.
      </p>
      <div>
        <p className="about__info about__info_end">
          Whether you are relocating, refreshing your home, or just need an
          extra set of capable hands, Expansive Operations is here to provide
          dependable service you can count on!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
