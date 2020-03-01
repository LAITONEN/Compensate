import React from 'react';
import monitorImage from '../../assets/monitor.png';
import styles from './Quote.module.scss';

const quote = '“I had forgotten to do my part. That’s now taken care of:​ ​compensate.com​”'

const Quote = (props) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.quoteWrapper}>
        <div className={styles.quote}>{quote}</div>
        <div className={styles.userName}>Facebook user</div>
        <button>See it for yourself</button>
      </div>
      <img className={styles.monitorImage} src={monitorImage} alt="" />
    </div>
  );
}

export default Quote;
