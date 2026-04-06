import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Wrapper from "./components/wrapper/Wrapper.jsx";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="app">
      {isLoggedIn ? <Header /> : null}
      <Wrapper isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
