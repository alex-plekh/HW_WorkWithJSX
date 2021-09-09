import React from "react";
// import logo from './logo.svg';
import './App.css';
import { MyComponents } from "./components/MyComponents";


function App() {
    return (
        <div className="App">
            <MyComponents.Users />
        </div>
    );
}
// function App() {
//     const getData = () => {
//         return "Some data";
//     };
//
//   return (
//     <div className="App">
//       <MyComponents.Header logo={logo} />
//       <MyComponents.Body />
//       <MyComponents.Section
//           text="Some text"
//           isDefault={false}
//           count={10}
//           user={{ name: "John", age: 34 }}
//           data={getData()}
//       />
//         <MyComponents.Users />
//     </div>
//   );
// }

export default App;
