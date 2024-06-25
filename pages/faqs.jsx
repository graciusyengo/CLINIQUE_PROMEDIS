import React from "react";
import Head from "next/head";
import { useState } from "react";
import Link from "next/link";


function faqs() {
  const data = [
    {
      question: "Comment puis-je installer cette application ? ",
      answers: "Lorem ipsum dolor sit amet consectetur adipisicing elit z,k,k,k,kz kz,kd,zk,,k,k,dk,zkd,kz,dk,d,k,zk,dk,kd,z",
      following:"lorem ipsiump kdkdkk  lopepencncn cjjci"
    },
    {
      question: "Les applications ne s'installent pas ? ",
      answers: "lorem ipsiump kdkdkk  lopepencncn cjjci",
      following:"lorem ipsiump kdkdkk  lopepencncn cjjci"
    },
    {
      question: "Le formulaire de contact ne fonctionne pas ? ",
      answers: "lorem ipsiump kdkdkk  lopepencncn cjjci",
      following:"lorem ipsiump kdkdkk  lopepencncn cjjci"

    },
  ];
  const [selected,setSelected]= useState(null)
  

  const toggle=(index)=>{
   if(selected===index){
    return setSelected(null)
   }
   setSelected(index)

  }
  return (
    <>
      <Head>
        <script src="https://unpkg.com/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"></script>
      </Head>
      <div className="faq_area section_padding_130 mt-20" id="faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-lg-6">
              {/* Section Heading*/}
              <div
                className="section_heading text-center wow fadeInUp"
            
              >
                <h3>
                  <span>Foire  </span> Au questions
                </h3>
                <p>
                N'hésitez pas à nous poser vos questions, nous serons ravis d'y répondre et de vous aider du mieux possible
                </p>
                <div className="line" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {/* FAQ Area*/}
                 <div className="col-12 col-sm-10 col-lg-8" >
                 <div className="accordion faq-accordian" id="faqAccordion">
                 {data.map((item,index)=>(
                   <div
                     className="card border-0 wow fadeInUp" key={index}
                   
                   >
                     <div className="card-header" id="headingOne"  onClick={()=>toggle(index)} >
                       <h6
                         className="mb-0 collapsed"
                         data-toggle="collapse"
                         data-target="#collapseOne"
                         aria-expanded="true"
                         aria-controls="collapseOne"
                       >
                         {item.question}
                         <span className="lni-chevron-up" />
                       </h6>
                     </div>
                     <div
                       className={selected === index? "content": "collapse" }
                       id="collapseOne"
                       
                     >
                       <div className="card-body">
                         <p>
                          {item.answers}
                         </p>
                         <p>
                         {item.following}
                         
                         </p>
                       </div>
                     </div>
                   </div>
                ))}
                  
                 
                 </div>
                 {/* Support Button*/}
                 <div
                   className="support-button text-center d-flex align-items-center justify-content-center mt-4 wow fadeInUp"
                   data-wow-delay="0.5s"
                   style={{
                     visibility: "visible",
                     animationDelay: "0.5s",
                     animationName: "fadeInUp",
                   }}
                 >
                   <i className="lni-emoji-sad" />
                   <p className="mb-0 px-2">Vous ne trouvez pas vos réponses ?</p>
                   <Link href="/contact"> Contactez-nous</Link>
                 </div>
               </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default faqs;
