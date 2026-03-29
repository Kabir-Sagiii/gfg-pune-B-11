import { use, useState } from "react";
import "./Card.css";
import { changeProduct } from "./card";

function Card() {
  var [image, setImage] = useState(
    "https://tse4.mm.bing.net/th/id/OIP.mC13MkKc4NdxwfRdVqGmsgHaE3?rs=1&pid=ImgDetMain&o=7&rm=3",
  );

  var [title, setTitle] = useState("Trending Dresses");

  return (
    <div className="card">
      <img src={image} width={"100%"} height={230} alt="" />
      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates, ea
        veritatis.
      </p>
      <button
        onClick={() => {
          changeProduct(setImage, setTitle);
        }}
      >
        Change Product
      </button>
    </div>
  );
}

export default Card;
