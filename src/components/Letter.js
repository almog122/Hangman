
export default function Letter(props) {

    const clickOnLetter = () => props.selectLetter(props.letter)

    return (
        <span className={props.className} onClick={clickOnLetter}>  {props.letter}  </span> 
    );
}