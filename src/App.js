import Score from "./components/Score";
import Solution from "./components/Solution";
import Letters from "./components/Letters";
import Letter from "./components/Letter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Score />
      <Solution />

      <Letters>
        <Letter></Letter>
        <Letter></Letter>
        
      </Letters>
    </div>
  );
}

export default App;
