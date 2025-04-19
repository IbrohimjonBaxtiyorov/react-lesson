import "./footer.css";
import footerimg from "../images/contact-us.svg";
import logo from "../images/logobrit.svg";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div>
          <img src={footerimg} alt="" />
        </div>
        <div>
          <h3 className="footer-title">Contact Us</h3>
          <p className="footer-desc">
            Discover your current English level by taking our free online
            English test.Sign up to our newsletter for learning tips and free
            resources
          </p>
          <input
            className="footer-input"
            type="text"
            placeholder="Enter Your E-mail"
          />
          <button className="footer-button">Subscribe</button>
        </div>
      </div>

      <div className="border"></div>

      <div className="footer-logo">
        <img src={logo} alt="" />
        <p>Terms and Conditions • Privacy Policy • Cookie Policy</p>
      </div>
    </footer>
  );
}
