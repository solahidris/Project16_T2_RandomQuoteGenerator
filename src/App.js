import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="bg-gray-700 h-screen">

      <div className="flex justify-center py-6">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      
      <div className="text-center mx-[18%] font-mono text-xs text-white">
        <p className="font-bold pb-4">Random Quote Generator</p>
        <p>Build a random quote generator app in React where the user can see randomly generated quotes through external API and generates a new quote the button is clicked.</p>
      </div>

      <div className="mx-[22%] font-mono text-xs text-white mt-5">
        <p className="text-center italic font-bold">steps</p>
        <p>1- make title on top for this project</p>
        <p>2- make quote display label</p>
        <p>3- make button to create quote</p>
        <p>4- state for quote. initial "" string</p>
        <p>5- find api to fetch</p>
        <p>6- learn axios fetch</p>
        <p>7- fetch api and store json</p>
        <p>8- connect api with label</p>
        <p>-----------------------------------</p>
      </div>

      {/* { Title } */}
      <div>
        <p className=" text-center text-sky-300 font-bold text-3xl">Random Quote Generator</p>
      </div>

      {/* { Display Label } */}
      <div></div>


    </div>
  );
}

export default App;
