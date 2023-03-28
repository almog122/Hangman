import Letter from "./Letter";

export default function Letters(props) {

    const letters = Object.keys(props.letterStatus)

    const displayLetter = function(letter){
        if(props.letterStatus[letter]){
            return <Letter letter={letter} key={letter} selectLetter={props.selectLetter} className={'selected'}/>
        }else{
            return <Letter letter={letter} key={letter} selectLetter={props.selectLetter} className={'notSelected'}/>
        }
    }

    return (
      <div>
        <div>Available Letters :</div>
        <div>{letters.map(letter => displayLetter(letter))}</div>
      </div>
    );
  }