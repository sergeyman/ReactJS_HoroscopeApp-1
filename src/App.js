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


Deploying a React App* to GitHub Pages
* created using create-react-app
https://github.com/gitname/react-gh-pages
1. Create an empty repository on GitHub
2. Create a React app
  $ npx create-react-app my-app --template typescript
  $ cd my-app
3. Install the gh-pages npm package
  $ npm install gh-pages --save-dev
4. 4. Add a homepage property to the package.json file
  {
    "name": "my-app",
    "version": "0.1.0",
  + "homepage": "https://gitname.github.io/react-gh-pages",
  + "homepage": "https://sergeyman.github.io/react-gh-pages",
    "private": true,
    ...
5. Add deployment scripts to the package.json file
  "scripts": {
  +   "predeploy": "npm run build",
  +   "deploy": "gh-pages -d build",
      "start": "react-scripts start",
      "build": "react-scripts build",
      ...
6. Add a "remote" that points to the GitHub repository
    $ git remote add origin https://github.com/{username}/{repo-name}.git
    $ git remote add origin https://github.com/gitname/react-gh-pages.git
    $ git remote add origin https://github.com/sergeyman/react-gh-pages.git 
    $ git remote add origin https://github.com/sergeyman/ReactJS_HoroscopeApp-1.git
7. Push the React app to the GitHub repository
    $ npm run deploy
8. Configure GitHub Pages
At this point, the GitHub repository contains a branch named gh-pages, 
which contains the files that make up the distributable version of the React app. 
1. Navigate to the GitHub Pages settings page
   i. In your web browser, navigate to the GitHub repository
  ii. Above the code browser, click on the tab labeled "Settings"
 iii. In the sidebar, in the "Code and automation" section, click on "Pages"
2. Configure the "Build and deployment" settings like this:
   i. Source: Deploy from a branch
  ii. Branch:
    +Branch: gh-pages     // !!!
    +Folder: / (root)
    +Click on the "Save" button
9. (Optional) Store the React app's source code on GitHub


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
