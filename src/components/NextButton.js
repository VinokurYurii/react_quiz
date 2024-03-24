export function NextButton({dispatch, answer, numQuestions, index}) {
  if (answer === null) return;

  if (index + 1 < numQuestions) return (
    <button className="btn btn-ui" onClick={() => dispatch({type: "nextQuestion"})}>
      Next
    </button>
  );

  return (
    <button className="btn btn-ui" onClick={() => dispatch({type: "finish"})}>
      Finish
    </button>
  );
}
