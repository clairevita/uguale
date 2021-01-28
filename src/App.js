import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import Game from "./pages/Game";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";

function App() {
  document.title = "Uguale";
  return (
    <div>
      <Router>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/game" component={Game} />
        </Wrapper>
    </Router>
    </div>
  
  );
}

export default App;
