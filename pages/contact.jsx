import React from "react";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Contact.module.css";
import Succursales from "@/components/Succursales";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xpzvkkkn");
  if (state.succeeded) {
    return (
      <div
        class="alert alert-success flex justify-content-center "
        style={{ marginTop: "200px" }}
        role="alert"
      >
        Votre mail à été envoyer avec succes!{" "}
        <Link href="/">
          <span
            style={{ cursor: "pointer", color: "#333", fontWeight: "bold" }}
          >
            {" "}
            Retour en arriere
          </span>
        </Link>
      </div>
    );
  }
  return (
    <>
      <Head>
        <title>Contacez-nous</title>
        <meta name="description" content="Clinique  Promedis" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon/favicon.ico" />
      </Head>
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-md-12">
              <div className="wrapper">
                <div className="row no-gutters">
                  <div className="col-md-7 d-flex align-items-stretch">
                    <div className="contact-wrap w-100 p-md-5 p-4">
                      <h3 className="mb-4">Nous Contactez</h3>
                      <div id="form-message-warning" className="mb-4" />
                      <div id="form-message-success" className="mb-4">
                        Notre équipe d'assistants virtuels est là pour vous
                        épauler. ALors écrivez nous.
                      </div>
                      <div>
                        <form method="POST" id="contactForm" name="contactForm">
                          <div className="row">
                            <div className="col-md-5">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="name"
                                  id="name"
                                  placeholder="Name"
                                />
                              </div>
                            </div>
                            <div className="col-md-6 ">
                              <div className="form-group">
                                <input
                                  type="email"
                                  className="form-control"
                                  name="email"
                                  id="email"
                                  placeholder="Email"
                                />
                              </div>
                            </div>
                            <div className="col-md-12 mt-3">
                              <div className="form-group">
                                <input
                                  type="text"
                                  className="form-control"
                                  name="subject"
                                  id="subject"
                                  placeholder="Subject"
                                />
                              </div>
                            </div>
                            <div className="col-md-12 mt-3">
                              <div className="form-group">
                                <textarea
                                  name="message"
                                  className="form-control"
                                  id="message"
                                  cols={30}
                                  rows={7}
                                  placeholder="Message"
                                  defaultValue={""}
                                />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  type="submit"
                                  defaultValue="Send Message"
                                  className="btn btn-primary"
                                />
                                <div className="submitting" />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${styles.box} col-md-5 d-flex align-items-stretch`}
                  >
                    <div
                      className="info-wrap  w-100 p-lg-5 p-4 "
                      style={{
                        color: "white",
                        backgroundColor: "#5FA599",
                        paddingTop: "334px",
                        borderRadius: "9px",
                      }}
                    >
                      <h3 className="mb-4 mt-md-4">Contact us</h3>
                      <div className="dbox w-100 d-flex align-items-start">
                        <div
                          className="icon d-flex align-items-center justify-content-center"
                          style={{ backgroundColor: "white" }}
                        >
                          <span className="fa fa-map-marker" />
                        </div>
                        <div className="text pl-3 mt-2">
                          <p style={{ color: "#ccc",fontSize:"14px" }}>
                            <span style={{ color: "white" }}>Address:</span> 198
                            West 21th Street, Suite 721 New York NY 10016
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center mt-3">
                        <div
                          className="icon d-flex align-items-center justify-content-center"
                          style={{ backgroundColor: "white" }}
                        >
                          <span className="fa fa-phone" />
                        </div>
                        <div className="text pl-3 mt-2">
                          <p style={{ color: "white",fontSize:"14px" }}>
                            <span>Phone:</span>{" "}
                            <a
                              style={{ color: "#ccc" }}
                              href="tel://1234567920"
                            >
                              + 1235 2355 98
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center mt-3">
                        <div
                          className="icon d-flex align-items-center justify-content-center"
                          style={{ backgroundColor: "white" }}
                        >
                          <span className="fa fa-paper-plane" />
                        </div>
                        <div className="text pl-3 mt-2">
                          <p style={{ color: "white", fontSize:"14px" }}>
                            <span>Email:</span>{" "}
                            <a
                              style={{ color: "#ccc"  }}
                              href="mailto:info@yoursite.com"
                            >
                              info@yoursite.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div className="dbox w-100 d-flex align-items-center mt-3">
                        <div
                          className="icon d-flex align-items-center justify-content-center"
                          style={{ backgroundColor: "white" }}
                        >
                          <span className="fa fa-globe" />
                        </div>
                        <div className="text pl-3 mt-2">
                          <p style={{ color: "white",fontSize:"14px" }}>
                            <span>Website</span>{" "}
                            <a style={{ color: "#ccc"}} href="#">
                              yoursite.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-5 d-flex align-items-stretch w-100">
                    <div id="map">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.3053657879327!2d15.339067874072517!3d-4.353704546670824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a36e68f7ee96f%3A0xc2f7145f16052950!2sClinique%20Promedis!5e0!3m2!1sfr!2scd!4v1713459019845!5m2!1sfr!2scd"
                        width={1000}
                        height={400}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Succursales />
      </section>
    </>
  );
}

export default Contact;
