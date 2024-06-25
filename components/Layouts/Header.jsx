import React, { useState } from "react";
import styles from "../../styles/Header.module.css";
import { TfiLocationPin } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import Link from 'next/link';
import Topbar from "../Topbar";

function Header() {
  const [activeLink, setActiveLink] = useState("Accueil");

  const whatsappRedirect = () => {
    const api = 'https://api.whatsapp.com/send?phone=+243982382176&text=Bonjour, je viens de consulter israella e-shop, je voudrais en savoir plus sur le produit';
    window.location.href = api;
  };

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <div style={{ width: "900px" }}>
      <Topbar />
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <div>
            <Link href="/" className="link" legacyBehavior>
              <div className="logo">
                <Image width={600} height={600} src="/assets/img/logo.png" />
              </div>
            </Link>
          </div>
          <nav id="navbar" className="navbar order-last order-lg-0">
            <FaWhatsapp className={styles.whattsapp} size={28} onClick={() => whatsappRedirect()} />
            <ul>
              <li>
                <Link className={`nav-link scrollto ${activeLink === 'Accueil' ? 'active' : ''}`} href="/" onClick={() => handleLinkClick('Accueil')}>
                  Accueil
                </Link>
              </li>
              <li>
                <Link className={`nav-link scrollto ${activeLink === 'Nous-Connaitre' ? 'active' : ''}`} href="/knowus" onClick={() => handleLinkClick('Nous-Connaitre')}>
                  Nous-Connaitre
                </Link>
              </li>
              <li className="dropdown">
                <a href="#" className={activeLink.startsWith('Services') ? 'active' : ''} onClick={() => handleLinkClick('Services')}>
                  <span>Services</span> <i className="bi bi-chevron-down" />
                </a>
                <ul>
                  <li className="dropdown">
                    <a href="#" className={activeLink.startsWith('Soins Medicaux') ? 'active' : ''} onClick={() => handleLinkClick('Soins Medicaux')}>
                      <span>Soins Medicaux</span> <i className="bi bi-chevron-right" />
                    </a>
                    <ul style={{height:"300px",overflow:"auto"}}>
                  <li>
                    <Link href="/consultationGenerale">Consultation Generale  24/24</Link>
                  </li>
                  <li>
                    <Link href="/consultationSpecialise">Consultations spécialisés </Link>
                  </li>
                  <li>
                  <Link href="/pediatrie">
                  Pédiatrie 
                    </Link>
                  </li>
                  
                  <li>
                  <Link href="/gynecologie">
                    Gynecologie
                    </Link>
                  </li>
                
                  <li>
                    <Link href="/internalMedecine">Médecine Interne  </Link>
                  </li>
                  <li>
                    <Link href="/ophtamologie">Ophtamologie </Link>
                  </li>
                  <li>
                    <Link href="/dermatologie">Dérmatologie </Link>
                  </li>
                  <li>
                    <Link href="/orthopedie">Orthopédie </Link>
                  </li>
                  <li>
                    <Link href="/neuropychiatrie">Neuropychiatrie </Link>
                  </li>
                  <li>
                    <a href="#">ORL </a>
                  </li>
                  <li>
                    <a href="#">Dentisterie </a>
                  </li>
                  <li>
                    <a href="#">Urologie </a>
                  </li>
                  <li>
                    <a href="#">Cardiologie </a>
                  </li>
                  <li>
                    <a href="#">CPN CPS </a>
                  </li>
                </ul>

                  </li>
                  <li className="dropdown">
                    <a href="#" className={activeLink.startsWith('Soins Paramédicaux') ? 'active' : ''} onClick={() => handleLinkClick('Soins Paramédicaux')}>
                      <span>Soins Paramédicaux</span> <i className="bi bi-chevron-right" />
                    </a>
                    <ul style={{height:"300px",overflow:"auto"}}>
                
                  <li>
                    <Link href="/cardiologie">Cardiologie Coventionnelle et Spécial </Link>
                  </li>
                  <li>
                    <Link href="/imagerieMedicale"> Imagerie Médicale : Echographie</Link>
                  </li>
                  <li>
                    <Link href="/ambulance">Ambulance </Link>
                  </li>
                  <li>
                    <Link href="/salleOperation">Salles d'operation </Link>
                  </li>
                  <li>
                    <Link href="/pharmacie">Pharmacie interne </Link>
                  </li>
                  <li>
                    <Link href="/maternite">Matérnité </Link>
                  </li>
                  <li>
                    <Link href="/hospitalisation">Hospitalisation </Link>
                  </li>
                  <li>
                    <a href="/dentisterie">Dentisterie </a>
                  </li>
                  <li>
                    <a href="/kinetherapie">Kinetherapie </a>
                  </li>
                  <li>
                    <Link href="/laboratoireHematologie">Laboratoire: Hematologie </Link>
                  </li>
                  <li>
                    <Link href="paratologieBiologie">Parasitologie: Biologie </Link>
                  </li>
                  <li>
                    <Link href="/monitoring">Monitoring </Link>
                  </li>
                  <li>
                    <Link href="/electroCardiogramme">Electrocadiogramme et EEG </Link>
                  </li>
                  
                </ul>

                  </li>
                </ul>
              </li>
              <li>
                <Link className={`nav-link scrollto ${activeLink === 'Docteurs' ? 'active' : ''}`} href="/doctor" onClick={() => handleLinkClick('Docteurs')}>
                  Docteurs
                </Link>
              </li>
              <li>
                <Link className={`nav-link scrollto ${activeLink === 'Temoignages' ? 'active' : ''}`} href="/testimonial" onClick={() => handleLinkClick('Temoignages')}>
                  Temoignages
                </Link>
              </li>
              <li>
                <Link className={`nav-link scrollto ${activeLink === 'Faqs' ? 'active' : ''}`} href="/faqs" onClick={() => handleLinkClick('Faqs')}>
                  Faqs
                </Link>
              </li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle" />
          </nav>
          {/* .navbar */}
          <Link href="/contact" className={`appointment-btn scrollto ${activeLink === 'Contact' ? 'active' : ''}`} onClick={() => handleLinkClick('Contact')}>
            <span className="d-none d-md-inline"></span> Nous Contactez
          </Link>
        </div>
      </header>
      {/* End Header */}
    </div>
  );
}

export default Header;