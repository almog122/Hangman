import Letter from "./Letter";

export default function Solution(props) {

    const wordLettersArr = props.solution.word.split('')

    const displayLetter = function(letter){
        if(props.letterStatus[letter]){
            return <Letter letter={letter} key={letter} className={'word'}/>
        }else{
            return <Letter letter={'_'} className={'word'}/>
        }
    }

    return (
        <div>
            <div> Word : {wordLettersArr.map(letter => displayLetter(letter))}</div>
            <div> Hint : {props.solution.hint}  </div> 
        </div>
    );
  }