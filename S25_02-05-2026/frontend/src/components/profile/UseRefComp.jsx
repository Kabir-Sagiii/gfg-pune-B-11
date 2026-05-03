import { useRef } from "react";

function UseRefComp() {
  const h1Ref = useRef(null); //h1Ref = {current:null}
  const inputRef = useRef(null);

  const changeStyle = () => {
    var h1DomElement = h1Ref.current;
    h1DomElement.style.color = "red";

    h1DomElement.innerText = inputRef.current.value;
  };

  return (
    <div className="container">
      <h1 ref={h1Ref}>useRef hook Concept</h1>
      <br />
      <input ref={inputRef} placeholder="Type...." />
      <br />
      <br />
      <button onClick={changeStyle}>Submit</button>
    </div>
  );
}

export default UseRefComp;
