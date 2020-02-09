import React from 'react';
import styles from './PromiseVision.module.scss'

const promise = 'Compensate partners with leading companies and organizations, using 100% of the compensation payments for the most effective and sustainable ways to capture carbon from the atmosphere, enabling a carbon negative life.'
const vision = 'Everything Compensate does contributes to reducing the amount of carbon dioxide in the atmosphere. Together, we can create a carbon negative future.'

const PromiseVision = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.promiseWrapper}>
          <div className={styles.title}>The promise</div>
          <div className={styles.text}>{promise}</div>
        </div>
        <div className={styles.visionWrapper}>
          <div className={styles.title}>Vision</div>
          <div className={styles.text}>{vision}</div>
        </div>
      </div>
    </div>
  );
}

export default PromiseVision;
