import React from 'react';
import {Search, Cart, Account} from './Icons/Icons';
import Samsung_logo from "../../assets/logo/global-samsung-logo.svg";

const Header = () => {
  return (
    <div>
        <div className="navbar container-xl">
          <div className="nav_logo"><a href="/" className="nav_logo_link"><img src={Samsung_logo} alt="" className="nav_logo_img"/></a></div>
            <ul className="nav_left-menu">
              <li className="menu-item"><a href="#" className="menu_link">Galaxy 5G</a></li>
              <li className="menu-item"><a href="#" className="menu_link">Telefoane</a></li>
              <li className="menu-item"><a href="#" className="menu_link">TV and AV</a></li>
              <li className="menu-item"><a href="#" className="menu_link">Electrocasnice</a></li>
              <li className="menu-item"><a href="#" className="menu_link">IT</a></li>
              <li className="menu-item"><a href="#" className="menu_link">Oferte</a></li>
            </ul>

          <ul className="nav_right-menu">
            <li className="menu-item"><a href="#" className="menu_link">Explore</a></li>
            <li className="menu-item"><a href="#" className="menu_link">Support</a></li>
            <li className="menu-item"><a href="#" className="menu_link">Business</a></li>
          </ul>

          <ul className="nav_right_icon-menu">
            <li className="menu-item"><a href="#" className="menu_link"><Search /></a></li>
            <li className="menu-item"><a href="#" className="menu_link"><Cart /></a></li>
            <li className="menu-item"><a href="#" className="menu_link"><Account /></a></li>
          </ul>
        </div>
    </div>
  );
};

export default Header;
