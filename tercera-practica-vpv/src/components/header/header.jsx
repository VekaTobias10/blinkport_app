import "./styles.css";
import logo from "../../assets/img/Logo.png";
function Header() {
  return (
    <header>
      <nav className="navContainer">
        <div>
          <img src={logo} className="web-logo" alt="logo" />
        </div>
        <ul className="services_bar">
          <li>SERVICES</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
        <div>
          <button className="accessBtn">ACCESS</button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
