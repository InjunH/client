import React from "react";
import ToolBar from "./components/ToolBar";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import RegistJoinUser from "./pages/RegistJoinUser";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles/main.css";
const App = () => {
  return (
    <div style={{ minWidth: 600, margin: "auto" }}>
      <ToastContainer />
      <ToolBar></ToolBar>
      {/* <Main></Main> */}
      <Switch>
        <Route path="/join/user" exact component={RegistJoinUser}></Route>
        <Route path="/" exact component={Main}></Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
};

export default App;
