import "../component/hero.css";
import heroimg1 from "../images/speaking.svg";
import heroimg2 from "../images/writing.svg";
import heroimg3 from "../images/reading.svg";
import heroimg4 from "../images/listening.svg";

export default function Hero() {
  return (
    <div className="main-hero">
      <h2 className="title">Skills</h2>
      <div className="hero-cards">
        <div className="hero-frist-card">
          <img src={heroimg1} alt="" />
          <h4 className="hero-title">Speaking</h4>
          <p className="hero-desc-frist">
            Improve your English skills and confidence. Live classes and
            interactive lessons online. 20% extra free for a limited time only
          </p>
          <p className="hero-desc-second">
            Learn English online and improve your skills through our
            high-quality courses and resources – all designed for adult language
            learners.
          </p>
          <button className="hero-button">Learn more</button>
        </div>

        <div className="hero-second-card">
          <img src={heroimg2} alt="" />
          <h4 className="hero-title-two">Writing</h4>

          <button className="hero-button">Learn more</button>
        </div>

        <div className="hero-third-card">
          <img src={heroimg3} alt="" />
          <h4 className="read-title">Reading</h4>
          <p className="read-desc">
            perception and response actions of the user resulting from the use
            and/or upcoming use of the product, system or service{" "}
          </p>

          <button className="hero-button">Learn more</button>
        </div>

        <div className="hero-four-card">
          <div>
            <h4 className="listening">Listening</h4>
            <p className="listening-title">
              Here you can find activities to practise your listening skills.
              Listening will help you to improve your understanding{" "}
            </p>

            <button className="hero-button">Learn more</button>
          </div>
          <img src={heroimg4} alt="" />
        </div>
      </div>
    </div>
  );
}
