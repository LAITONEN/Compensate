import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// create-react-app 2.0
import { ReactComponent as CompensateWhiteLogo } from '../../assets/compensate-logo-white.svg';
import { ReactComponent as CompensateBlackLogo } from '../../assets/compensate-logo-black.svg';
import styles from './Main.module.scss'

const MainNavigation = () => (
  <>
    <a href={'/impact'} className={styles.navigationItem}>Impact</a>
    <a href={'/for-business'} className={styles.navigationItem}>For Business</a>
    <a href={'/about-us'} className={styles.navigationItem}>About us</a>
    <a href={'/news'} className={styles.navigationItem}>News</a>
    <a href={'/contact'} className={styles.navigationItem}>Contact</a>
    <a href={'/careers'} className={styles.navigationItem}>Careers</a>
  </>
)

const ProfileNavigation = () => (
  <>
    <div className={styles.navigationItem}>Suomeksi</div>
    <a href={'/login'} className={styles.navigationItem}>Login</a>
  </>
)

const Main = (props) => {
  const [navigationModalVisible, toggleNavigationModalVisible] = useState(false);

  console.log(navigationModalVisible)

  const renderNavigationModal = () => toggleNavigationModalVisible(!navigationModalVisible)

  return (
    <>
      <div className={styles.mainWrapper}>
        <div className={styles.navigationWrapper}>
          <div className={styles.logoWrapper}>
            <CompensateWhiteLogo className={styles.compensateLogo} />
          </div>
          <div className={styles.mainNavigation}>
            <MainNavigation />
          </div>
          <div className={styles.profileNavigation}>
            <ProfileNavigation />
          </div>
          <div className={styles.navigationBarsWrapper}>
            <button className={styles.iconButton} onClick={renderNavigationModal}>
              <FontAwesomeIcon className={styles.navigationBars} icon={'bars'} />
            </button>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>Who is responsible for the atmosphere?</div>
          <div className={styles.bottomContentWrapper}>
            <div className={styles.subtitle}>Compensate – empowering everyone to take responsibility and action for the climate.</div>
            <button className={styles.calculateButton}>Calculate and compensate your carbon footprint</button>
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.text}>See how it works</div>
          <FontAwesomeIcon className={styles.arrow} icon={'arrow-down'} />
        </div>
      </div>
      {
        navigationModalVisible && <div className={styles.navigationModalWrapper}>
          <div className={styles.modalHeaderWrapper}>
            <div className={styles.logoWrapper}>
              <CompensateBlackLogo className={styles.compensateLogo} />
            </div>
            <div>
              <button className={styles.iconButton} onClick={renderNavigationModal}>
                <FontAwesomeIcon className={styles.cross} icon={'times'} />
              </button>
            </div>
          </div>
          <div className={styles.mainModalNavigation}>
            <div className={styles.navigationItem}>Front Page</div>
            <MainNavigation />
          </div>
          <hr />
          <div className={styles.profileModalNavigation}>
            <ProfileNavigation />
          </div>

        </div>
      }
    </>
  );
}

export default Main;
