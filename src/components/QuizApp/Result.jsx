export default function Result({quizLength, score, handleRestart}) {
  return(
    <div className="card">
      <h2>Result</h2>
      <p>You got {score}/{quizLength} questions correct.</p>
      <button onClick={handleRestart}>Restart</button>
    </div>
  );
};
