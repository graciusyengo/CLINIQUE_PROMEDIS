import React from 'react'

function Topbar() {
  return (
    <div id="topbar" className="d-flex align-items-center fixed-top">
    <div className="container d-flex justify-content-between">
      <div className="contact-info d-flex align-items-center">
        <i className="bi bi-envelope" />
        <a href="mailto:contact@example.com">cliniquepromedis@gmail.com</a>
        <i className="bi bi-phone" /> <span className='phone'>+243819980029 - +243819980070</span>
      <i className="bi bi-bi bi-geo-alt-fill" /> <span className='location'>N° 23/C, 10ème Rue Limete Industriel</span>
      </div>
      <div className="d-none d-lg-flex social-links align-items-center">
        <a href="#" className="twitter">
          <i className="bi bi-twitter" />
        </a>
        <a href="#" className="facebook">
          <i className="bi bi-facebook" />
        </a>
        <a href="#" className="instagram">
          <i className="bi bi-instagram" />
        </a>
        <a href="#" className="linkedin">
          <i className="bi bi-linkedin" />
        </a>
      </div>
    </div>
  </div>
  
  )
}
export default Topbar