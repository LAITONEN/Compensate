import React from 'react';
import mainImage from '../assets/Main.png'
import './Main.scss`'

const Main = (props) => {
  return (
    <div>
      <img className={'main-image'} src={mainImage} alt={'Who is responsible for the atmosphere?'} />
    </div>
  );
}

export default Main;
