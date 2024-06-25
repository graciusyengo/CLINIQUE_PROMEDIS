import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

function Testimonals() {
  return (
    <>
      <div className="gtco-testimonials">
        <h2>Testimonials </h2>
        <div className="owl-carousel owl-carousel1 owl-theme">
          <Swiper
          effect={'coverflow'}
       
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto" }
          coverflowEffect={
            {
                rotate:0,
                stretch:0,
                depth:100,
                modifier:2.5
            }
          }
          pagination={{el:'.swiper-pagination',clickable:true}}
          navigation={{
            nextEl:'.swiper-button-next',
            prevEl:'swiper-button-prev',
            clickable:true
          }}
          modules={[EffectCoverflow, Pagination,Navigation]}

         
          className="swiper_container"
          >
            <SwiperSlide>
              <div>
                <div className="card text-center">
                  <img
                    className="card-img-top"
                    src="https://lh3.googleusercontent.com/a-/ALV-UjWvsx61FHT2A2tM7WoB-3HoMW1XnWnQf8SSi4RE9mAHsXhColI=w60-h60-p-rp-mo-br100"
                    alt=""
                  />
                  <div className="card-body">
                  <h5>
                  Roxane Tshilomba <br />
                      <span> Patient </span>
                    </h5>
                    <p className="card-text">
                    Étendu dans les coins et recoins de la ville de Kinshasa, Promedis garantie votre santé avec son service impeccable... j'adore cet hôpital on est déjà guéri avant même la consultation tellement c'est propre.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div>
                <div className="card text-center">
                  <img
                    className="card-img-top"
                    src="https://lh3.googleusercontent.com/a-/ALV-UjWT15X4Jj7_KVrTd9_X0S29JNdIpHrUBHbA6uxPKC90XcC3uRE=w60-h60-p-rp-mo-br100"
                    alt=""
                  />
                  <div className="card-body">
                    <h5>
                    Marie-pascale Baere <br />
                      <span> Patient </span>
                    </h5>
                    <p className="card-text">
                    La clinique Promedis propose un service de qualité, la prise en charge des malades est très rapide et les prix mettent à l’aise toute la population ( de mon expérience). 
                  
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div>
                <div className="card text-center">
                  <img
                    className="card-img-top"
                    src="https://lh3.googleusercontent.com/a-/ALV-UjWomp7V-lxyutxSx2pLcoS7exauQABRiwl80ysu4iSOdgJwDVxm=w60-h60-p-rp-mo-br100"
                    alt=""
                  />
                  <div className="card-body">
                    <h5>
                    Candyce Ilunga
                      <br />
                      <span> Patient </span>
                    </h5>
                    <p className="card-text">
                      “ Pour avoir eu plusieurs fois des expériences avec la clinique Promedis, je peux dire que le service est impeccable. La prise en charge des malades est faite avec beaucoup de soin ”
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div>
                <div className="card text-center">
                  <img
                    className="card-img-top"
                    src="https://lh3.googleusercontent.com/a/ACg8ocLvXOXTuxmThXAKRPrAasmxEVZwEZGDjQrI0sCp0a5uQ49Aug=w60-h60-p-rp-mo-br100"
                    alt=""
                  />
                  <div className="card-body">
                    <h5>
                    Keren_ M
                      <br />
                      <span> Patient</span>
                    </h5>
                    <p className="card-text">
                      “ Des infirmiers et infirmières gentils et courtois
Des médecins à l’écoute des patients
Une prise en charge rapide et très consciencieuse
Un hôpital impeccable ! ”{" "}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
               <ion-icon name="arrow-back-outline"></ion-icon>
               </div>

               <div className="swiper-button-next slider-arrow">
               <ion-icon name="arrow-forward-outline"></ion-icon>
               </div> 
               <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}
export default Testimonals;
