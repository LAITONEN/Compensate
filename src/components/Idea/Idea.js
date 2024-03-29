import React from 'react';
import styles from './Idea.module.scss'

const description = 'Compensate empowers individuals to combat climate change and turn their everyday purchase decisions into climate action. Compensate makes visible the impact of our products, services and lifestyle choices, sets a price for it and enables everyone to take responsibility for their emissions. When we know more, we’re able to think twice and choose wisely. And that way, we can truly revolutionize our daily habits and build a sustainable future.'

const Idea = (props) => {

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.idea}>
        <div className={styles.title}>The idea of Compensate</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.videoWrapper}>
          <iframe className={styles.video} title="idea-of-compensate" src="https://player.vimeo.com/video/361360141?title=0&byline=0&portrait=0" width="640" height="360" frameBorder="0" allowfFullScreen />
        </div>
      </div>
    </div>
  );
}

export default Idea;
