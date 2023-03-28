import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
// import Letter from "./components/Letter";
import { useState } from "react"
import "./App.css";

function App() {

  const generateLetterStatuses = function () {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  };

  // const generateRandomWord = async function () { 
  //   const word = await $.get('https://random-word-api.herokuapp.com/worw')
  //   return
  // }

  const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());

  const [solution, setSolution] = useState({
    word: "CALM",
    hint: "your ideal mood when coding"
  })

  const [score , setScore ] = useState(100)

  return (
    <div>
      <Score score={score} key={'score'}/>
      <Solution letterStatus={letterStatus} solution={solution} key={'solution'}/>

      <Letters letterStatus={letterStatus} key={'letters'}/>
    </div>
  );
}

export default App;
