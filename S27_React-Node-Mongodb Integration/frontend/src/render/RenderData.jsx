import { useState } from "react";

function RenderData() {
  //   const [state, setState] = useState([
  //     <h1>heading</h1>,
  //     <p>para</p>,
  //     <div>division</div>,
  //   ]);

  const [state, setState] = useState([
    "Rajiv",
    "Raj",
    true,
    "rajesh",
    false,
    "rohini",
  ]);
  return (
    <div>
      <h1>Rendering Data of different Types </h1>
      <ol>
        {state.map(function (element) {
          return <li>{element} </li>; //[<li> Rajiv</li>,<li>raj</li>]
        })}
      </ol>
    </div>
  );
}

export default RenderData;
