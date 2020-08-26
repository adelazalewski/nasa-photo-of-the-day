import React, { useState, useEffect } from "react";
import Header from "./components/header.js";
import Footer from "./components/footer";
import VideoPlayer from "./components/videoPayer";
import axios from "axios";
import "./App.css";
import Title from "./components/title.js";
//https://api.nasa.gov/planetary/apod
function App() {
const [data, setData] = useState();
const [count, setCount] =useState(0);
 useEffect(() => {
axios
 .get(`https://api.nasa.gov/planetary/apod?api_key=KHfBOCneFgtNxSmW61NFFecwj3haO07gOURbCyGB`)
 .then((res) => {
   console.log('this is data from API: ', res);
   setData(res.data);
   console.log(data);
 })
 .catch((err) => {
   console.log('this is an error: ', err);
 })
}, []);

const likeApp = () => {
  return setCount(count + 1);
};

  return (
    <div className="App">
      <Header likeApp={likeApp} numberOfLikes={count} />
      <VideoPlayer data={data} />
      <Footer />
    </div>
  );
}

export default App;

// app -header
//     -VideoPlayer - Title
//                  - Date
//                  - div
//                  - videodescription
//     - footer