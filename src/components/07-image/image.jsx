import React from "react";
import imageFrontend from "../../assets/img/frontend.jpg";
import imageSales from "../../assets/img/salesforce.png";
import imageHome from "../../assets/img/home.svg";



const Image = () => {
  return (
    <div>
      <h1>Image Add</h1>
      <p>
        Eğer imageler public pagagesinde ise ve her hangi bir
         optimizasyon
        gerekmiyor ise yapabiliriz
      </p>
      <img src="/vite.svg" alt="Vite Logo" />

      <h1>Dynamic Images</h1>

      <img src={imageFrontend} alt="" height={"200px"}/>

      <img src={imageSales} alt=""  height={"200px"}/>

      <img src={imageHome} alt="" height={"200px"} />
    </div>
  );
};

export default Image;
