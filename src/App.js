import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";

function App() {

  const [quoteDisplay, updateQuoteDisplay] = useState("quoteDisplay Initial State");
  const apiKey = process.env.REACT_APP_APININJAS_API_KEY;

  return (
    <div className="bg-gradient-to-t from-gray-900 to-gray-600 h-screen">

      <div className="flex justify-center py-6">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      
      <div className="text-center mx-[18%] font-mono text-xs text-white">
        <p className="font-bold pb-4">Random Quote Generator</p>
        <p>Build a random quote generator app in React where the user can see randomly generated quotes through external API and generates a new quote the button is clicked.</p>
      </div>

      <div className="mx-[22%] font-mono text-xs text-white mt-5">
        <p className="text-center italic font-bold">steps</p>
        <p>1- make title on top for this project✅</p>
        <p>2- make quote display label✅</p>
        <p>3- make button to create quote✅</p>
        <p>4- state for quote. initial "" string✅</p>
        <p>5- find api to fetch</p>
        <p>6- learn axios fetch</p>
        <p>7- fetch api and store json</p>
        <p>8- connect api with label</p>
        <p>-----------------------------------</p>
      </div>

        {/* { Title } */}
      <div>
          <label className="flex justify-center text-sky-300 font-bold text-3xl mx-2 py-5">Random Quote Generator</label>
      </div>

        {/* { Display Label } */}
      <div className="">
        <label className="flex justify-center py-5 mx-20 bg-gradient-to-r from-slate-700 to-gray-500 rounded-lg outline outline-slate-500/80 outline-2">{quoteDisplay}</label>
      </div>

        {/* { Button } */}
      <div className="flex justify-center">
        <button className="mt-[3rem] px-4 py-3 bg-blue-500 text-white rounded-md text-sm">Generate New Quote</button>
      </div>

      <a target="_blank" href="https://www.google.com/search?q=quote+api&oq=quote+api&aqs=chrome..69i57j69i59j69i61.2505j0j7&sourceid=chrome&ie=UTF-8">Click here for API List</a>
      <p>use API NINJAS</p>
    </div>
  );
}

export default App;
