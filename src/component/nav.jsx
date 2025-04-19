import "../component/nav.css";
import navimgsecond from "../images/about-us.svg";
import selfimg from "../images/self-study.svg";
import selfimg1 from "../images/live.svg";
import selfimg2 from "../images/personal.svg";
export default function Nav() {
  return (
    <div className="nav-main">
      <div className="navbar">
        <div>
          <h2 className="navtitle">About Us</h2>
          <p className="description">
            The model offers a framework for discussing problems related to the
            user's experience, as well as possible ways and means of solving
            them. Application development begins at the top level (strategy),
            where the future software product is described quite abstractly from
            the point of view of the expectations of both users and the
            customer.
          </p>

          <div className="person">
            <div>
              <h2>800</h2>
              <p>Pupils</p>
            </div>

            <div>
              <h2>18</h2>
              <p>Teachers</p>
            </div>

            <div>
              <h2>6</h2>
              <p>Foreign languages</p>
            </div>
          </div>
        </div>
        <div>
          <img src={navimgsecond} alt="" />
        </div>
      </div>

      <div className="center">
        <h2 className="price">Pricing</h2>
        <div className="self-center">
          <div>
            <img src={selfimg} alt="" />
            <h4 className="self-title self-title1">Self-study online course</h4>
            <p className="self-desc self-desc1">
              Start learning English online in live classes with qualified EC
              teachers and students from all over the world.
            </p>
            <div className="self-price">
              <h4 className="self-price-first">£5.99 </h4>
              <p className="slef-description"> per month</p>
            </div>
          </div>

          <div>
            <img src={selfimg1} alt="" />
            <h4 className="self-title">Live online classes</h4>
            <p className="self-desc self-desc2">
              Interactive group classes with expert teachers. Free 7-day trial
            </p>
            <div className="self-price">
              <h4 className="self-price-first">£12.99 </h4>
              <p className="slef-description"> per month</p>
            </div>
          </div>

          <div>
            <img src={selfimg2} alt="" />
            <h4 className="self-title self-title3">Personal Tuition</h4>
            <p className="self-desc self-desc3">
              Online one-to-one English tutoring – enjoy our first session for
              only $1
            </p>
            <div className="self-price self-price3">
              <h4 className="self-price-first"> £20.99 </h4>
              <p className="slef-description"> per month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
