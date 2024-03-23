import {Option} from "./Option";

export function Question({question}) {
  return (
    <div>
      <h4>{question.question}</h4>

      <div className="options">
        {question.options.map((option) =>
          <Option key={option}>
            {option}
          </Option>
        )}
      </div>
    </div>
  );
}