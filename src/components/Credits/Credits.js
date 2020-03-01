import React from 'react';
import styles from './Credits.module.scss'

const title = 'Design and implementation partners, Compensate and Compensate.com'
const subtitleLeft = 'Service concept and design'
const subtitleRight = 'Implementation and production, Compensate.com'

const LeftColumn = () => (
  <div className={styles.leftColumn}>
    <div className={styles.subtitle}>{subtitleLeft}</div>
    <div className={styles.content}>
      <ul>
        <li><strong>Compensate</strong></li>
        <li>Co-Founder, Chief Communication and Brand Officer: Minna Kaitala</li>
        <li>Founder and CEO: Antero Vartia</li>
        <li>Co-Founder, Head of Legal: Larissa Leppänen</li>
        <li>Content Strategist: Jenna Karas</li>
        <li>Copywriter: Jenna Karas, Taro Korhonen Design Lead: Leandro Correa</li>
        <li>Brand Manager: Anna Pakkala, Tatu Hinttula</li>
      </ul>
      <ul>
        <li><strong>Werklig</strong></li>
        <li>Art Direction: Jan Rudkiewicz, Anssi Kähärä, Jenni Mällinen, Juuso Siltanen</li>
        <li>Motion: Jenni Pasanen</li>
        <li>Account Director: Amanda Rajatora</li>
        <li>Brand Strategist: Janne Kaitala</li>
      </ul>
      <ul>
        <li><strong>Kallan</strong></li>
        <li>Brand UX&UI: Lauri Incrosnatu, Hannu Koho</li>
        <li>Account Director: Tomas Rosenquist</li>
        <li>Service design: Kristiina Sandqvist</li>
      </ul>
      <ul>
        <li><strong>Hellon</strong></li>
        <li>Lotta Julkunen, Jaakko Väänänen</li>
      </ul>
    </div>
  </div>
)

const RightColumn = () => (
  <div className={styles.rightColumn}>
    <div className={styles.subtitle}>{subtitleRight}</div>
    <div className={styles.content}>
      <ul>
        <li><strong>Photography</strong></li>
        <li>KoskiSyväri</li>
        <ul>
          <li>Kim Öhrling, Karoliina Kauhanen</li>
        </ul>
      </ul>
      <ul>
        <li><strong>Animation</strong></li>
        <li>Rakastaja Robert</li>
      </ul>
      <ul>
        <li><strong>Water Glass Film</strong></li>
        <li>SEK</li>
        <ul>
          <li>Creative Director: Suvi Lähde</li>
        </ul>
        <li>Cocoa</li>
        <ul>
          <li>Director: Taito Kawasaki</li>
          <li>Producer: Pauliina Teirikari, Niko Kuurne</li>
        </ul>
      </ul>
      <ul>
        <li><strong>SEO</strong></li>
        <li>Simo Ahava</li>
        <li>Hopkins</li>
        <ul>
          <li>Arttu Raittila</li>
        </ul>
      </ul>
      <ul>
        <li><strong>Technical solution</strong></li>
        <li>Frantic</li>
        <ul>
          <li>Account Director: Miia Honkanen</li>
          <li>Developers: Martti Hyvönen, Ville Harjunen, Panu Ervamaa</li>
          <li>Lasse Kulo, Kami Nasri</li>
          <li>Web analyst: Noora Virta</li>
        </ul>
      </ul>
    </div>
  </div>
)

const Credits = (props) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.title}>{title}</div>
      <div className={styles.contentColumns}>
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
}

export default Credits;
