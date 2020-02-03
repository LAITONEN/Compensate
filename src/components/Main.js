import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './Main.module.scss'

const Main = (props) => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
      </div>
      <div className={styles.content}>
        <div className={styles.title}>Who is responsible for the atmosphere?</div>
        <div className={styles.subtitle}>Compensate – empowering everyone to take responsibility and action for the climate.</div>
        <button className={styles.calculateButton}>Calculate and compensate your carbon footprint</button>
      </div>
      <div className={styles.footer}>
        <div className={styles.text}>See how it works</div>
        <FontAwesomeIcon className={styles.arrow} icon={'arrow-down'} />
      </div>
    </div>
  );
}

export default Main;
