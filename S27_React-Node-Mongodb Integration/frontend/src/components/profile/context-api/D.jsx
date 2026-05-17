import { useContext } from "react";
import { MyFirstContext } from "./myContext.js";

function D() {
  const data = useContext(MyFirstContext);
  return (
    <div className="container">
      <h1>
        D Component : <span className="context-color">{data}</span>
      </h1>
    </div>
  );
}

export default D;
