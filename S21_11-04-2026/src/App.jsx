import "./App.css";
import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Wrapper from "./components/wrapper/Wrapper.jsx";
import AuthContext from "./context/AuthContext.js";
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
      {isLoggedIn ? <Header logout={logout} /> : null}
      <AuthContext value={login}>
        <Wrapper isLoggedIn={isLoggedIn} />
      </AuthContext>
    </div>
  );
}

export default App;
