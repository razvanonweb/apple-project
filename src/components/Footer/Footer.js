import React, { useState } from 'react';
import Facebook from "../../assets/logo/facebook-logo.svg";
import Twitter from "../../assets/logo/twitter-logo-fill.svg";
import Instagram from "../../assets/logo/instagram-logo-thin.svg";
import Youtube from "../../assets/logo/youtube-logo-fill.svg";
import Linkedin from "../../assets/logo/linkedin-logo-fill.svg";

const Footer = () => {
    const [footerList, setFooterList] = useState(false);
    const handleFooterList = () => setFooterList(!footerList);
    console.log(footerList)
    return (
        <div className="footer">
            <div className="container-xl">
                <div className="row p-0 footer-menu">
                    <div className="footer-col col-md p-0">
                        <p onClick={() => handleFooterList()} className="footer-title">Produse și Servicii</p>
                        <ul className={footerList ? "footer-list footer-active-list" : "footer-list"}>
                            <li className="footer-item"><a href="#" className="footer-item__link">Telefoane</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Tablete</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Casti</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Smartwatch</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Smart Switch</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Accesorii</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Televizoare</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Echipamente Audio {'&'} Video </a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Frigidere</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Masini de spalat rufe</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Purificatoare Aer</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Echipamente bucatarie</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Monitoare</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Memorie și stocare</a></li>
                        </ul>
                    </div>
                    <div className="footer-col col-md p-0">
                        <p className="footer-title">Magazin Online</p>
                        <ul className="footer-list">
                            <li className="footer-item"><a href="#" className="footer-item__link">Oferte</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Samsung Care++</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Intrebari Frecvente Magazin</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Samsung Experience Store</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">ANPC ↗</a></li>
                        </ul>
                    </div>
                    <div className="footer-col col-md p-0">
                        <p className="footer-title">Suport Clienți</p>
                        <ul className="footer-list">
                            <li className="footer-item"><a href="#" className="footer-item__link">Contact</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Email Suport</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Trimiteti E-mail Catre CEO</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Informatii Service</a></li>
                        </ul>
                    </div>
                    <div className="footer-col col-md p-0">
                        <p className="footer-title">Cont {'&'} Comunitate</p>
                        <ul className="footer-list">
                            <li className="footer-item"><a href="#" className="footer-item__link">Contul meu</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Produsele mele</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Comenzile mele</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Produse favorite</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Samsung Members</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Cupoane reducere</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Asistenta</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Comunitate</a></li>
                        </ul>
                    </div>
                    <div className="footer-col col-md p-0">
                        <p className="footer-title">Compania</p>
                        <ul className="footer-list">
                            <li className="footer-item"><a href="#" className="footer-item__link">Despre noi</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Investitori ↗</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Noutati</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Cetatenie Corporativa ↗</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Cariere</a></li>
                            <li className="footer-item"><a href="#" className="footer-item__link">Samsung Members</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-copyright-row row">
                    <div className="col">
                        <p className="footer-copyright">
                            Copyright© 1995-2021 Samsung. Toate drepturile rezervate.
                            Acest site este optimizat pentru cea mai nouă versiune a browserelor web. Pentru o experiență de navigare optimă, folosiți cel puțin Internet Explorer 11, sau cele mai recente veriuni Google Chrome și Mozilla Firefox.
                    </p>
                    </div>
                </div>
                <div className="footer-final-row row">
                    <div className="col">
                        <ul className="footer-final-list d-flex">
                            <li className="footer-final-item"><a href="" className="footer-final-link">România/Română</a></li>
                            <li className="footer-final-item"><a href="" className="footer-final-link">Ajutor Pentru Accesibilitate</a></li>
                            <li className="footer-final-item"><a href="" className="footer-final-link">Termeni și Condiții Magazin Online</a></li>
                            <li className="footer-final-item"><a href="" className="footer-final-link">Politica de Confidențialitate</a></li>
                            <li className="footer-final-item"><a href="" className="footer-final-link">Politica Cookies</a></li>
                            <li className="footer-final-item"><a href="" className="footer-final-link">Termeni Legali</a></li>
                            <li className="footer-final-item"><a href="" className="footer-final-link">Harta Site</a></li>
                        </ul>
                    </div>
                    <div className="col col-lg-3">
                        <ul className="footer-icons-list">
                            <li className="footer-icons-item"><p className="footer-final-text">Rămâi alături de noi?</p></li>
                            <li className="footer-icons-item"><a href="" className="footer-icons-link"><img className="footer-icon" src={Facebook} alt="" /></a></li>
                            <li className="footer-icons-item"><a href="" className="footer-icons-link"><img className="footer-icon" src={Twitter} alt="" /></a></li>
                            <li className="footer-icons-item"><a href="" className="footer-icons-link"><img className="footer-icon" src={Instagram} alt="" /></a></li>
                            <li className="footer-icons-item"><a href="" className="footer-icons-link"><img className="footer-icon" src={Youtube} alt="" /></a></li>
                            <li className="footer-icons-item"><a href="" className="footer-icons-link"><img className="footer-icon" src={Linkedin} alt="" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-extraspace"></div>
            </div>
        </div >
    )
}

export default Footer;