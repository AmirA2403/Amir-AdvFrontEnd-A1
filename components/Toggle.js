import { useState } from 'react';
import styles from '../styles/Toggle.module.css';

// Toggle component that shows or hides content based on state
export default function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={styles['toggle-container']}>
      <h2>Toggle Component</h2>
      {isVisible ? (
        <div className={styles['visible-content']}>
          <p>This content is visible.</p>
        </div>
      ) : (
        <p>The content is now hidden.</p>
      )}
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>
    </div>
  );
}
