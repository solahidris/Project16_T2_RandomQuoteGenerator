import React from "react";

const AppTitle = () => {
  return (
    <div className="flex mx-2 py-5 justify-center">
      <label className="flex justify-center text-white italic font-bold text-2xl mr-2">
        Random
      </label>
      <label className="flex justify-center text-sky-400 italic font-bold text-2xl mr-2">
        "Funny"
      </label>
      <label className="flex justify-center text-white italic font-bold text-2xl">
        Quote Generator
      </label>
    </div>
  );
};

export default AppTitle;