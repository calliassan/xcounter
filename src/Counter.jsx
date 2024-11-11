import { useState } from "react";
import styles from "./counter.module.css";

export function Counter() {
  const [count, setcount] = useState(0);

  const handleincrement = () => {
    setcount(count + 1);
  };
  const handledecrement = () => {
    setcount(count - 1);
  };
  return (
    <div className={styles.frame}>
      <h1>Counter App</h1>
      {`Count: ${count}`}
      <button onClick={handleincrement}>Increment</button>
      <button onClick={handledecrement}>Decrement</button>
    </div>
  );
}
