import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { TYPE_OF_THEME } from './enum'; 
import App from "./App";
// import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';



const DefaultTheme = React.lazy(() => import('./themes/defaulttheme'));
const BerryTheme = React.lazy(() => import('./themes/berrytheme'));

const ThemeSelector = ({ children }) => {
    const CHOSEN_THEME = localStorage.getItem('TYPE_OF_THEME') || TYPE_OF_THEME.DEFAULT;
    return (
      <>
        <React.Suspense fallback={<></>}>
          {(CHOSEN_THEME === TYPE_OF_THEME.LIGHT_MODE) && <DefaultTheme />}
          {(CHOSEN_THEME === TYPE_OF_THEME.DARK_MODE) && <BerryTheme />}
        </React.Suspense>
        {children}
      </>
    )
  }

ReactDOM.render(
    <ThemeSelector>
        <App/>
    </ThemeSelector>, document.getElementById("root"));
