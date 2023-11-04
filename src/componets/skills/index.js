import { Progress } from 'antd'
import React from 'react'
import ContentHeading from '../../commoncomponents/heading'
import styles from './skills.module.scss'
const Skills = () => {
  return (
    <div className={styles.skillsWrapper}>
        <div className={styles.header}>
        <ContentHeading 
              bgText={"Skills"}
              title={"My Skills"}
              info={<p>Hi! , I'm Smitha H E , UI Developer with passion towards 
              creating Web Application <br /> Here some of the details About me:</p>}
              allignment={"center"}
           />
        </div>
        <div className={styles.skillsContent}>
            <div className={styles.skillItem}>
                <div className={styles.skillHeading}>React</div>
                <div><Progress percent={85} /></div>
            </div>
            <div className={styles.skillItem}>
                <div className={styles.skillHeading}>Node Js</div>
                <div><Progress percent={60} /></div>
            </div>
            <div className={styles.skillItem}>
                <div className={styles.skillHeading}>next js</div>
                <div><Progress percent={60} /></div>
            </div>
            <div className={styles.skillItem}>
                <div className={styles.skillHeading}>Css</div>
                <div><Progress percent={85} /></div>
            </div>
            <div className={styles.skillItem}>
                <div className={styles.skillHeading}>React Native</div>
                <div><Progress percent={50} /></div>
            </div>
            <div className={styles.skillItem}>
                <div className={styles.skillHeading}>Sass</div>
                <div><Progress percent={85} /></div>
            </div>
            <div className={styles.skillItem}>
                <div className={styles.skillHeading}>javascript</div>
                <div><Progress percent={80} /></div>
            </div>
            <div className={styles.skillItem}>
                <div className={styles.skillHeading}>mango db</div>
                <div><Progress percent={40} /></div>
            </div>
           </div>
    </div>
  )
}

export default Skills