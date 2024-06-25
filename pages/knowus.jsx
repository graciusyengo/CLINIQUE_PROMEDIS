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
              <li>Mission</li>
              <li>Horaire de service</li>
              <li>Convention Medicale</li>
              <li>Nos Partenaires</li>
              <li>Horaire de service</li>
           
             

           
            </ul>
            <p className={styles.paragraphe}>
              LES DIFFÉRENTS TYPES DE CHIRURGIE NOTRE ÉQUIPE CONTACT ACTUALITÉS
              JE VEUX DONNER AU SERVICE
            </p>
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

            <h4
              style={{ fontSize: "16px", color: "#01405c", fontWeight: "bold" }}
            >
              Pathologies cancéreuses prises en charge :
            </h4>
            <p className={styles.paragraphe}>
              Le service de chirurgie gynécologique et mammaire fait partie du
              Centre de Cancérologie de l'Est Parisien, une structure
              spécialisée dans les cancers digestifs, gynécologiques et
              urologiques et qui accompagne les patients du dépistage à
              l'après-cancer.
            </p>

            <p className={styles.paragraphe}>
              Cancers pelviens (ovaire, col utérin, endomètre, vulve).
            </p>
            <div>
              <p className={styles.paragraphe}>
                Cancer du sein (diagnostic, chirurgie simple, chirurgie
                oncoplastique et chirurgie reconstructrice) pour en savoir plus
                sur le Centre de Cancérologie de l'Est Parisien,{" "}
                <Link href="#">cliquez ici</Link>
              </p>
            </div>

            <h4
              style={{ fontSize: "16px", color: "#01405c", fontWeight: "bold" }}
            >
              PATHOLOGIES
            </h4>
            <p className={styles.paragraphe}>
              Les consultations en chirurgie gynécologique et mammaire
              nécessitent très souvent une auscultation des parties intimes du
              corps. Cliquez ci-dessous pour télécharger notre charte concernant
              nos pratiques en cas de consultation ou d'examen de la sphère
              intime :
            </p>
            <Link href="#">
              {" "}
              CHARTE CONSULTATION ET EXAMEN SPHÈRE INTIME_0 (pdf, 232.35 Ko)
            </Link>

            <h4
              style={{ fontSize: "16px", color: "#01405c", fontWeight: "bold" }}
            >
              URGENCES SEIN
            </h4>

            <div>
              une prise en charge dans la journée 01 44 64 43 45
              cliniquepromedis@gmail.com
              <p className={styles.paragraphe}>
                Tous les lundis, une prise en charge diagnostique thérapeutique
                immédiate et personnalisée.
              </p>
            </div>
            <p className={styles.paragraphe}>
              L'unité de pathologie mammaire du Groupe Hospitalier a mis en
              place un circuit rapide pour faciliter la prise en charge des
              patientes ayant une forte suspicion clinique ou
              mammo-échographique du cancer du sein.
            </p>
            <p className={styles.paragraphe}>
              {" "}
              Les patientes bénéficient, dans la journée, d'un rendez-vous avec
              un chirurgien, d'examens radiologiques complémentaires et de
              biopsies si jugé nécessaires par les radiologues spécialisés dans
              l'imagerie médicale du sein.
            </p>

            <p className={styles.paragraphe}>
              Selon les cas, les patientes bénéficient d'un diagnostic
              cytologique et sont revues, éventuellement, par le chirurgien dans
              l'après-midi pour l'annonce du résultat et l'organisation de leur
              prise en charge.
            </p>
            <p className={styles.paragraphe}>
              Elles auront, dans tous les cas, un deuxième rendez-vous dans les
              7 jours pour l'annonce des résultats histologiques complets.
            </p>

            <p className={styles.paragraphe}>
              Enfin, les patientes ayant déjà un diagnostic de cancer du sein
              sont vues par un chirurgien dans les 7 jours et, si nécessaire, la
              chirurgie est programmée dans les 3 semaines qui suivent.
            </p>

            <p className={styles.paragraphe}>
              Pour un RDV de chirurgie du sein (hors urgence sein) : contactez
              le Centre de Cancérologie de l'Est Parisien par téléphone au 01 44
              74 28 90 ou par mail ccep@hopital-dcss.org{" "}
            </p>
          </div>
        </div>
      </div>
      <Gallery />
    </>
  );
}

export default knowus;
