import { Progress } from 'antd'
import React from 'react'
import ContentHeading from '../../commoncomponents/heading'
import styles from './skills.module.scss'
import FadeInSection from '../fadeinsection'

const Skills = () => {
  const skillsData = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 75 },
    { name: 'Express', level: 70 },
    { name: 'SCSS', level: 85 },
    { name: 'Next.js', level: 60 },
    { name: 'MongoDB', level: 40 },
    { name: 'HTML & CSS', level: 75 },
    { name: 'TypeScript', level: 50 },
    { name: 'React Native', level: 50 },
    { name: 'Problem Solving', level: 50 },
  ];

  return (
    <div className={styles.skillsWrapper}>
      <div className={styles.header}>
        <ContentHeading 
          bgText={"Skills"}
          title={"My Skills"}
          info={<p>I bring expertise in modern web technologies and frameworks. Here's a breakdown of my technical proficiencies:</p>}
          allignment={"center"}
        />
      </div>
      <div className={styles.skillsContent}>
        {skillsData.map((skill, index) => (
          <FadeInSection key={skill.name}>
            <div className={styles.skillItem} role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100} aria-label={`${skill.name}: ${skill.level}% proficiency`}>
              <div className={styles.skillHeading}>{skill.name}</div>
              <Progress 
                percent={skill.level} 
                strokeColor={{
                  '0%': '#ff5039',
                  '100%': '#ff6d52',
                }}
                format={percent => `${percent}%`}
              />
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  )
}

export default Skills