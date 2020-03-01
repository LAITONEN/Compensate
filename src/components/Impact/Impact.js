import React from 'react';
import styles from './Impact.module.scss'

const Impact = (props) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.title}>Impact</div>
      <div className={styles.subtitle}>In 9 months here is what we've achieved</div>
      <div className={styles.metricsWrapper}>
        <div className={styles.metricSquare}>
          <div className={styles.metricWrapper}>
            <div className={styles.data}>63K</div>
            <div className={styles.domain}>individuals have measured their carbon footprint</div>
          </div>
        </div>
        <div className={styles.metricSquare}>
          <div className={styles.metricWrapper}>
            <div className={styles.data}>513 540 €</div>
            <div className={styles.domain}>in compensation payments from subscriptions and through business partners towards carbon capture</div>
          </div>
        </div>
        <div className={styles.metricSquare}>
          <div className={styles.metricWrapper}>
            <div className={styles.data}>1 512 225</div>
            <div className={styles.domain}>trees planted</div>
          </div>
        </div>
        <div className={styles.metricSquare}>
          <div className={styles.metricWrapper}>
            <div className={styles.data}>870</div>
            <div className={styles.domain}>football fields of forest preserved</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impact;
