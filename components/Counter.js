import { useState } from 'react';
import styles from '../styles/Counter.module.css';
// Counter component to manage a simple number counter
export default function Counter() {
    // State to keep track of the count value
    const [count, setCount] = useState(0);

  return (
    <div className={styles['counter-container']}>
      <h2>Counter Component</h2>
      <p className={styles.count}>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}
