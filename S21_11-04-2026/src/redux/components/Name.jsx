import { useRef } from "react";
import nameActionCreator from "../action/nameActionCreator";
import myStore from "../store/store.js";
function Name() {
  const inputRef = useRef();

  const sendData = () => {
    // const actionObj = nameActionCreator(inputRef.current.value);
    // myStore.dispatch(actionObj);

    myStore.dispatch(nameActionCreator(inputRef.current.value));
  };

  return (
    <div className="container">
      <h1>Name Component</h1>
      <br />
      <input ref={inputRef} type="text" placeholder="username" />
      <button onClick={sendData}>Submit</button>
    </div>
  );
}

export default Name;
