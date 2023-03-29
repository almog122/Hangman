import Letter from "./Letter";

export default function Letters(props) {

    const letters = Object.keys(props.letterStatus)

    const letterClass = function(letter){
        if(props.letterStatus[letter]){
            return 'selected'
        }else{
            return 'notSelected'
        }
    }

    return (
      <div>
        <div>Available Letters :</div>
        <div>{letters.map(letter => <Letter letter={letter} key={letter} selectLetter={props.selectLetter} className={letterClass(letter)}/>)}</div>
      </div>
    );
  }