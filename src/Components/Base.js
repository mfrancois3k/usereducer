import { useReducer } from "react";
import reducer from "../MainReducers/reducer";

const initialState = 0;

const Base = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function IncrementValue(value) {
    dispatch({ type: "ADD", payload: value });
  }

  function DecrementValue(value) {
    dispatch({ type: "SUBTRACT", payload: value });
  }

  return (
    <div>
      <h1>This is the Base Page</h1>
      <h1>{state}</h1>
      <button onClick={() => IncrementValue(1)}>Increase</button>

      <button onClick={() => DecrementValue(1)}>Decrease</button>
    </div>
  );
};

export default Base;
