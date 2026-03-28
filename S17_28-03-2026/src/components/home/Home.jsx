import React from "react";
import Brand from "./brand/Brand";
import CardContainer from "./card-container/CardContainer";
import "./Home.css";
export function Home() {
  return (
    <div>
      <Brand
        image={
          "https://rukminim2.flixcart.com/fk-p-flap/3160/1540/image/a043633e32b0a0b4.png?q=60"
        }
      />

      <CardContainer />
      <CardContainer />
      <CardContainer />
      <CardContainer />
      <CardContainer />
    </div>
  );
}
