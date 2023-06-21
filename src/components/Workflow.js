import React from "react";

const Workflow = () => {
  return (
    <div>
      <div className="text-center mx-[18%] font-mono text-xs text-white">
        <p className="font-bold pb-4">Random Quote Generator</p>
        <p className="lg:mx-[8rem]">
          Build a random quote generator app in React where the user can see
          randomly generated quotes through external API (called using Axios)
          and generates a new quote the button is clicked.
        </p>
      </div>

      <div className="mx-[22%] lg:mx-[30%] font-mono text-xs text-white mt-5">
        <p className="text-center italic font-bold">steps</p>
        <p>1- make title on top for this project✅</p>
        <p>2- make quote display label✅</p>
        <p>3- make button to create quote✅</p>
        <p>4- state for quote. initial "" string✅</p>
        <p>5- find api to fetch✅</p>
        <p>6- learn axios fetch✅</p>
        <p>6.5- install axios✅</p>
        <p>7- fetch api and store json✅</p>
        <p>8- connect api with label✅</p>
        <p>-----------------------------------</p>
      </div>
    </div>
  );
};

export default Workflow;
