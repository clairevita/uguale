import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import "./App.css";
import Game from "./pages/Game";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import Test from './pages/Test';

function App() {
  document.title = "Uguale";
  return (
    <div>
      <Router>
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/test" component={Test} />
        </Wrapper>
    </Router>
    </div>
  
  );
}

export default App;
