import React from "react";

const DisplayLabel = (quoteDisplay) => {
  return (
    <div className="pt-[4rem]">
      <label className="flex justify-center py-5 mx-20 lg:mx-[25rem] bg-gradient-to-r from-slate-700 to-gray-500 rounded-lg text-gray-200 outline outline-slate-500/80 outline-2 drop-shadow-lg">
        <p className="text-lg mx-6 lg:mx-10 tracking-wide text-center">
          "{quoteDisplay ? quoteDisplay.quote : "click the button"}"
        </p>
      </label>
    </div>
  );
};

export default DisplayLabel;