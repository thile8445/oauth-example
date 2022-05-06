import { useState } from "react";
import "./App.css";
import Header from "./components/header/header";
import SignUp from "./components/signUp/signUp";

function App() {
  const [theme, changeTheme] = useState(false);

  const onChangeTheme = (theme) => {
    if (theme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    changeTheme(theme);
  };

  return (
    <div style={{ width: "100vw" }}>
      <Header></Header>
      <SignUp></SignUp>
    </div>
  );
}

export default App;
