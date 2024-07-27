import { Progress } from 'antd'
import React from 'react'
import ContentHeading from '../../commoncomponents/heading'
import styles from './skills.module.scss'
import FadeInSection from '../fadeinsection'
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
                <div className={styles.skillHeading}>javascript</div>
                <FadeInSection><Progress percent={90} /></FadeInSection>
            </div>
            <div className={styles.skillItem}>
                <div className={styles.skillHeading}>React</div>
                <FadeInSection><Progress percent={90} /></FadeInSection>
            </div>
            <div className={styles.skillItem}>
                <div className={styles.skillHeading}>Node Js</div>
                <FadeInSection><Progress percent={75} /></FadeInSection>
            </div>
            <div className={styles.skillItem}>
                <div className={styles.skillHeading}>Express</div>
                <FadeInSection><Progress percent={70} /></FadeInSection>
            </div>
            <div className={styles.skillItem}>
                <div className={styles.skillHeading}>SCSS</div>
                <FadeInSection><Progress percent={85} /></FadeInSection>
            </div>
            <div className={styles.skillItem}>
                <div className={styles.skillHeading}>next js</div>
                <FadeInSection><Progress percent={60} /></FadeInSection>
            </div>
            <div className={styles.skillItem}>
                <div className={styles.skillHeading}>mango db</div>
                <FadeInSection><Progress percent={40} /></FadeInSection>
            </div>
            <div className={styles.skillItem}>
                <div className={styles.skillHeading}>HTML&CSS</div>
                <FadeInSection><Progress percent={75} /></FadeInSection>
            </div>
            <div className={styles.skillItem}>
                <div className={styles.skillHeading}>TypeScript</div>
                <FadeInSection><Progress percent={50} /></FadeInSection>
            </div>
            <div className={styles.skillItem}>
                <div className={styles.skillHeading}>React Native</div>
                <FadeInSection><Progress percent={50} /></FadeInSection>
            </div>
            <div className={styles.skillItem}>
                <div className={styles.skillHeading}>Problem Solving</div>
                <FadeInSection><Progress percent={50} /></FadeInSection>
            </div>
            
           </div>
    </div>
  )
}

export default Skills