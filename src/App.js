import Header from "./Header";
import Main from "./Main";
import {useEffect, useReducer} from "react";
import error from "./Error";


const initialState = {
  questions: [],
  status: "loading", // loading, error, ready, active, finished
}
function reducer(state, action) {
  switch (action.type) {
    case "addQuestions":
      return {
        ...state,
        questions: action.payload,
        status: "ready"
      };
    case "dataFailed":
      return {
        ...state,
        status: "error"
      }
    default:
      throw new Error("Actions unknown");
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then(data => dispatch({type: "addQuestions", payload: data}))
      .catch(err => dispatch({type: "dataFailed"}));
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        <p>1/15</p>
        <p>Question?</p>
      </Main>
    </div>
  );
}

export default App;
