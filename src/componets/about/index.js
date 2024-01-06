import React from 'react'
import styles from './about.module.scss'
import { Button } from 'antd'
import ContentHeading from '../../commoncomponents/heading'
import FadeInSection from '../fadeinsection'
const AboutSection = () => {
  return (
    <div className={styles.aboutmeWrapper}>
        <div className={styles.aboutLayout}>
        <div className={styles.imageSection}>
        <img
            src={"images/resumepic.png"} 
            width={200}
            height={200}
            alt='resumepic'/>
        </div>
        <div className={styles.infosection}>
           <ContentHeading 
              bgText={"About"}
              title={"About Me"}
              info={<p>Hi! , I'm Smitha H E , UI Developer with passion towards 
              creating Web Application <br /> Here some of the details About me:</p>}
           />
            <div className={styles.personalData}>
              <div className={styles.row}>
              <div className={styles.infoHead}>Name:</div>
              <div className={styles.data}>Smitha H E</div>
              </div>
              <div className={styles.row}>
              <div className={styles.infoHead}>Date of Birth:</div>
              <div className={styles.data}>30/12/1999</div>
              </div>
              <div className={styles.row}>
              <div className={styles.infoHead}>Address:</div>
              <div className={styles.data}>Mandya,Karnataka,India</div>
              </div>
              <div className={styles.row}>
              <div className={styles.infoHead}>Pin code:</div>
              <div className={styles.data}>571424</div>
              </div>
              <div className={styles.row}>
              <div className={styles.infoHead}>Email:</div>
              <div className={styles.data}>smithaeregowda@gmail.com</div>
              </div>
              <div className={styles.row}>
              <div className={styles.infoHead}>Phone:</div>
              <div className={styles.data}>7892433070</div>
              </div>
              <FadeInSection>
              <div className={styles.cvBtn}>
                  <Button type='primary' shape='round'>Download CV</Button>
              </div>
              </FadeInSection>
            </div> 
        </div>
        </div>
    </div>
  )
}

export default AboutSection