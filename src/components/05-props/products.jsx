import React from "react";
import ProductCard from "./product-card";

const Products = () => {

  /*
  ! Bir componente bilgi göndermek istiyorsak bu şekilde yapabiliriz.
  ? Componentin içindeki name value gibi ifadeler normal prop compenentin
  *arasındaki ise childern prop olarak tanımlanır.
  
  */

  return (
    <div>
      <ProductCard title="Sony x5 ultra " price="10000">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <b> Dolores, hic unde provident obcaecati sed iusto illum ad!</b>{" "}
        Quisquam corporis nobis dolorum animi porro molestias provident itaque!
        Maiores natus nesciunt nobis?
      </ProductCard>

      <ProductCard title="Samsung s9" price="20000">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <i>Dolores, hic unde provident obcaecati sed iusto illum ad!</i>
        Quisquam corporis nobis dolorum animi porro molestias provident itaque!
        Maiores natus nesciunt nobis?
      </ProductCard>
    </div>
  );
};

export default Products;
