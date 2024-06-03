import { LOGO_URL } from "../utils/constants";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img className="logo" src={LOGO_URL}></img>
    </div>
    <div className="nav-items">
      <ul className="">
        <li>Home</li>
        <li>Contact Us</li>
        <li>About Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
