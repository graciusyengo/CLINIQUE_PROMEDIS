import React from "react";
import styles from "../styles/Neuropychiatrie.module.css"
import Image from "next/image";
import Link from "next/link";
import { MdPictureAsPdf } from "react-icons/md";


function Neuropychiatrie() {
  return (
    <>
      <div id="pediatrie" className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/img/pediatrie.jpg"
            height={300}
            width={1300}
            className={`${styles.image} ${styles.blurredImage}`}
          />
        </div>
        <div  className={styles.pdf}>
          <div>Télécharger </div>
        <MdPictureAsPdf size={25} />
        </div>
        <div className={styles.textContainer}>
          <div
            className={`${styles.titleContainer} font-brandon uppercase text-center font-bold mb-3`}
          >
            Chirurgie gynécologique &amp; mammaire
            <div className="font-medium text-center lowercase" style={{marginLeft:"-66px"}}>
              <div className={styles.desc}>
                <p>
                  Le service prend en charge&nbsp;les pathologies de la femme
                  par une équipe pluridisciplinaire composée de médecins, de
                  radiologues, et de chirurgiens.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.service}>
          <div className={styles.sidebar} >
            <div style={{fontSize:"16px",color:"#01405c",fontWeight:"bold"}}>
            <h5  style={{fontWeight:"600"}}>  PRÉSENTATION  </h5>
            <h5 style={{fontWeight:"600"}}>  PATHOLOGIE  </h5>
            </div>
            <ul style={{listStyleType:"square"}}>
              <li>Cancer du sein</li>
              <li>Cancer pelvien (ovaire, col utérin...)</li>
              <li>Prolapsus</li>
              <li>Incontinence urinaire d’effort</li>
              <li>Chirurgie de l'infertilité</li>
              <li>Endométriose</li>
              <li>Fibromes utérins ou myomes utérins</li>
            </ul>
            <p className={styles.paragraphe}  >
             LES DIFFÉRENTS TYPES DE CHIRURGIE NOTRE ÉQUIPE
              CONTACT ACTUALITÉS JE VEUX DONNER AU SERVICE{" "}
            </p>
          </div>
          <div
            className={styles.presentation}
            style={{paddingLeft:"40px",textAlign:"justify",width:"60px" }}
          >
            <h3 style={{fontSize:"25px",color:"#01405c",fontWeight:"bold"}}> PRÉSENTATION</h3>
            <p className={styles.paragraphe}  >Chirurgie gynécologique & mammaire
Le service prend en charge les pathologies de la femme par une équipe pluridisciplinaire composée de médecins, de radiologues, et de chirurgiens.</p>
            <p className={styles.paragraphe} >Avec une expérience de plus de 30 ans dans les domaines de la cancérologie et de la statique pelvienne, l'équipe collabore aussi étroitement avec les services de chirurgie digestive, urologique et proctologique du groupe hospitalier Diaconesses Croix Saint-Simon pour une prise en charge globale des troubles de la statique pelvienne et des incontinences urinaires.</p>
            <p style={{textAlign:"justify",width:"800px"}}>Le service est expert en chirurgie coelioscopique et robot assistée multibras et monotrocart (robot Da Vinci Si de dernière génération).</p>
         

 <h4 style={{fontSize:"16px",color:"#01405c",fontWeight:"bold"}}>Principales pathologies fonctionnelles prises en charge :</h4> 
<p className={styles.paragraphe} >Troubles de la statique pelvienne (prolapsus) et incontinence urinaire
Pathologies utéro-annexielles bénignes (endométriose, kystes ovariens, fibromes utérins)
Chirurgie de l’infertilité
Incontinence anale, réparation sphinctérienne et périnéale.</p>

<h4 style={{fontSize:"16px",color:"#01405c",fontWeight:"bold"}}>Pathologies cancéreuses prises en charge :</h4>
<p className={styles.paragraphe}  >
Le service de chirurgie gynécologique et mammaire fait partie du Centre de Cancérologie de l'Est Parisien, une structure spécialisée dans les cancers digestifs, gynécologiques et urologiques et qui accompagne les patients du dépistage à l'après-cancer.
</p>

<p  className={styles.paragraphe} >Cancers pelviens (ovaire, col utérin, endomètre, vulve).</p>
<div><p className={styles.paragraphe}>Cancer du sein (diagnostic, chirurgie simple, chirurgie oncoplastique et chirurgie reconstructrice)
 pour en savoir plus sur le Centre de Cancérologie de l'Est Parisien,  <Link href="#">cliquez ici</Link></p></div>

<h4 style={{fontSize:"16px",color:"#01405c",fontWeight:"bold"}}>PATHOLOGIES</h4>
<p className={styles.paragraphe}  >Les consultations en chirurgie gynécologique et mammaire nécessitent très souvent une auscultation des parties intimes du corps. Cliquez ci-dessous pour télécharger notre charte concernant nos pratiques en cas de consultation ou d'examen de la sphère intime :</p>
<Link href="#"> CHARTE CONSULTATION ET EXAMEN SPHÈRE INTIME_0 (pdf, 232.35 Ko)</Link>



<h4 style={{fontSize:"16px",color:"#01405c",fontWeight:"bold"}}>URGENCES SEIN</h4>

<div>
une prise en charge dans la journée
01 44 64 43 45
cliniquepromedis@gmail.com
<p className={styles.paragraphe}>
Tous les lundis, une prise en charge diagnostique thérapeutique immédiate et personnalisée.
</p>

</div>
<p  className={styles.paragraphe}  >L'unité de pathologie mammaire du Groupe Hospitalier a mis en place un circuit rapide pour faciliter la prise en charge des patientes ayant une forte suspicion clinique ou mammo-échographique du cancer du sein.</p>
<p className={styles.paragraphe} > Les patientes bénéficient, dans la journée, d'un rendez-vous avec un chirurgien, d'examens radiologiques complémentaires et de biopsies si jugé nécessaires par les radiologues spécialisés dans l'imagerie médicale du sein.</p>

<p className={styles.paragraphe}  >Selon les cas, les patientes bénéficient d'un diagnostic cytologique et sont revues, éventuellement, par le chirurgien dans l'après-midi pour l'annonce du résultat et l'organisation de leur prise en charge.</p>
<p className={styles.paragraphe}>Elles auront, dans tous les cas, un deuxième rendez-vous dans les 7 jours pour l'annonce des résultats histologiques complets.</p>

<p className={styles.paragraphe} >Enfin, les patientes ayant déjà un diagnostic de cancer du sein sont vues par un chirurgien dans les 7 jours et, si nécessaire, la chirurgie est programmée dans les 3 semaines qui suivent.</p>

<p  className={styles.paragraphe}  >Pour un RDV de chirurgie du sein (hors urgence sein) : contactez le Centre de Cancérologie de l'Est Parisien par téléphone au 01 44 74 28 90 ou par mail ccep@hopital-dcss.org </p>

          </div>
        </div>
      </div>
    </>
  );
}

export default Neuropychiatrie;
