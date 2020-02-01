import React from 'react';
import mainImage from '../assets/Main.png'
import styles from './Main.module.scss'

const Main = (props) => {
  return (
    <div>
      <img className={styles.mainImage} src={mainImage} alt={'Who is responsible for the atmosphere?'} />
    </div>
  );
}

export default Main;
