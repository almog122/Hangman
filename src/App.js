import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import { useState } from "react";
import "./App.css";

function App() {
  const SCORE_STEP = 5;

  const generateLetterStatuses = function () {
    let letterStatus = {};
    for (let i = 65; i < 91; i++) {
      letterStatus[String.fromCharCode(i)] = false;
    }
    return letterStatus;
  };

  const [letterStatus, setLetterStatus] = useState(generateLetterStatuses());

  const solution = {
    word: "CALM",
    hint: "your ideal mood when coding",
  };

  const [score, setScore] = useState({
    points: 100,
    colorClass: `high-score`
  });

  const wordLettersArr = solution.word.split("");

  const selectLetter = function (letter) {
    if(!letterStatus[letter]){
      updateScore(letter)
      const newLetterStatus = { ...letterStatus };
      newLetterStatus[letter] = true;
      setLetterStatus(newLetterStatus);
    }
  };

  const updateScore = function (letter) {
    const isLetterInWord = wordLettersArr.findIndex(l => l === letter);
    let newScorePoints;

    if (isLetterInWord >= 0) {
      newScorePoints = score.points + SCORE_STEP
      const newScore = {
        points: newScorePoints,
        colorClass: updateScoreColor(newScorePoints)
      }
      setScore(newScore);

    } else {
      newScorePoints = score.points - SCORE_STEP
      const newScore = {
        points: newScorePoints,
        colorClass: updateScoreColor(newScorePoints)
      }
      setScore(newScore);
    }
  };

  const updateScoreColor = function (points) {
    if(points > 80){
      return 'high-score'
    }

    if(points <= 80 && points >=50){
      return 'medium-score'
    }

    return 'low-score'
  }
  

  // const generateRandomWord = async function () {
  //   const word = await $.get('https://random-word-api.herokuapp.com/worw')
  //   return
  // }

  return (
    <div>
      <Score score={score} key={"score"} />
      <Solution
        letterStatus={letterStatus}
        solution={solution}
        key={"solution"}
      />

      <Letters
        letterStatus={letterStatus}
        selectLetter={selectLetter}
        key={"letters"}
      />
    </div>
  );
}

export default App;
