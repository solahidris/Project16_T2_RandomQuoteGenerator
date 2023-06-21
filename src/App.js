import "./App.css";
import React from "react";
import { useState } from "react";
import Workflow from "./components/Workflow";
import axios from 'axios';

function App() {

  const [quoteDisplay, updateQuoteDisplay] = useState("quoteDisplay Initial State");
  

  const newQuoteButtonHandler = () => {
    updateQuoteDisplay("get a quote from api response");
  };

  const axiosApiCall = () => {
    const category = 'happiness';
    const apiUrl = 'https://api.api-ninjas.com/v1/quotes';
    const apiKey = process.env.REACT_APP_APININJAS_API_KEY;

    axios
      .get(apiUrl, {
        params: {
          category: category,
        },
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json',
        },
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error('Error: ', error.response.data);
      });
  }

  useEffect(() => {
    axiosApiCall(); // Call the axiosApiCall function
  }, []);

  return (
    <div className="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-600 min-h-[100vh]">

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

      <p className="text-white py-2">HTTP GET - Returns one (or more) random quotes.</p>
      <p className="text-white py-2">category (optional) - category to limit results to. Possible values are: funny</p>
      <p className="text-white py-2">Headers - X-Api-Key (required) - API Key associated with your account.</p>
      <p className="text-white py-2">Sample Request URLLive Demo!</p>
      <p className="text-white py-2">https://api.api-ninjas.com/v1/quotes?category=funny</p>
      <a target="_blank" href="https://api-ninjas.com/api/quotes">Click here for API List</a>
      <p>use API NINJAS</p>

    </div>
  );
}

export default App;
