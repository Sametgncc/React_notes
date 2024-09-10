import React from "react";

const Style1 = () => {

    const isRadius =false;
    const padding = "20px";

  return (
    <div>
      <h1>STYLES</h1>

      <h2
        style={{
          color: "red",
          fontSize: "20px",
          textShadow: "2px 2px 4px #000000",
          border : "1px solid black",
          borderRadius : isRadius ? "10px " : "5px",
          padding
        }}
      >
        INLINE STYLES
      </h2>

      
    </div>
  );
};

export default Style1;
