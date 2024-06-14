import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  return (
    <div className="header flex bg-pink-100 justify-between shadow-lg mb-4">
      <div className="logo-container">
        <img className="logo w-32 p-2" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">
            Online Status: {useOnlineStatus() === true ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">Cart</li>
          <li className="px-4">
            <button
              className="login-btn"
              onClick={() => {
                {
                  loginBtn === "Logout"
                    ? setLoginBtn("Login")
                    : setLoginBtn("Logout");
                }
              }}
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
