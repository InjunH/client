import React from "react";
import ToolBar from "./components/ToolBar";
// import Footer from "./components/Footer";
import Main from "./pages/Main";
import "./styles/main.css";
const App = () => {
  return (
    <div style={{ minWidth: 600, margin: "auto" }}>
      <ToolBar></ToolBar>
      <Main></Main>
      {/* <Footer></Footer> */}
    </div>
  );
};

export default App;
