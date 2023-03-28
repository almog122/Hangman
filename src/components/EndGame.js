export default function EndGame(props) {

    return (
        <div> {props.isGameWon ? <h1> Congratulations !!! </h1> : <h1> The secret word was : {props.word} </h1>}</div> 
    );
}