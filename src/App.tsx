import { useState } from "react";
import Die from "./Die";

const App = () => {
  const [value, setValue] = useState(0);

  const handleRoll = (newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <h1>Die Value: {value}</h1>
      <Die onRoll={handleRoll} />
    </div>
  );
};

export default App;