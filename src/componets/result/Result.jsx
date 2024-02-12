export default function Result({correct, lengthQuestions, openGame}) {

    return (
      <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt=""/>
        <h2>Вы отгадали {correct} ответа из {lengthQuestions}</h2>
        <button onClick={() => openGame()}>Попробовать снова</button>
      </div>
    );
}