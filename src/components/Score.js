
export default function Score(props) {
    return (
        <div className={props.score.colorClass}>  {props.score.points}  </div> 
    );
  }