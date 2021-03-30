import React from 'react';
import { Search, Cart, Account, Next} from './Icons/Icons';
import Samsung_logo from '../../assets/logo/global-samsung-logo.svg';
import First_Nav_Img from '../../assets/images/nav-images/1.png';

const Header = () => {
  return (
    <div className="navbar">
      <div className="container-xl p-1">
        <div className="nav-logo col-2">
          <i class="bi bi-chevron-right"></i>
          <a href="/" className="nav-logo__link">
            <img src={Samsung_logo} alt="" className="nav-logo__img" />
          </a>
        </div>
        <ul className="nav__left-menu col-6">
          <li className="menu-item">
            <a href="#" className="menu-item__link">
              <li class="submenu-link__title">Galaxy 5G</li>
            </a>
          </li>
          <li className="menu-item">
            <span className="menu-item__link">Telefoane</span>
            <ul className="submenu">
              <div className="container-xl p-0">
                <li className="submenu-item">
                  <p className="submenu-title">Telefoane</p>
                </li>
                <li className="submenu-item">
                  Recomandari
                  <ul className="submenu-item__ul list-1 col">
                    <li className="submenu-item__li">Galaxy S21 Ultra 5G</li>
                    <li className="submenu-item__li">Galaxy S21 | S21+ 5G</li>
                    <li className="submenu-item__li">Galaxy S20 FE</li>
                    <li className="submenu-item__li">Galaxy Z Fold2</li>
                    <li className="submenu-item__li">Galaxy A72</li>
                    <li className="submenu-item__li">Galaxy A52</li>
                    <li className="submenu-item__li">Galaxy Buds Pro</li>
                    <li className="submenu-item__li">Descoperă Galaxy</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Telefoane
                  <ul className="submenu-item__ul list-2">
                    <li className="submenu-item__li">Prezentare Generală</li>
                    <li className="submenu-item__li">Galaxy Z</li>
                    <li className="submenu-item__li">Galaxy S</li>
                    <li className="submenu-item__li">Galaxy Note</li>
                    <li className="submenu-item__li">Galaxy A</li>
                    <li className="submenu-item__li">Galaxy M</li>
                    <li className="submenu-item__li">Accesorii Telefoane</li>
                    <li className="submenu-item__li">Vezi Toate Telefoanele</li>
                    <li className="submenu-item__li">Compară modelele</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Tablete
                  <ul className="submenu-item__ul list-3">
                    <li className="submenu-item__li">Prezentare Generală</li>
                    <li className="submenu-item__li">Galaxy Tab S</li>
                    <li className="submenu-item__li">Galaxy Tab A</li>
                    <li className="submenu-item__li">Accesorii Tablete</li>
                    <li className="submenu-item__li">Vezi Toate Tabletele</li>
                    <li className="submenu-item__li">Compară modelele</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Smartwatch
                  <ul className="submenu-item__ul list-4">  
                    <li className="submenu-item__li">Prezentare Generală</li>
                    <li className="submenu-item__li">Galaxy Watch</li>
                    <li className="submenu-item__li">Galaxy Watch Active</li>
                    <li className="submenu-item__li">Galaxy Fit</li>
                    <li className="submenu-item__li">Accesorii Smartwatch</li>
                    <li className="submenu-item__li">Vezi Toate Modelele</li>
                    <li className="submenu-item__li">Compară modelele</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Galaxy Buds
                  <ul className="submenu-item__ul list-5">
                    <li className="submenu-item__li">Galaxy S21</li>
                    <li className="submenu-item__li">Prezentare Generală</li>
                    <li className="submenu-item__li">Galaxy Buds Pro</li>
                    <li className="submenu-item__li">Galaxy Buds Live</li>
                    <li className="submenu-item__li">Galaxy Buds+</li>
                    <li className="submenu-item__li">Vezi Toate Modelele</li>
                    <li className="submenu-item__li">Compară modelele</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Accesorii
                  <ul className="submenu-item__ul list-6">
                    <li className="submenu-item__li">Prezentare Generală</li>
                    <li className="submenu-item__li">Accesorii Telefoane</li>
                    <li className="submenu-item__li">Accesorii Tablete</li>
                    <li className="submenu-item__li">Accesorii Smartwatch</li>
                    <li className="submenu-item__li">Vezi Toate Accesoriile</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Aplicatii si Servicii
                  <ul className="submenu-item__ul list-7">
                    <li className="submenu-item__li">Prezentare Generală</li>
                    <li className="submenu-item__li">Blood Pressure {'&'} EKG</li>
                    <li className="submenu-item__li">Magazin Galaxy</li>
                    <li className="submenu-item__li">Bixby</li>
                    <li className="submenu-item__li">Samsung Health</li>
                    <li className="submenu-item__li">Samsung DeX</li>
                    <li className="submenu-item__li">Samsung Members</li>
                    <li className="submenu-item__li">One UI</li>
                    <li className="submenu-item__li">SmartThings</li>
                    <li className="submenu-item__li">Smart Switch</li>
                  </ul>
                </li>
              </div>
            </ul>
          </li>
          <li className="menu-item">
            <span className="menu-item__link">TV {'&'} AV</span>
            <ul className="submenu">
              <div className="container-xl p-0">
                <li className="submenu-item">
                  <p className="submenu-title">TV {'&'} AV</p>
                </li>
                <li className="submenu-item">
                  Recomandari
                  <ul className="submenu-item__ul list-1">
                    <li className="submenu-item__li">The Sero</li>
                    <li className="submenu-item__li">The Serif 2020</li>
                    <li className="submenu-item__li">The Frame 2020</li>
                    <li className="submenu-item__li">Super Big TV</li>
                    <li className="submenu-item__li">Experiență Multi-device</li>
                    <li className="submenu-item__li">Ghidul tău de Cumpărare TV</li>
                    <li className="submenu-item__li">Q-series Soundbar</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  TVs
                  <ul className="submenu-item__ul list-2">
                    <li className="submenu-item__li">Prezentare Generală</li>
                    <li className="submenu-item__li">Neo QLED</li>
                    <li className="submenu-item__li">Crystal UHD</li>
                    <li className="submenu-item__li">Televizoare 8K</li>
                    <li className="submenu-item__li">Televizoare 4K</li>
                    <li className="submenu-item__li">Televizoare Full HD / HD</li>
                    <li className="submenu-item__li">Smart TV</li>
                    <li className="submenu-item__li">Accesorii Televizoare</li>
                    <li className="submenu-item__li">Vezi Toate Televizoarele</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Lifestyle TVs
                  <ul className="submenu-item__ul list-3">
                    <li className="submenu-item__li">The Frame</li>
                    <li className="submenu-item__li">The Serif</li>
                    <li className="submenu-item__li">The Sero</li>
                    <li className="submenu-item__li">NOU The Premiere</li>
                    <li className="submenu-item__li">Accesorii Televizoare</li>
                    <li className="submenu-item__li">Vezi Toate Modelele</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Dimensiune ecran TV
                  <ul className="submenu-item__ul list-4">
                    <li className="submenu-item__li">177cm (70")</li>
                    <li className="submenu-item__li">165cm (65")</li>
                    <li className="submenu-item__li">139cm (55")</li>
                    <li className="submenu-item__li">109cm (43")</li>
                    <li className="submenu-item__li">81cm (39")</li>
                    <li className="submenu-item__li">Cum alegi Dimensiunea Televizorului</li>
                    <li className="submenu-item__li">Vezi Toate Televizoarele</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Echipamente Audio{"&"}Video
                  <ul className="submenu-item__ul list-5">
                    <li className="submenu-item__li">Prezentare Generală</li>
                    <li className="submenu-item__li">Soundbars Q-Series</li>
                    <li className="submenu-item__li">Smart Speaker</li>
                    <li className="submenu-item__li">Soundbar Compact</li>
                    <li className="submenu-item__li">Soundbar cu Subwoofer Wireless</li>
                    <li className="submenu-item__li">Giga Party</li>
                    <li className="submenu-item__li">Accesorii audio</li>
                    <li className="submenu-item__li">Vezi Toate Modelele</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Accesorii
                  <ul className="submenu-item__ul list-6">
                    <li className="submenu-item__li">The Premiere 4K Triple Laser</li>
                    <li className="submenu-item__li">The Premiere 4K Laser</li>
                  </ul>
                </li>
              </div>
            </ul>
          </li>
          <li className="menu-item">
            <span href="#" className="menu-item__link">
              Electrocasnice
            </span>
            <ul className="submenu">
              <div className="container-xl p-0">
                <li className="submenu-item">
                  <p className="submenu-title">Electrocasnice</p>
                </li>
                <li className="submenu-item">
                  Recomandari
                  <ul className="submenu-item__ul list-1">
                    <li className="submenu-item__li">AirDresser</li>
                    <li className="submenu-item__li">QuickDrive™</li>
                    <li className="submenu-item__li">Purificatoare de aer</li>
                    <li className="submenu-item__li">Combine frigorifice cu Tehnologia Space Max™</li>
                    <li className="submenu-item__li">Cuptor Dual Cook Flex™</li>
                    <li className="submenu-item__li">Samsung Jet 75 Premium</li>
                    <li className="submenu-item__li">Experiență Multi-Device</li>
                    <li className="submenu-item__li">Noile clase de eficiență energetică</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Aparate frigorifice
                  <ul className="submenu-item__ul list-2">
                    <li className="submenu-item__li">Prezentare Generală</li>
                    <li className="submenu-item__li">Side By Side</li>
                    <li className="submenu-item__li">Frigidere</li>
                    <li className="submenu-item__li">Combine Frigorifice</li>
                    <li className="submenu-item__li">French Door</li>
                    <li className="submenu-item__li">Accesorii Aparate Frigorifice</li>
                    <li className="submenu-item__li">Vezi Toate Modelele</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Masini de spalat rufe {"&"} Uscatoare
                  <ul className="submenu-item__ul list-3">
                    <li className="submenu-item__li">Prezentare Generală</li>
                    <li className="submenu-item__li">QuickDrive™</li>
                    <li className="submenu-item__li">Mașini de Spălat Rufe</li>
                    <li className="submenu-item__li">Maşini de Spălat Rufe cu Uscător</li>
                    <li className="submenu-item__li">Uscătoare Rufe</li>
                    <li className="submenu-item__li">Vezi Toate Modelele</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Echipamente Bucatarie
                  <ul className="submenu-item__ul list-4">
                    <li className="submenu-item__li">Prezentare Generală</li>
                    <li className="submenu-item__li">Cuptoare încorporabile</li>
                    <li className="submenu-item__li">Plite și Hote</li>
                    <li className="submenu-item__li">Cuptoare cu Microunde</li>
                    <li className="submenu-item__li">Vezi Toate Modelele</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Masini de spalat vase
                </li>
                <li className="submenu-item">
                  Aspiratoare{"&"}Roboti
                  <ul className="submenu-item__ul list-6">
                    <li className="submenu-item__li">Prezentare Generală</li>
                    <li className="submenu-item__li">Samsung Robot</li>
                    <li className="submenu-item__li">Aspiratoare cu sau Fără Sac</li>
                    <li className="submenu-item__li">Aspiratoare Verticale</li>
                    <li className="submenu-item__li">Aspiratoare Pet Care Edition™</li>
                    <li className="submenu-item__li">Jet Clean Station</li>
                    <li className="submenu-item__li">Accesorii Aspiratoare</li>
                    <li className="submenu-item__li">Vezi Toate Modelele</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Purificatoare de aer
                  <ul className="submenu-item__ul list-7">
                    <li className="submenu-item__li">Purificatoare de aer</li>
                    <li className="submenu-item__li">Accesorii purificatoare de aer</li>
                  </ul>
                </li>
              </div>
            </ul>
          </li>
          <li className="menu-item">
            <span className="menu-item__link">IT</span>
            <ul className="submenu">
              <div className="container-xl p-0">
                <li className="submenu-item">
                  <p className="submenu-title">IT</p>
                </li>
                <li className="submenu-item">
                  Recomandari
                  <ul className="submenu-item__ul list-1">
                    <li className="submenu-item__li">Memorie {"&"} Stocare</li>
                    <li className="submenu-item__li">SSD Portabil T5</li>
                    <li className="submenu-item__li">Monitor LED cu ecran curbat</li>
                    <li className="submenu-item__li">Monitoare High Resolution</li>
                    <li className="submenu-item__li">Vezi toate modelele</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Monitoare
                  <ul className="submenu-item__ul list-2">
                    <li className="submenu-item__li">Prezentare Generală</li>
                    <li className="submenu-item__li">Smart Monitor</li>
                    <li className="submenu-item__li">Monitoare UHD</li>
                    <li className="submenu-item__li">Monitoare curbate</li>
                    <li className="submenu-item__li">Monitoare Gaming</li>
                    <li className="submenu-item__li">Monitoare plate</li>
                    <li className="submenu-item__li">Vezi toate modelele</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Memorie {"&"} Stocare
                  <ul className="submenu-item__ul list-3">
                    <li className="submenu-item__li">Prezentare Generală</li>
                    <li className="submenu-item__li">SSD</li>
                    <li className="submenu-item__li">SSD Portabil</li>
                    <li className="submenu-item__li">Carduri de memorie</li>
                  </ul>
                </li>
              </div>
            </ul>
          </li>
          <li className="menu-item">
            <span className="menu-item__link">Oferte</span>
            <ul className="submenu">
              <div className="container-xl p-0">
                <li className="submenu-item">
                  <p className="submenu-title">Oferte</p>
                </li>
                <li className="submenu-item">
                  Magazin Online
                  <ul className="submenu-item__ul list-1">
                    <li className="submenu-item__li">Samsung Care+</li>
                    <li className="submenu-item__li">Upgrade la Galaxy</li>
                    <li className="submenu-item__li">Youtube Premium</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Cumpara Inteligent
                  <ul className="submenu-item__ul list-2">
                    <li className="submenu-item__li">Samsung Care+</li>
                    <li className="submenu-item__li">Upgrade la Galaxy</li>
                    <li className="submenu-item__li">Youtube Premium</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Informatii Utile
                  <ul className="submenu-item__ul list-3">
                    <li className="submenu-item__li">Plata în Rate</li>
                    <li className="submenu-item__li">Service și Garanție</li>
                    <li className="submenu-item__li">Livrare</li>
                    <li className="submenu-item__li">Comenzi</li>
                  </ul>
                </li>
              </div>
            </ul>
          </li>
        </ul>

        <ul className="nav_right-menu col-4">
        <li className="menu-item">
            <span className="menu-item__link">Explore</span>
            <ul className="submenu">
              <div className="container-xl p-0">
                <li className="submenu-item">
                  <p className="submenu-title">Explore</p>
                </li>
                <li className="submenu-item">
                  Explore
                </li>
                <li className="submenu-item">
                  Articole noi
                  <ul className="submenu-item__ul list-1">
                  <li className="submenu-item__li">Fotografie</li>
                  <li className="submenu-item__li">Life hacks</li>
                  <li className="submenu-item__li">Echilibru</li>
                  <li className="submenu-item__li">Divertisment</li>
                  <li className="submenu-item__li">Food {"&"} Home</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Brand
                  <ul className="submenu-item__ul list-1">
                    <li className="submenu-item__li">Brand</li>
                    <li className="submenu-item__li">Colaborari Galaxy</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  How to
                </li>
                <li className="submenu-item">
                  Evenimente si Experiente
                </li>
                <li className="submenu-item">
                  Community
                </li>
              </div>
            </ul>
          </li>
          <li className="menu-item">
            <span className="menu-item__link">Support</span>
            <ul className="submenu">
              <div className="container-xl p-0">
                <li className="submenu-item">
                  <p className="submenu-title">Support</p>
                </li>
                <li className="submenu-item">
                  Asistenta pentru produse
                  <ul className="submenu-item__ul list-1">
                    <li className="submenu-item__li">Manuale de utilizare si descarcari</li>
                    <li className="submenu-item__li">Solutii si sfaturi</li>
                    <li className="submenu-item__li">Samsung Service Plaza</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Servicii privind reparatia
                  <ul className="submenu-item__ul list-1">
                  <li className="submenu-item__li">Lista centrelor autorizate</li>
                  <li className="submenu-item__li">Informații despre garanție</li>
                  <li className="submenu-item__li">Estimare cost reparație </li>
                  <li className="submenu-item__li">Ghiduri de reparații și piese de schimb</li>
                  </ul>
                </li>
                <li className="submenu-item">
                  Contacteaza-ne
                  <ul className="submenu-item__ul list-1">
                  <li className="submenu-item__li">Live Chat</li>
                  <li className="submenu-item__li">E-mail</li>
                  <li className="submenu-item__li">Community</li> 
                  <li className="submenu-item__li">Facebook </li>
                  </ul>
                </li>
              </div>
            </ul>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-item__link">
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
