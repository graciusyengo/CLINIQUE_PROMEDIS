import React from "react";
import { useState } from "react";
import style from "../styles/Doctors.module.css";
import Head from "next/head";

function doctor() {
  const [doctor, setDoctor] = useState(null);
  const [isShownButton, setIsShownButton] = useState(false);

  const Doctors = [
    {
      name: "Dr mabweni jean",
      service: "Géneraliste",
      type: "image",
      url: "/assets/img/main_image.jpeg",
      view:"Voir Profil"
    },
    {
      name: "Dr Nkoni jules",
      service: "Ophtamologue",
      type: "image",
      url: "/assets/img/doct.jpg",
      view:"Voir Profil"
    },
    {
      name: "Dr yengo dharmony",
      service: "Chirurgien",
      type: "image",
      url: "/assets/img/img2.jpg",
      view:"Voir Profil"
    },

    {
      name: "Dr monka judith",
      service: "Pediatre",
      type: "image",
      url: "/assets/img/doctor.jpg",
      view:"Voir Profil"
    },
    {
      name: "Dr mosi steph",
      service: "Pediatre",
      type: "image",
      url: "/assets/img/doctor.jpg",
      view:"Voir Profil"
    },

    {
      name: "Dr monka judith",
      service: "Pediatre",
      service: "psychiatre",
      type: "image",
      url: "/assets/img/doct.jpg",
      view:"Voir Profil"
    },
  ];
  function handle(e) {
    setIsShownButton(true);
  }
  return (
    <>
      <Head>
        <title>Clinique Promedis</title>
        <meta name="description" content="Clinique  Plamedi" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <div style={{ marginTop: "200px" }} className={style.container}>
        <h2>Nos Docteurs</h2>

        <div className={style.mediaContainer}>
          {Doctors.map((doctor, index) => (
            <div
              className={style.media}
              key={index}
              onClick={() => setDoctor(doctor)}
              onMouseEnter={handle}
            >
              
              <h5 type="button" class="name">
                  {doctor.name}
                  </h5>
                   
              <h6>
                  {doctor.service}
                  </h6>
              {doctor.type === "image" ? (
                <div>
                  <img className={style.img} src={doctor.url} alt="doctor" />

                </div>
              ) : (
                <video className={style.video} src={doctor.url} muted />
              )}
            </div>
          ))}
        </div>

        <div
          className={style.popupMedia}
          style={{ display: doctor ? "block" : "none" }}
        >
          <span onClick={() => setDoctor(null)}> &times; </span>
          {doctor?.type === "video" ? (
            <video
              className={style.video3}
              src={doctor?.url}
              muted
              autoPlay
              controls
            />
          ) : (
            <div className={style.infoDoctor}>
              <h5>{doctor?.name}</h5>
              <h3>{doctor?.service}</h3>
              <button className={style.buttonProfil}>Voir Profile</button>

              <img className={style.img3} src={doctor?.url} />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default doctor;
