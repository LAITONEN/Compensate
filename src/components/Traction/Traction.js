import React from 'react';
import styles from './Traction.module.scss'
import instagramImage from '../../assets/instagram-mockup.png'

const Traction = (props) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.content}>
        <img className={styles.instagramImage} src={instagramImage} alt="" />
        <div className={styles.metricsWrapper}>
          <div className={styles.title}>Gaining traction</div>
          <div className={styles.metrics}>
            <div className={styles.metricCircle}>
              <div className={styles.data}>13K</div>
              <div className={styles.domain}>followers across all social media platforms</div>
            </div>
            <div className={styles.metricCircle}>
              <div className={styles.data}>53%</div>
              <div className={styles.domain}>open rate for our newsletter</div>
            </div>
            <div className={styles.metricCircle}>
              <div className={styles.data}>1.7M</div>
              <div className={styles.domain}>reach on Twitter</div>
            </div>
            <div className={styles.metricCircle}>
              <div className={styles.data}>119K</div>
              <div className={styles.domain}>video views</div>
            </div>
          </div>
        </div>
      </div>
      <img className={styles.instagramImageMobile} src={instagramImage} alt="" />
    </div>
  );
}

export default Traction;
