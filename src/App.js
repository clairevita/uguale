import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Game from "./pages/Game";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import { MathProvider } from './utils/GlobalState';
function App() {
  document.title = "Uguale";
  return (
    <div>
      <Router>
        <MathProvider>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/game" component={Game} />
        </Wrapper>
        </MathProvider>
      </Router>
    </div>
  
  );
}

export default App;
