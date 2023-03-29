export default function EndGame(props) {

    return (
        <div> {props.isGameWon ? 
        <h1> Congratulations !!! <div>Score : {props.points}</div></h1>: 
        <h1> The secret word was : {props.word} </h1>}
        <button onClick={props.restartGame}>Restart game</button>
        </div> 
    );
}