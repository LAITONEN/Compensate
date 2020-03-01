import React from 'react';
import styles from './Community.module.scss'
import socialMediaImage from '../../assets/media-social.png'
import twitterPostImage from '../../assets/twitter-post.png'

const paragraphOne = 'On April 24th 2019, Compensate was introduced to the world at the University of Helsinki. The Carbon negativity now! ​event brought together scientists, students, entrepreneurs, activists and otherindividuals interested in fighting climate change andwas streamed online.'
const paragraphTwo = 'Compensate made headlines in Helsingin Sanomat, Yle web and broadcast news, MTV3 broadcast shows, Kauppalehti, and various other national media outlets. The convenient and efficient Compensate tool was met with high enthusiasm and Compensate became a viral phenomenon: thousands of Finns measured their carbon footprints, social media filled with footprint results and businesses joined in the discussion eager to join the movement.'
const paragraphThree = 'The #WeCompensate family was born.'

const Community = (props) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.communityWrapper}>
        <div className={styles.textWrapper}>
          <div className={styles.title}>#WeCompensate community</div>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <p>{paragraphThree}</p>
        </div>
        <div className={styles.auditoryImage} />
      </div>
      <img className={styles.socialMediaImage} src={socialMediaImage} alt="" />
      <div className={styles.weCompensateWrapper}>
        <div className={styles.twitterTextWrapper}>
          <div>When people lead the way, companies, policies and systemic change will follow.</div>
          <div>#WeCompensate</div>
        </div>
        <div className={styles.tweet}>
          <blockquote className={`twitter-tweet`}>
            <p lang="en" dir="ltr">Self-destructing screen shot files.</p>
            &mdash; Bored Elon Musk (@BoredElonMusk)
            <a href="https://twitter.com/BoredElonMusk/status/1184564944559206400?ref_src=twsrc%5Etfw">October 16, 2019</a>
          </blockquote>
        </div>
      </div>
    </div>
  );
}

export default Community;
