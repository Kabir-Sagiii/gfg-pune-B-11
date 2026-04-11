import { useState } from "react";
import B from "./B";
import { MyFirstContext } from "./myContext.js";

function A() {
  const [state, setState] = useState("GFG");
  return (
    <div className="container">
      <h1>A Component</h1>
      <br />
      <button
        onClick={() => {
          setState("React is Library");
        }}
      >
        Update
      </button>
      <br />
      <br />
      <hr />
      <br />
      <MyFirstContext value={state}>
        <B />
      </MyFirstContext>
    </div>
  );
}

export default A;
