import React from 'react';
import styles from './Steps.module.scss'

const startingPoint = 'We know that there is too much CO2 in the atmosphere. Now we need radical cuts in CO2 emissions and to start removing carbon from the atmosphere. This must happen on a systematic level, and can already be done through carbon capture. But for the individual, it’s been difficult to access carbon capture tools and understand the actions necessary.'
const strategy = 'Compensate provides the tools and knowledge to individuals to take responsibility for their emissions. Compensate makes carbon capture accessible and convenient to everyone, while also ensuring this is done transparently and achieves true climate impact.'
const solution = 'Compensate sets a price for the damage we cause, makes visible the climate impact of the goods and services we use, and empowers everyone to remove more CO2 from the atmosphere than our activities create. Compensate offers a monthly subscription service for individuals and together with forward-looking businesses, integrates compensation into the purchase flow of everyday actions. Combating climate change becomes a natural part of our everyday lives.'
const how = 'Compensate is a nonprofit foundation that channels 100% of compensation payments to certified, high-quality carbon capture projects. Compensate is constantly searching for the most effective and sustainable ways to compensate, with the guidance of leading climate scientists. With our built-in overcompensation, more carbon dioxide is always removed from the atmosphere than what a product, service or action creates.'
const quote = '“I immediately began compensating monthly. This is exactly how easy it should be.”'

const Steps = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.stepsWrapper}>
        <div className={styles.startingPointWrapper}>
          <div className={styles.stepNumber}>1</div>
          <div className={styles.title}>Starting point</div>
          <div className={styles.text}>{startingPoint}</div>
        </div>
        <div className={styles.strategyWrapper}>
          <div className={styles.stepNumber}>2</div>
          <div className={styles.title}>Strategy</div>
          <div className={styles.text}>{strategy}</div>
        </div>
        <div className={styles.solutionWrapper}>
          <div className={styles.stepNumber}>3</div>
          <div className={styles.title}>Solution</div>
          <div className={styles.text}>{solution}</div>
        </div>
        <div className={styles.howWrapper}>
          <div className={styles.stepNumber}>4</div>
          <div className={styles.title}>How</div>
          <div className={styles.text}>{how}</div>
        </div>
      </div>
      <div className={styles.quoteDiv}>
        <div className={styles.quote}>{quote}</div>
        <div className={styles.quotee}>Facebook user</div>
      </div>
    </div>
  );
}

export default Steps;
