import React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <>
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-contact">
            <h3>Clinique Promedis</h3>
            <p>
            N° 23/C, 10 Rue Limete <br />
            Industriel 
              <br />
              Kinshasa <br />
              <br />
              <strong>Phone:</strong> +2433385771
              <br />
              <strong>Email:</strong> cliniquepromedis@gmail.com
              <br />
            </p>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>A propos</h4>
            <ul>
              <li>
             <Link href="/history">Historique</Link>
              </li>
              <li>
             <Link href="/mission">Mission</Link>
              </li>
              <li>
             <Link href="/vision">Visions</Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Nos Services</h4>
            <ul>
              <li>
              <a href="#">Dentisterie</a>
              </li>
              <li>
                <a href="#">CPN-CPS</a>
              </li>
              <li>
          <a href="#">Cardiologie</a>
              </li>
              <li>
           <a href="#">Neuropychiatre</a>
              </li>
              <li>
            <a href="#">Dermatologie</a>
              </li>
              <li>
               <a href="#">Ophtalmologie</a>
              </li>
              <li>
                 <a href="#">Gynecologie</a>
              </li>
              <li>
               <a href="#">Pediatrie</a>
              </li>
              <li>
            
                <a href="#">Irologie</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 footer-newsletter">
            <h4>
Rejoignez notre newsletter</h4>
            <p>
            Restez à jour avec les dernières avancées médicales, les conseils de santé et les événements communautaires en vous abonnant à notre newsletter.
            </p>
            <form action="" method="post">
              <input type="email" name="email"  className="form-control"/>
              <input  type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="container d-md-flex py-4">
      <div className="me-md-auto text-center text-md-start">
        <div className="copyright">
          © Copyright
          <strong>
            <span>Promedis</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits">
          {/* All the links in the footer should remain intact. */}
          {/* You can delete the links only if you purchased the pro version. */}
          {/* Licensing information: https://bootstrapmade.com/license/ */}
          {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/ */}
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" className="twitter">
          <i className="bx bxl-twitter" />
        </a>
        <a href="#" className="facebook">
          <i className="bx bxl-facebook" />
        </a>
        <a href="#" className="instagram">
          <i className="bx bxl-instagram" />
        </a>
        <a href="#" className="google-plus">
          <i className="bx bxl-skype" />
        </a>
        <a href="#" className="linkedin">
          <i className="bx bxl-linkedin" />
        </a>
      </div>
    </div>
  </footer>
  {/* End Footer */}
</>

 

  )
}

export default Footer