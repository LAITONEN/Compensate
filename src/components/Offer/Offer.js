import React from 'react';
import styles from './Offer.module.scss'
import { ReactComponent as CompensateBlackLogo } from '../../assets/compensate-logo-black.svg';
import { ReactComponent as PostiBlackLogo } from '../../assets/posti-logo-black.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const offerForIndividuals = 'As a monthly subscription service, the Compensate.com calculator guides the individual through their lifestyle choices, calculates their carbon footprint and enables overcompensation for their emissions.'
const offerForBusinesses = 'By integrating compensation for products and services into our everyday transactions, Compensate and its partners make every purchase decision a climate action.'
const postiText = 'Posti offers its customers the possibility to offset the carbon footprint of packages sent from one individual to another. You pay for your package the same way you would otherwise, and can opt-in to compensate at checkout.'

const Offer = (props) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.forIndividualsWrapper}>
        <div className={styles.mainTitle}>Here is what Compensate offers</div>
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <div className={styles.title}>For individuals</div>
            <div className={styles.offer}>{offerForIndividuals}</div>
          </div>
        </div>
        <div className={styles.mobileCollectionImage} />
      </div>
      <div className={styles.forBusinessWrapper}>
        <div className={styles.titleWrapper}>
          <div className={styles.title}>For businesses</div>
          <div className={styles.offer}>{offerForBusinesses}</div>
        </div>
        <div className={styles.contentWrapper}>
          <div className={styles.twoGirlsImage} />
          <div className={styles.contentTextWrapper}>
            <div className={styles.logosWrapper}>
              <PostiBlackLogo />
              <CompensateBlackLogo />
            </div>
            <div className={styles.contentInfoWrapper}>
              <div className={styles.contentTitle}>Posti and Compensate Partnership</div>
              <div className={styles.contentDescription}>{postiText}</div>
              <button>Read More</button>
            </div>
          </div>
        </div>
        <div className={styles.indexWrapper}>
          <div className={styles.index}>1 / 3</div>
          <FontAwesomeIcon className={styles.arrow} icon={'arrow-right'} />
        </div>
      </div>
    </div>
  );
}

export default Offer;
