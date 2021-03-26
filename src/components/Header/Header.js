import React from 'react';
import { Search, Cart, Account } from './Icons/Icons';
import Samsung_logo from '../../assets/logo/global-samsung-logo.svg';

const Header = () => {
  return (
    <div className="navbar">
      <div className="container-xl p-1">
        <div className="nav_logo col-2">
          <a href="/" className="nav_logo_link">
            <img src={Samsung_logo} alt="" className="nav_logo_img" />
          </a>
        </div>
        <ul className="nav_left-menu col-6">
          <li className="menu-item">
            <a href="#" className="menu_link">
              Galaxy 5G
            </a>
          </li>
          <li className="menu-item">
            <span className="menu_link">Telefoane</span>
            <ul className="submenu">
              <div className="container-xl p-0">
                <li className="submenu-items">
                  <h1 className="submenu-title">Telefoane</h1>
                </li>
                <li className="submenu-items">
                  Recomandari
                  <ul className="submenu-items-list list-1">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Telefoane
                  <ul className="submenu-items-list list-2">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Tablete
                  <ul className="submenu-items-list list-3">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Smartwatch
                  <ul className="submenu-items-list list-4">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Galaxy Buds
                  <ul className="submenu-items-list list-5">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Accesorii
                  <ul className="submenu-items-list list-6">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Aplicatii si Servicii
                  <ul className="submenu-items-list list-7">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
              </div>
            </ul>
          </li>
          <li className="menu-item">
            <span className="menu_link">TV {'&'} AV</span>
            <ul className="submenu">
              <div className="container-xl p-0">
                <li className="submenu-items">
                  <h1 className="submenu-title">Telefoane</h1>
                </li>
                <li className="submenu-items">
                  Recomandari
                  <ul className="submenu-items-list list-1">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Telefoane
                  <ul className="submenu-items-list list-2">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Tablete
                  <ul className="submenu-items-list list-3">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Smartwatch
                  <ul className="submenu-items-list list-4">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Galaxy Buds
                  <ul className="submenu-items-list list-5">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Accesorii
                  <ul className="submenu-items-list list-6">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Aplicatii si Servicii
                  <ul className="submenu-items-list list-7">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
              </div>
            </ul>
          </li>
          <li className="menu-item">
            <span href="#" className="menu_link">
              Electrocasnice
            </span>
            <ul className="submenu">
              <div className="container-xl p-0">
                <li className="submenu-items">
                  <h1 className="submenu-title">Telefoane</h1>
                </li>
                <li className="submenu-items">
                  Recomandari
                  <ul className="submenu-items-list list-1">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Telefoane
                  <ul className="submenu-items-list list-2">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Tablete
                  <ul className="submenu-items-list list-3">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Smartwatch
                  <ul className="submenu-items-list list-4">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Galaxy Buds
                  <ul className="submenu-items-list list-5">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Accesorii
                  <ul className="submenu-items-list list-6">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Aplicatii si Servicii
                  <ul className="submenu-items-list list-7">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
              </div>
            </ul>
          </li>
          <li className="menu-item">
            <span className="menu_link">IT</span>
            <ul className="submenu">
              <div className="container-xl p-0">
                <li className="submenu-items">
                  <h1 className="submenu-title">Telefoane</h1>
                </li>
                <li className="submenu-items">
                  Recomandari
                  <ul className="submenu-items-list list-1">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Telefoane
                  <ul className="submenu-items-list list-2">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Tablete
                  <ul className="submenu-items-list list-3">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Smartwatch
                  <ul className="submenu-items-list list-4">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Galaxy Buds
                  <ul className="submenu-items-list list-5">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Accesorii
                  <ul className="submenu-items-list list-6">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Aplicatii si Servicii
                  <ul className="submenu-items-list list-7">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
              </div>
            </ul>
          </li>
          <li className="menu-item">
            <span className="menu_link">Oferte</span>
            <ul className="submenu">
              <div className="container-xl p-0">
                <li className="submenu-items">
                  <h1 className="submenu-title">Telefoane</h1>
                </li>
                <li className="submenu-items">
                  Recomandari
                  <ul className="submenu-items-list list-1">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Telefoane
                  <ul className="submenu-items-list list-2">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Tablete
                  <ul className="submenu-items-list list-3">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Smartwatch
                  <ul className="submenu-items-list list-4">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Galaxy Buds
                  <ul className="submenu-items-list list-5">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Accesorii
                  <ul className="submenu-items-list list-6">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Aplicatii si Servicii
                  <ul className="submenu-items-list list-7">
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                    <li>Galaxy S21</li>
                  </ul>
                </li>
              </div>
            </ul>
          </li>
        </ul>

        <ul className="nav_right-menu col-4">
          <li className="menu-item">
            <a href="#" className="menu_link">
              Explore
            </a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu_link">
              Support
            </a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu_link">
              Business
            </a>
          </li>
          <li className="menu-icon">
            <a href="#" className="menu-icons">
              <Search />
            </a>
          </li>
          <li className="menu-icon">
            <a href="#" className="menu-icons">
              <Cart />
            </a>
          </li>
          <li className="menu-icon">
            <a href="#" className="menu-icons">
              <Account />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
