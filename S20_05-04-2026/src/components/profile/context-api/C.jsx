import { useContext } from "react";
import D from "./D";
import { MyFirstContext } from "./myContext";
function C() {
  const value = useContext(MyFirstContext);
  return (
    <div className="container">
      <h1>
        C Component : <span className="context-color">{value}</span>
      </h1>
      <br />
      <hr />
      <br />
      <D />
    </div>
  );
}

export default C;
