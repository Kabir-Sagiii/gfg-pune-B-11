import React from "react";
import Brand from "./brand/Brand";
import CardContainer from "./card-container/CardContainer";
import "./Home.css";
import { data } from "./home.js";
export function Home() {
  // const [{title,adCardData:[{image1,offerTitle1},{},{},{},{}]},cardContainerRef2,cardContainerRef3,cardContainerRef14,cardContainerRef5] = data
  return (
    <div>
      <Brand
        image={
          "https://rukminim2.flixcart.com/fk-p-flap/3160/1540/image/a043633e32b0a0b4.png?q=60"
        }
      />

      <CardContainer info={data[0]} />
      <CardContainer info={data[1]} />
      <CardContainer info={data[2]} />
      <CardContainer info={data[3]} />
      <CardContainer info={data[4]} />
    </div>
  );
}
