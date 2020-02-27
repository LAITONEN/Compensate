import React from 'react';
import styles from './Integration.module.scss'


const Integration = (props) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.text}>
          <div className={styles.title}>Compensate can be integrated into all kinds of products and services.</div>
          <div className={styles.subtitle}>With a recognizable trademark, we are creating a movement that scales globally.</div>
        </div>
        <div className={styles.hotelAppImage} />
      </div>
    </div>
  );
}

export default Integration;
