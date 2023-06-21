import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { useState } from "react";
import Workflow from "./components/Workflow";

function App() {

  const [quoteDisplay, updateQuoteDisplay] = useState("quoteDisplay Initial State");
  const apiKey = process.env.REACT_APP_APININJAS_API_KEY;

  const newQuoteButtonHandler = () => {
    updateQuoteDisplay("get a quote from api response");
  };

  return (
    <div className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-600 h-screen">

      <Workflow />

        {/* { Title } */}
      <div>
          <label className="flex justify-center text-sky-400 italic font-bold text-3xl mx-2 py-5 underline underline-offset-4">Random Quote Generator</label>
      </div>

        {/* { Display Label } */}
      <div className="">
        <label className="flex justify-center py-5 mx-20 lg:mx-[25rem] bg-gradient-to-r from-slate-700 to-gray-500 rounded-lg text-gray-200 outline outline-slate-500/80 outline-2 drop-shadow-lg">{quoteDisplay}</label>
      </div>

        {/* { Button } */}
      <div className="flex justify-center">
        <button onClick={newQuoteButtonHandler} className="mt-[3rem] px-4 py-3 bg-blue-500 text-white rounded-md text-sm drop-shadow-lg">Generate New Quote</button>
      </div>

      <a target="_blank" href="https://www.google.com/search?q=quote+api&oq=quote+api&aqs=chrome..69i57j69i59j69i61.2505j0j7&sourceid=chrome&ie=UTF-8">Click here for API List</a>
      <p>use API NINJAS</p>
    </div>
  );
}

export default App;
