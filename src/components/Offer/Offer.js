import React from 'react';
import styles from './Offer.module.scss'
import { ReactComponent as CompensateBlackLogo } from '../../assets/compensate-logo-black.svg';
import { ReactComponent as PostiBlackLogo } from '../../assets/posti-logo-black.svg';

const offerForIndividuals = 'As a monthly subscription service, the Compensate.com calculator guides the individual through their lifestyle choices, calculates their carbon footprint and enables overcompensation for their emissions.'
const offerForBusinesses = 'By integrating compensation for products and services into our everyday transactions, Compensate and its partners make every purchase decision a climate action.'
const postiText = 'Posti offers its customers the possibility to offset the carbon footprint of packages sent from one individual to another. You pay for your package the same way you would otherwise, and can opt-in to compensate at checkout.'

const Offer = (props) => {

  return (
    <div className={styles.main}>
      <div>Here is what Compensate offers</div>
      <div className={styles.forIndividuals}>
        <div>
          <div>For individuals</div>
          <div>{offerForIndividuals}</div>
        </div>
        <img src={'../../assets/mobile-collection.jpg'} alt="" />
      </div>
      <div className={styles.forBusiness}>
        <div>
          <div>For business</div>
          <div>{offerForBusinesses}</div>
        </div>
        <div>
          <img src={'../../assets/two-girls.jpg'} alt="" />
          <div>
            <div>
              <PostiBlackLogo />
              <CompensateBlackLogo />
            </div>
            <div>Posti and Compensate Partnership</div>
            <div>{postiText}</div>
            <button>Read More</button>
          </div>
        </div>
      </div>
      <div>1/3</div>
    </div>
  );
}

export default Offer;
