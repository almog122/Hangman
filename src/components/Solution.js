import Letter from "./Letter";

export default function Solution(props) {

    const wordLettersArr = props.solution.word.split('')

    const letterClicked = () => alert('No peeking')

    const displayLetter = function(letter){
        if(props.letterStatus[letter]){
            return <Letter letter={letter} key={letter} className={'word'} selectLetter={letterClicked}/>
        }else{
            return <Letter letter={'_'} className={'word'} key={`_${letter}`} selectLetter={letterClicked}/>
        }
    }

    return (
        <div>
            <div> Word : {wordLettersArr.map(letter => displayLetter(letter))}</div>
            <div> Hint : {props.solution.hint}  </div> 
        </div>
    );
  }