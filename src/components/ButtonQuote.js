import React from "react";

const ButtonQuote = ({ newQuoteButtonHandler }) => {

  return (
    <div className="flex justify-center pb-[10rem]">
      <button
        onClick={newQuoteButtonHandler}
        className="mt-[3rem] px-4 py-3 bg-blue-500 text-white rounded-md text-sm drop-shadow-lg"
      >
        Generate New Quote
      </button>
    </div>
  );
};

export default ButtonQuote;
