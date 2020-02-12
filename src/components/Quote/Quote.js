import React from 'react';
import styles from './Quote.module.scss'

const quote = '“I had forgotten to do my part. That’s now taken care of:​ ​compensate.com​”'

const Quote = (props) => {
  return (
    <div>
      <div>
        <div>{quote}</div>
        <div>Facebook user</div>
        <button>See it for yourself</button>
      </div>
      <img src={'../../assets/monitor.png'} alt="" />
    </div>
  );
}

export default Quote;
