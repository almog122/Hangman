import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import EndGame from "./components/EndGame";
import { useState } from "react";
import "./App.css";

function App() {
  const STARTING_POINTS = 100;
  const SCORE_STEP = 20;

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
    points: STARTING_POINTS,
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
    const isLetterInWord = wordLettersArr.find(l => l === letter);
    let newScorePoints;

    if (isLetterInWord !== undefined) {
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

  const isGameWon = function(){
    let isUserWon = true;
    for(let letter of wordLettersArr) {
      isUserWon = isUserWon && letterStatus[letter]
    }

    return isUserWon
  }

  const isGameLost = function(){
    if(score.points <= 0){
      return true
    }

    return false
  }

  const isGameOver = function(){
    if(isGameWon() || isGameLost()){
      return true
    }

    return false
  }

  const restartGame = function(){
    setLetterStatus(generateLetterStatuses())
    const newScore = {
      points: STARTING_POINTS,
      colorClass: updateScoreColor(STARTING_POINTS)
    }
    setScore(newScore);
  }
  
  return (
    <div>
      {isGameOver() ? 
      <div> 
        <EndGame isGameWon={isGameWon()} word={solution.word} points={score.points} restartGame={restartGame}/>
      </div> :
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
      </div>}
    </div>
  );
}

export default App;
