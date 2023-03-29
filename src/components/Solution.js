import Letter from "./Letter";

export default function Solution(props) {

    const wordLettersArr = props.solution.word.split('')

    const letterClicked = () => alert('No peeking')

    const hiddenLetter = function(letter){
        if(props.letterStatus[letter]){
            return {letter: letter, key: letter}
        }else{
            return {letter: '_', key: `_${letter}`}
        }
    }

    return (
        <div>
            <div> Word : {wordLettersArr.map(letter => <Letter letter={hiddenLetter(letter).letter} key={hiddenLetter(letter).key} className={'word'} selectLetter={letterClicked}/>)}</div>
            <div> Hint : {props.solution.hint}  </div> 
        </div>
    );

}