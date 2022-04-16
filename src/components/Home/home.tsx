import React, { useState } from 'react';
import styles from './home.css';

const home = () => {
  const [increment, setIncrement] = useState(0);
  return (
    <>
      {increment}
      <button
        type="button"
        className={styles.root}
        onClick={() => setIncrement(increment + 1)}
      >
        Increment
      </button>
    </>
  );
};

export default home;
