import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Game from "./pages/Game";
import Wrapper from "./components/Wrapper";
import Home from "./pages/Home";
import User from "./pages/User"; 
import NoMatch from './pages/NoMatch'
import {MathProvider} from './utils/GlobalState';

function App() {
  document.title = "Uguale";
  return (
    
      <Router>
        <MathProvider>
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/game" component={Game} />
            <Route exact path="/user" component={User} />
            <Route component={NoMatch} />
          </Wrapper>
        </MathProvider>
      </Router>
  

  );
}

export default App;
