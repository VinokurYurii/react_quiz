import {Option} from "./Option";

export function Question({question, dispatch, answer}) {
  return (
    <div>
      <h4>{question.question}</h4>

      <div className="options">
        {question.options.map((option, index) =>
          <Option
            key={option}
            dispatch={dispatch}
            index={index}
            answer={answer}
            correctOption={question.correctOption}
          >
            {option}
          </Option>
        )}
      </div>
    </div>
  );
}