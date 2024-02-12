export default function Game({question, onClickVariant, step, lengthQuestions}) {
  
    const percentage = Math.round(step / lengthQuestions * 100);
    
    return (
      <>
        <div className="progress">
          <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
        </div>
        <h1>{question.title}</h1>
          <ul>
            {
              question.variants.map((text, index) => (
                  <li key={index} onClick={() => onClickVariant(index)}>{text}</li>
              ))
            }
        </ul>
      </>
    );
}