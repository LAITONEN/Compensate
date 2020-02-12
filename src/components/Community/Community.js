import React from 'react';
import styles from './Community.module.scss'

const paragraphOne = 'On April 24th 2019, Compensate was introduced to the world at the University of Helsinki. The Carbon negativity now! ​event brought together scientists, students, entrepreneurs, activists and otherindividuals interested in fighting climate change andwas streamed online.'
const paragraphTwo = 'Compensate made headlines in Helsingin Sanomat, Yle web and broadcast news, MTV3 broadcast shows, Kauppalehti, and various other national media outlets. The convenient and efficient Compensate tool was met with high enthusiasm and Compensate became a viral phenomenon: thousands of Finns measured their carbon footprints, social media filled with footprint results and businesses joined in the discussion eager to join the movement.'
const paragraphThree = 'The #WeCompensate family was born.'

const Community = (props) => {
  return (
    <div className={styles.wrapper}>
      <div>
        <div>
          <div>Compensate can be integrated into all kinds of products and services.</div>
          <div>With a recognizable trademark, we are creating a movement that scales globally.</div>
        </div>
        <img src={'../../assets/auditory.jpg'} alt="" />
      </div>
      <img src={'../../assets/media-social.png'} alt="" />
      <div>
        <div>
          <div>When people lead the way, companies, policies and systemic change will follow.</div>
          <div>#WeCompensate</div>
        </div>
        <img src={'../../assets/twitter-post.png'} alt="" />
      </div>
    </div>
  );
}

export default Community;
