import React,{useState} from "react";
import style from "../styles/Gallery.module.css"
import Image from "next/image";


function Gallery() {

  const [file,setFile]=useState(null)
  const Media = [

    { type: "image", url: "/assets/img/gallery.jpg" },
    { type: "image", url: "/assets/img/gallery2.jpg" },
    { type: "image", url: "/assets/img/gallery3.jpg" },
    { type: "image", url: "/assets/img/gallery4.jpg" },
    { type: "image", url: "/assets/img/gallery5.jpg" },
    { type: "image", url: "/assets/img/gallery6.jpg" },
    { type: "image", url: "/assets/img/gallery7.jpg" },
    { type: "image", url: "/assets/img/gallery8.jpg" },
    { type: "image", url: "/assets/img/gallery9.jpg" },
    { type: "image", url: "/assets/img/gallery11.jpg" },
    { type: "image", url: "/assets/img/gallery12.jpg" },
    { type: "image", url: "/assets/img/gallery14.jpg" },
    


    { type: "video", url: "/assets/img/hospital.mp4" },

    
  ];
  console.log(Media);

  return (
    <div style={{ marginTop: "80px" }} className={style.container}>
      <h2>Gallerie</h2>

      <div className={style.mediaContainer}>
        {Media.map((file, index) => (
          <div className={style.media} key={index} onClick={()=>setFile(file)}>
        {
          file.type==="image"
          ? <img className={style.img} src={file.url} alt="ksk" />
          :<video  className={style.video}src={file.url}  muted/>
        }
          </div>
        ))}
      </div>

      <div className={style.popupMedia} style={{display:file? "block": "none"}} >
        <span onClick={()=>setFile(null)}> &times; </span>
        {file?.type==="video"
        ? <video className={style.video3} src={file?.url} muted autoPlay controls  />
        : <img className={style.img3} src={file?.url}/>
        }
      </div>
    </div>
  );
}

export default Gallery;
