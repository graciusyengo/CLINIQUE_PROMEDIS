import Gallery from "@/components/Gallery";
import styles from "../styles/Knowus.module.css";
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdPictureAsPdf } from "react-icons/md";

function knowus() {
  return (
    <>
      <section id={styles.heroKnow} className="d-flex align-items-center">
        <div className="container d-flex flex-row justify-content-between align-items-center mt-6  ">
          <h1
            style={{
              width: "6%",
              color: "white",
              fontWeight: "bold",
              marginTop: "57px",
            }}
          >
            NOUS CONNAÎTRE
          </h1>
          <ul className={styles.listItem}>
            <Link href="/history" style={{ color: "white" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <li className={styles.history}>Notre Histoire </li>
                <FaArrowRight className="arrowRight" />
              </div>
            </Link>
            <div style={{ display: "flex", alignItems: "center" }}>
              <li className={styles.event}>Evenement et Actualités </li>
              <FaArrowRight />
            </div>
          </ul>
        </div>
      </section>

      <div id="pediatrie" className={styles.container}>
        <div className={styles.pdf}>
          <div>Télécharger </div>
          <MdPictureAsPdf size={25} />
        </div>
      </div>
      <div>
        <div className={styles.service}>
          <div className={styles.sidebar}>
            <div
              style={{ fontSize: "16px", color: "#01405c", fontWeight: "bold" }}
            >
              <h5 style={{ fontWeight: "600" }}> QUI SOMMES NOUS</h5>
              <h6 style={{ fontWeight: "600" }}> CLINIQUE PROMEDIS </h6>
            </div>
            <ul style={{ listStyleType: "square" }}>
              <li>Nos atout</li>
              <li>Objectifs</li>
          
              <li>Horaire de service</li>
              <li>Convention Medicale</li>
              <li>Nos Partenaires</li>
         
             

           
            </ul>
        
          </div>
          <div
            className={styles.presentation}
            style={{ paddingLeft: "40px", textAlign: "justify", width: "60px" }}
          >
            <h3
              style={{ fontSize: "25px", color: "#01405c", fontWeight: "bold" }}
            >
              {" "}
              QUI SOMMES NOUS
            </h3>
            <p className={styles.paragraphe}>
            La clinique promedis est située sur  la 10eme Rue Quartier industriel dans la commune de Limete.
            </p>
            <p className={styles.paragraphe}>

          Elle est l'initiative de son administrateur  Medecin Directeur, Docteur Nicola NDUKUTE NGANSER et a été inaugurée le 1 er Mais 1995.
          </p>

          <p className={styles.paragraphe}>
          
            Elle est abritée dans ses propres installation, en diagonal de l'ex residence de l'artiste musicien Tabu Ley Rochero aujourd'hui IPG (Institut Superieur du Pétrole et du Gaz) et est porteuse d'une grande expérience partant du C entre Progrès Médicale S.P.R.L.
            </p>
        

  

          <p className={styles.paragraphe}>La Clinique Promedis a gardé ce nom jusqu'en 2003</p>

            <h3
              style={{ fontSize: "25px", color: "#01405c", fontWeight: "bold" }}
            >
              {" "}
              NOS ATOUT
            </h3>

            <h4
                style={{
                  fontSize: "16px",
                  color: "#01405c",
                  fontWeight: "bold",
                }}
              >
                RESSOURCES HUMAINES
              </h4>
            <p className={styles.paragraphe}>
              la Cliique Promedis est une hopital qui as des personnelles
              qualifié entre autres les medecins géneralistes et Spécialistes
              qualifiés oeuvrant avec amour , competences et dévouement; Les
              infirmirers et infirmier, des laboratins et technicien de Radio
              tres expérimentés Un personnel admnistratifs, dévoué,serviables et
              Professionnels Les techniciens de surface assidus
            </p>

            <div>
              <h4
                style={{
                  fontSize: "16px",
                  color: "#01405c",
                  fontWeight: "bold",
                }}
              >
                EQUIPEMENTS:
              </h4>
              <ul>
                <li className={styles.list}>
                  - Appareil D'echographie, de Radiographie et
                  D'electrocardiogramme;
                </li>
                <li className={styles.list}>
                  - Appareil Monitoring foetal;
                </li>
                <li className={styles.list}>- Laboratoire Complet</li>
                <li className={styles.list}>
                  - Une salle d'Operation équipée pour diverses interventions;
                </li>
                <li className={styles.list}>
                  - Une salle d'Operation équipée pour diverses interventions;
                </li>
                <li className={styles.list}>
                  - Des chambres VIP, Privées, Semi-privées, Standard et
                  Communes;
                </li>
                <li className={styles.list}>
                  - Des ambulances pour évacuation des malades.
                </li>
              </ul>
            </div>

            <div>
              <h4
                style={{
                  fontSize: "16px",
                  color: "#01405c",
                  fontWeight: "bold",
                }}
              >
                EXPERIENCE:
              </h4>
            <p className={styles.paragraphe}>  - Une expérience de plus de 20 ans acquise dans la medecine privée.</p>
            <p className={styles.paragraphe}>  - Des Medecins et Infirmiers ayant fait carriere dans la profession et dans la medecine privée.</p>
            </div>

            <h3
              style={{ fontSize: "25px", color: "#01405c", fontWeight: "bold" }}
            >
              {" "}
              OBJECTIFS
            </h3>

            <p className={styles.paragraphe}>
              Comme toutes institution à caractere sanitaire, la Cliique Promedis a plusieurs objectifs notammment :
            </p>
            <ul>
                <li className={styles.list}>
                  - Soigner les malades dans leur ensemble avec toutes les exigences de l'art de guerir.
                </li>
                <li className={styles.list}>
                  - Prendre en charge les malades quelques soient leurs rang social.
                </li>
                <li className={styles.list}>- Former et informer les malades sur les risques pouvant engager ceux-ci.</li>
                <li className={styles.list}>
                  - Faire la medecines de masse c'est-à-dire suivre les malades là ou ils se trouvent ce qui justifient d'ailleurs le nombre d'extension dans la ville
                </li>
            
              </ul>


              <h3
              style={{ fontSize: "25px", color: "#01405c", fontWeight: "bold" }}
            >
              {" "}
         HORAIRE DE SERVICE
            </h3>

          
            <ul>
                <li className={styles.list}>
                  - Consultations génèrales, Laboratoire: 24H/24 
                </li>
                <li className={styles.list}>
                  -  Consultations spécialisées : Selon k'horaire affiché
                </li>
                <li className={styles.list}>- Une équipe de garde composée de médecins, infirmiers, laboratins, anesthesistes, chauffeur de garde et agents de sécurité spécialisés </li>
                <li className={styles.list}>
                  - Etablissements d'enseignements 
                </li>
                <li className={styles.list}>
                  - Publics et Privés (maternelle, primaire, secondaire, Superieur)
                </li>
                <li className={styles.list}>
                  - Mutualités et Eglises
                </li>
                <li className={styles.list}>
                  - socièté, entreprises, publics et privées
                </li>
                <li className={styles.list}>
                  - Expatriés
                </li>
            
              </ul>
              <h3
              style={{ fontSize: "25px", color: "#01405c", fontWeight: "bold" }}
            >
              {" "}
      CONVENTIONS MÉDICALES
            </h3>

          
            <div>
              <h5>Facturation</h5>

              <h6>Au cas par cas</h6>
               <p>UNe facture reprenant les soins et services dont le malade a réellement beneficiés au cours du mois</p>

               <h6>Forfaitaire</h6>
               <p>L'abonné paie un montant mensuel qui englobe un  nombre des prestations préablement négociées</p>
             
               <h5>Projet de convention médicale</h5>
            
               <p>à la démande</p>
              </div> 

              <h3
              style={{ fontSize: "25px", color: "#01405c", fontWeight: "bold" }}
            >
              {" "}
          NOS PARTENAIRES
            </h3>

          
            <ul>
                <li className={styles.list}>
                  - Patient Privés
                </li>
                <li className={styles.list}>
                  -  Famille et Particuliers
                </li>
                <li className={styles.list}>- Membres et Travailleurs  des ONG ET Associations </li>
                <li className={styles.list}>
                  - Etablissements d'enseignements 
                </li>
                <li className={styles.list}>
                  - Publics et Privés (maternelle, primaire, secondaire, Superieur)
                </li>
                <li className={styles.list}>
                  - Mutualités et Eglises
                </li>
                <li className={styles.list}>
                  - socièté, entreprises, publics et privées
                </li>
                <li className={styles.list}>
                  - Expatriés
                </li>
            
              </ul>
          </div>
        </div>
      </div>
      <Gallery/>
    </>
  );
}

export default knowus;
