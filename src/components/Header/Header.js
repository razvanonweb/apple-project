import React from 'react';
import { Search, Cart, Account, Next} from './Icons/Icons';
import Samsung_logo from '../../assets/logo/global-samsung-logo.svg';

const Header = () => {
  return (
    <div className="navbar">
      <div className="container-xl p-1">
        <div className="nav_logo col-2">
          <i class="bi bi-chevron-right"></i>
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
                  <p className="submenu-title">Telefoane</p>
                </li>
                <li className="submenu-items">
                  Recomandari
                  <ul className="submenu-items-list list-1">
                    <li>Galaxy S21 Ultra 5G</li>
                    <li>Galaxy S21 | S21+ 5G</li>
                    <li>Galaxy S20 FE</li>
                    <li>Galaxy Z Fold2</li>
                    <li>Galaxy A72</li>
                    <li>Galaxy A52</li>
                    <li>Galaxy Buds Pro</li>
                    <li>Descoperă Galaxy</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Telefoane
                  <ul className="submenu-items-list list-2">
                    <li>Prezentare Generală</li>
                    <li>Galaxy Z</li>
                    <li>Galaxy S</li>
                    <li>Galaxy Note</li>
                    <li>Galaxy A</li>
                    <li>Galaxy M</li>
                    <li>Accesorii Telefoane</li>
                    <li>Vezi Toate Telefoanele</li>
                    <li>Compară modelele</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Tablete
                  <ul className="submenu-items-list list-3">
                    <li>Prezentare Generală</li>
                    <li>Galaxy Tab S</li>
                    <li>Galaxy Tab A</li>
                    <li>Accesorii Tablete</li>
                    <li>Vezi Toate Tabletele</li>
                    <li>Compară modelele</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Smartwatch
                  <ul className="submenu-items-list list-4">  
                    <li>Prezentare Generală</li>
                    <li>Galaxy Watch</li>
                    <li>Galaxy Watch Active</li>
                    <li>Galaxy Fit</li>
                    <li>Accesorii Smartwatch</li>
                    <li>Vezi Toate Modelele</li>
                    <li>Compară modelele</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Galaxy Buds
                  <ul className="submenu-items-list list-5">
                    <li>Galaxy S21</li>
                    <li>Prezentare Generală</li>
                    <li>Galaxy Buds Pro</li>
                    <li>Galaxy Buds Live</li>
                    <li>Galaxy Buds+</li>
                    <li>Vezi Toate Modelele</li>
                    <li>Compară modelele</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Accesorii
                  <ul className="submenu-items-list list-6">
                    <li>Prezentare Generală</li>
                    <li>Accesorii Telefoane</li>
                    <li>Accesorii Tablete</li>
                    <li>Accesorii Smartwatch</li>
                    <li>Vezi Toate Accesoriile</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Aplicatii si Servicii
                  <ul className="submenu-items-list list-7">
                    <li>Prezentare Generală</li>
                    <li>Blood Pressure {'&'} EKG</li>
                    <li>Magazin Galaxy</li>
                    <li>Bixby</li>
                    <li>Samsung Health</li>
                    <li>Samsung DeX</li>
                    <li>Samsung Members</li>
                    <li>One UI</li>
                    <li>SmartThings</li>
                    <li>Smart Switch</li>
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
                  <p className="submenu-title">TV {'&'} AV</p>
                </li>
                <li className="submenu-items">
                  Recomandari
                  <ul className="submenu-items-list list-1">
                    <li>The Sero</li>
                    <li>The Serif 2020</li>
                    <li>The Frame 2020</li>
                    <li>Super Big TV</li>
                    <li>Experiență Multi-device</li>
                    <li>Ghidul tău de Cumpărare TV</li>
                    <li>Q-series Soundbar</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  TVs
                  <ul className="submenu-items-list list-2">
                    <li>Prezentare Generală</li>
                    <li>Neo QLED</li>
                    <li>Crystal UHD</li>
                    <li>Televizoare 8K</li>
                    <li>Televizoare 4K</li>
                    <li>Televizoare Full HD / HD</li>
                    <li>Smart TV</li>
                    <li>Accesorii Televizoare</li>
                    <li>Vezi Toate Televizoarele</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Lifestyle TVs
                  <ul className="submenu-items-list list-3">
                    <li>The Frame</li>
                    <li>The Serif</li>
                    <li>The Sero</li>
                    <li>NOU The Premiere</li>
                    <li>Accesorii Televizoare</li>
                    <li>Vezi Toate Modelele</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Dimensiune ecran TV
                  <ul className="submenu-items-list list-4">
                    <li>177cm (70")</li>
                    <li>165cm (65")</li>
                    <li>139cm (55")</li>
                    <li>109cm (43")</li>
                    <li>81cm (39")</li>
                    <li>Cum alegi Dimensiunea Televizorului</li>
                    <li>Vezi Toate Televizoarele</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Echipamente Audio{"&"}Video
                  <ul className="submenu-items-list list-5">
                    <li>Prezentare Generală</li>
                    <li>Soundbars Q-Series</li>
                    <li>Smart Speaker</li>
                    <li>Soundbar Compact</li>
                    <li>Soundbar cu Subwoofer Wireless</li>
                    <li>Giga Party</li>
                    <li>Accesorii audio</li>
                    <li>Vezi Toate Modelele</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Accesorii
                  <ul className="submenu-items-list list-6">
                    <li>The Premiere 4K Triple Laser</li>
                    <li>The Premiere 4K Laser</li>
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
                  <p className="submenu-title">Electrocasnice</p>
                </li>
                <li className="submenu-items">
                  Recomandari
                  <ul className="submenu-items-list list-1">
                    <li>AirDresser</li>
                    <li>QuickDrive™</li>
                    <li>Purificatoare de aer</li>
                    <li>Combine frigorifice cu Tehnologia Space Max™</li>
                    <li>Cuptor Dual Cook Flex™</li>
                    <li>Samsung Jet 75 Premium</li>
                    <li>Experiență Multi-Device</li>
                    <li>Noile clase de eficiență energetică</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Aparate frigorifice
                  <ul className="submenu-items-list list-2">
                    <li>Prezentare Generală</li>
                    <li>Side By Side</li>
                    <li>Frigidere</li>
                    <li>Combine Frigorifice</li>
                    <li>French Door</li>
                    <li>Accesorii Aparate Frigorifice</li>
                    <li>Vezi Toate Modelele</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Masini de spalat rufe {"&"} Uscatoare
                  <ul className="submenu-items-list list-3">
                    <li>Prezentare Generală</li>
                    <li>QuickDrive™</li>
                    <li>Mașini de Spălat Rufe</li>
                    <li>Maşini de Spălat Rufe cu Uscător</li>
                    <li>Uscătoare Rufe</li>
                    <li>Vezi Toate Modelele</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Echipamente Bucatarie
                  <ul className="submenu-items-list list-4">
                    <li>Prezentare Generală</li>
                    <li>Cuptoare încorporabile</li>
                    <li>Plite și Hote</li>
                    <li>Cuptoare cu Microunde</li>
                    <li>Vezi Toate Modelele</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Masini de spalat vase
                </li>
                <li className="submenu-items">
                  Aspiratoare{"&"}Roboti
                  <ul className="submenu-items-list list-6">
                    <li>Prezentare Generală</li>
                    <li>Samsung Robot</li>
                    <li>Aspiratoare cu sau Fără Sac</li>
                    <li>Aspiratoare Verticale</li>
                    <li>Aspiratoare Pet Care Edition™</li>
                    <li>Jet Clean Station</li>
                    <li>Accesorii Aspiratoare</li>
                    <li>Vezi Toate Modelele</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Purificatoare de aer
                  <ul className="submenu-items-list list-7">
                    <li>Purificatoare de aer</li>
                    <li>Accesorii purificatoare de aer</li>
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
                  <p className="submenu-title">IT</p>
                </li>
                <li className="submenu-items">
                  Recomandari
                  <ul className="submenu-items-list list-1">
                    <li>Memorie {"&"} Stocare</li>
                    <li>SSD Portabil T5</li>
                    <li>Monitor LED cu ecran curbat</li>
                    <li>Monitoare High Resolution</li>
                    <li>Vezi toate modelele</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Monitoare
                  <ul className="submenu-items-list list-2">
                    <li>Prezentare Generală</li>
                    <li>Smart Monitor</li>
                    <li>Monitoare UHD</li>
                    <li>Monitoare curbate</li>
                    <li>Monitoare Gaming</li>
                    <li>Monitoare plate</li>
                    <li>Vezi toate modelele</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Memorie {"&"} Stocare
                  <ul className="submenu-items-list list-3">
                    <li>Prezentare Generală</li>
                    <li>SSD</li>
                    <li>SSD Portabil</li>
                    <li>Carduri de memorie</li>
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
                  <p className="submenu-title">Oferte</p>
                </li>
                <li className="submenu-items">
                  Magazin Online
                  <ul className="submenu-items-list list-1">
                    <li>Samsung Care+</li>
                    <li>Upgrade la Galaxy</li>
                    <li>Youtube Premium</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Cumpara Inteligent
                  <ul className="submenu-items-list list-2">
                    <li>Samsung Care+</li>
                    <li>Upgrade la Galaxy</li>
                    <li>Youtube Premium</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Informatii Utile
                  <ul className="submenu-items-list list-3">
                    <li>Plata în Rate</li>
                    <li>Service și Garanție</li>
                    <li>Livrare</li>
                    <li>Comenzi</li>
                  </ul>
                </li>
              </div>
            </ul>
          </li>
        </ul>

        <ul className="nav_right-menu col-4">
        <li className="menu-item">
            <span className="menu_link">Explore</span>
            <ul className="submenu">
              <div className="container-xl p-0">
                <li className="submenu-items">
                  <p className="submenu-title">Explore</p>
                </li>
                <li className="submenu-items">
                  Explore
                </li>
                <li className="submenu-items">
                  Articole noi
                  <ul className="submenu-items-list list-1">
                  <li>Fotografie</li>
                  <li>Life hacks</li>
                  <li>Echilibru</li>
                  <li>Divertisment</li>
                  <li>Food {"&"} Home</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Brand
                  <ul className="submenu-items-list list-1">
                    <li>Brand</li>
                    <li>Colaborari Galaxy</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  How to
                </li>
                <li className="submenu-items">
                  Evenimente si Experiente
                </li>
                <li className="submenu-items">
                  Community
                </li>
              </div>
            </ul>
          </li>
          <li className="menu-item">
            <span className="menu_link">Support</span>
            <ul className="submenu">
              <div className="container-xl p-0">
                <li className="submenu-items">
                  <p className="submenu-title">Support</p>
                </li>
                <li className="submenu-items">
                  Asistenta pentru produse
                  <ul className="submenu-items-list list-1">
                    <li>Manuale de utilizare si descarcari</li>
                    <li>Solutii si sfaturi</li>
                    <li>Samsung Service Plaza</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Servicii privind reparatia
                  <ul className="submenu-items-list list-1">
                  <li>Lista centrelor autorizate</li>
                  <li>Informații despre garanție</li>
                  <li>Estimare cost reparație </li>
                  <li>Ghiduri de reparații și piese de schimb</li>
                  </ul>
                </li>
                <li className="submenu-items">
                  Contacteaza-ne
                  <ul className="submenu-items-list list-1">
                  <li>Live Chat</li>
                  <li>E-mail</li>
                  <li>Community</li> 
                  <li>Facebook </li>
                  </ul>
                </li>
              </div>
            </ul>
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
