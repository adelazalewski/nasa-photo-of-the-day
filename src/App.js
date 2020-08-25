import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
//https://api.nasa.gov/planetary/apod
function App() {

  
 useEffect(() => {
axios
 .get(`https://api.nasa.gov/planetary/apod?api_key=KHfBOCneFgtNxSmW61NFFecwj3haO07gOURbCyGB`)
 .then((res) => {
   console.log('this is data from API: ', res);
 })
 .catch((err) => {
   console.log('this is an error: ', err);
 })
}, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
