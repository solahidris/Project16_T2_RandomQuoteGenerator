import "./App.css";
import React, { useState } from "react";
import Workflow from "./components/Workflow";
import axios from "axios";

import logo from "./assets/logo.svg";
import mainpic from "./assets/mainpic.jpg";
import AppTitle from "./components/AppTitle";
import DisplayLabel from "./components/DisplayLabel";
import ButtonQuote from "./components/ButtonQuote";

function App() {
  const [quoteDisplay, updateQuoteDisplay] = useState(null);

  const axiosApiCall = () => {
    const category = "funny";
    const apiUrl = "https://api.api-ninjas.com/v1/quotes";
    const apiKey = process.env.REACT_APP_APININJAS_API_KEY;

    axios
      .get(apiUrl, {
        params: {
          category: category,
        },
        headers: {
          "X-Api-Key": apiKey,
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        const [data] = response.data; // Destructure the object from the array
        const { author, category, quote } = data; // Destructure the properties
        const quoteData = { author, category, quote }; // Store the properties in an object
        updateQuoteDisplay(quoteData); // Store the quoteData object in the state
        console.log(response.data);
      })
      .catch(function (error) {
        console.error("Error: ", error.response.data);
      });
  };

  const newQuoteButtonHandler = () => {
    axiosApiCall();
  };

  return (
    <div className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-600 min-h-[100vh]">
      <div className=""><img src={logo} className="App-logo" alt="logo" /></div>
      <div className="flex justify-center"><img src={mainpic} className="w-[50%] h-[100%] lg:w-[15%] lg:h-[100%] aspect-square rounded-3xl"/></div>
      {/* <Workflow /> */}
      <AppTitle />
      <p className="text-white text-xs text-center">External API Quote Fetch via Axios</p>
      <DisplayLabel quote={quoteDisplay ? quoteDisplay.quote : "click the button"}/>
      <ButtonQuote newQuoteButtonHandler={newQuoteButtonHandler} />
    </div>
  );
}

export default App;
