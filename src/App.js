//import "./styles.css";
import "./App.css";
import { React, useState } from "react";
import { SelectSign } from "./components/SelectSign";
import { SelectTimeframe } from "./components/SelectTimeframe";
import { Horoscope } from "./components/Horoscope";

export default function App() {
  
  const [selectedSign, setSelectedSign] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState(null);
  const restart = () => {
    setSelectedSign(null);
    setSelectedTimeframe(null);
  }

  return (
    <div className="App">
      <h1>The Horoscope App</h1>
      {/* {selectedSign} */}
      {/* // Only show SelectSign if we have selectedSign state is not set yet */}
      {!selectedSign && (
        <SelectSign onSignSelectded={setSelectedSign} />
      )}
      {/* // Only show this one if we have selectedSign */}
      {selectedSign && !selectedTimeframe && (
        <SelectTimeframe onTimeframeSelected={setSelectedTimeframe} />    
      )}  
      {selectedSign && selectedTimeframe && (
        <Horoscope sign={selectedSign} timeframe={selectedTimeframe} />
      )}
      <button onClick={restart}>Restart</button>
    </div>
  );
}

// /*
// Live Coding a Horoscope App using React
// https://www.youtube.com/watch?v=8r9ZExFBi6U
// https://github.com/codyseibert/youtube/tree/master/react-horoscope

// http://sandipbgt.com/theastrologer/api/
// http://sandipbgt.com/theastrologer/api/sunsigns/
// http://sandipbgt.com/theastrologer/api/horoscope/{sunsign}/yesterday || tomorrow || today
// http://sandipbgt.com/theastrologer/api/horoscope/taurus/yesterday
// http://sandipbgt.com/theastrologer/api/


// Alternatives:
// https://rapidapi.com/blog/horoscope-api-with-python-php-ruby-javascript-examples/
// https://www.freecodecamp.org/news/python-project-build-an-api-with-beautiful-soup-and-flask/

// fetch api (codesandbox)
// https://codesandbox.io/s/trusting-hopper-k5s52?file=/src/App.js
// https://codesandbox.io/s/x2n8e?file=/src/MartianPhotoFetcher.js:136-481
// https://codesandbox.io/s/fetch-api-example-4m3e5?file=/src/index.js:25-1316
// https://codesandbox.io/s/dvkcp?file=/src/index.js:284-327

/*
1) +Hook to fetch the api data (useState call)
2) +State to remember what sign (button) the user clicked on (useState call)
3) +State fof timeframe
4) Hacky way to get back to main page (Restart) without r.router


*/

// */

// *******************************************************************************************
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
