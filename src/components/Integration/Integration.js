import React from 'react';
import styles from './Integration.module.scss'


const Integration = (props) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div>Compensate can be integrated into all kinds of products and services.</div>
        <div>With a recognizable trademark, we are creating a movement that scales globally.</div>
      </div>
      <img src={'../../assets/hotel-mockup.png'} alt="" />
    </div>
  );
}

export default Integration;
