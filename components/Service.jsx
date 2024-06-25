import React from "react";



function Service() {
  const img=[
    {url:":/img/about.jpg"}
  ]
  console.log(img)
  return (
    <div className="serviceContainer">
      {/* ======= Services Section ======= */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box">
                <div className="icon">
                  <i className="fas fa-heartbeat" />
                </div>
                <h4>
                  <a href="">Cardiologie</a>
                </h4>
                <p>
                  Grâce à notre expertise médicale de pointe, nous avons réussi
                  à traiter avec succès le problème cardiaque de nos patients,
                  en leurs offrant ainsi une nouvelle chance de vie et une
                  amélioration significative de leur santé.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="icon-box">
                <div className="icon">
                  <i className="fas fa-pills" />
                </div>
                <h4>
                  <a href="">pharmacie</a>
                </h4>
                <p>
                  Nous sommes dévoués à fournir des soins de qualité et des
                  traitements efficaces, y compris des pilules, pour le
                  bien-être de nos patients.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="icon-box">
                <div className="icon">
                  <i className="fas fa-hospital-user" />
                </div>
                <h4>
                  <a href="">Pédiatrie</a>
                </h4>
                <p>
                  Notre service de pédiatrie dédié offre des soins attentionnés
                  et spécialisés aux enfants, garantissant leur bien-être et
                  leur santé.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon">
                  <i className="fas fa-female" />
                </div>
                <h4>
                  <a href="">Gynecologie</a>
                </h4>
                <p>
                  Notre hôpital est reconnu pour sa prise en charge puissante et
                  complète en matière de gynécologie. Avec une équipe médicale
                  hautement qualifiée, des technologies de pointe et une
                  approche centrée sur la patiente, nous offrons des services
                  gynécologiques de premier ordre.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-eye" />
                </div>
                <h4>
                  <a href="">Ophtalmologie</a>
                </h4>
                <p>
                  Choisissez notre hôpital pour votre traitement ophtalmologique
                  et faites l'expérience d'un niveau exceptionnel de soins
                  oculaires. Notre équipe de spécialistes dévoués, combinée à
                  des installations de pointe, garantit des diagnostics précis,
                  des traitements avancés et des résultats optimaux
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box">
                <div className="icon">
                  <i className="bi bi-person" />
                </div>
                <h4>
                  <a href="">Dematologie</a>
                </h4>
                <p>
                  Modi nostrum vel laborum. Porro fugit error sit minus sapiente
                  sit aspernatur
                </p>
              </div>
            </div>
          </div>

        </div>
   
      </section>
     {/*<Paginate/>¨*/} 
      {/* End Services Section */}
    </div>
  );
}

export default Service;
