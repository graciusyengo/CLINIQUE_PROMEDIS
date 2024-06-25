import React from "react";
import styles from "../styles/Main.module.css";
import { FaDonate } from "react-icons/fa";
import { GrContact } from "react-icons/gr";
import { MdHomeRepairService } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

function Main() {
  return (
    <>
  <section id="hero" className="d-flex align-items-center">
  </section>
  <div id="container" className="container">
  <div className="marketing"  style={{marginLeft:"400px",marginTop:"50px"}}>
      <h1>CLINIQUE PROMEDIS</h1>
      <h5 style={{color:"#fff",fontSize:"30px",marginLeft:"-28px"}}>Exercer la médecine avec toutes les exigences de l'art de guérir: C'est notre vocation.
       </h5>
     
      <Link href="/contact"  className={styles.appointmentbtn}>
       Nous contactez
      </Link>
    </div>
    </div>
  {/* End Hero */}
</>
   
  );
}

export default Main;
