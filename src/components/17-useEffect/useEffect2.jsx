import React, { useEffect } from "react";

const Useeffect2 = () => {
  useEffect(() => {
    console.log("MOUNTİNG");
    return () => {
      console.log(
        "UNMOUNTİNG2 : Buradaki kodalar component DOM dan atilmadan hemen önce yazıldı "
      );
    };
  }, []);

  return <div>Effect2</div>;
};

export default Useeffect2;
