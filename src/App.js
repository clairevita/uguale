import React from "react";
import Footer from "./components/Footer";
import "./App.css";
import MathContainer from "./components/MathContainer/MathContainer";

function App() {
  document.title = "Uguale";
  return (
    <div>
      <MathContainer/>
      <Footer />
    </div>
  
  );
}

export default App;
