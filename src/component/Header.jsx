import "../component/header.css";
import logo from "../images/logobrit.svg";
export default function Header() {
  return (
    <header>
      <nav className="header">
        <img src={logo} alt="" width={106} height={54} />
        <ul className="list">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Aboute Us</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
        <button className="header-button">Let's Talk</button>
      </nav>
    </header>
  );
}
