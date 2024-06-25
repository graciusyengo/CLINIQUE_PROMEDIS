import React from 'react'

function Count() {
  return (
   
   <>
  <section id="counts" className="counts">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="count-box">
            <i className="fas fa-user-md" />
            <span
              data-purecounter-start={0}
              data-purecounter-end={85}
              data-purecounter-duration={1}
              className="purecounter"
            >
              34
            </span>
            <p>Doctors</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
          <div className="count-box">
            <i className="far fa-hospital" />
            <span
              data-purecounter-start={0}
              data-purecounter-end={18}
              data-purecounter-duration={1}
              className="purecounter"
            >
              20+
              </span>
            <p>Experience</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="count-box">
            <i className="fas fa-flask" />
            <span
              data-purecounter-start={0}
              data-purecounter-end={12}
              data-purecounter-duration={1}
              className="purecounter"
            >
2
              </span>
            <p>Laboratoires de recherche</p>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
          <div className="count-box">
            <i className="fas fa-award" />
            <span
              data-purecounter-start={0}
              data-purecounter-end={150}
              data-purecounter-duration={1}
              className="purecounter"
            >
7
              </span>
            <p>Récompenses</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* End Counts Section */}
</>

 
  )
}

export default Count