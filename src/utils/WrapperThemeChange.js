// import React, { useState } from "react";
// import ThemeModal from "./ThemeModal";
// // import "./style.css";

// // function Wrapper(props) {
// //   return <main className="wrapper" {...props} />;
// // }
// // export default Wrapper;


// function Wrapper() {
//     const [themeState, setThemeState] = useState({
//       stylePath: '../default.css',
//     });

//     // const [darkState, setDarkState] = useState({
//     //   darkState: false,
//     // });

//     function handleThemeChange() {
//       if (themeState.stylePath == '../berrytheme.css') {
//         console.log('The style chosen is berry')
//       }
//       else if (themeState.stylePath == '../honeytheme.css') {
//         console.log('The style chosen is honey')
//       }
//       else {
//         console.log('The style chosen is mint')
//       }
//     }
  
//     return (
//       <main className="Wrapper">
//         <HomeConfigContainer setThemeState={this.setThemeState} handleThemeChange={this.handleThemeChange}></HomeConfigContainer>
//       </main>
//     );
//   }
  
//   export default Wrapper;




  //useUserStatus 


  //create custom hook?  


  // <link rel="stylesheet" type="text/css" href={this.state.stylePath} />


// need to dynamically update the style sheet import everywhere


//container renders ConfigBttn component.   Inside the container component render function will be the config compnent with the prop of handleFormSubmit={this.handleFormSubmit}. Higher in the stateful container component includes the handleFormSubmit = event => {
//   event.preventDefault();
// this.searchGiphy(this.state.search);
// };

// const name = event.target.name;
//   const value = event.target.value;
//   this.setState({
//     [name]: value
//   });
// }; Inside the config component, the function to render the button or menu will render <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3"> search </button>


//I need a function maybe formatTheme

//formatTheme() {
// const { stylePath } = this.state;
// return '
//}