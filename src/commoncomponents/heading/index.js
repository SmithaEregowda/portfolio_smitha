import React from 'react'
import styles from './heading.module.scss'
const ContentHeading = ({
    bgText,
    title,
    info,
    allignment
}) => {
  return (
    <div className={styles.headingWrapper}>
        <div className={`${styles.backgroundTxt} 
        ${allignment==="center"&&styles.centerdTxt}`}>
          {bgText}
          </div>
              <div className={`${styles.text} 
        ${allignment==="center"&&styles.centerdTxt}`}>{title}</div>
              <div className={`${styles.selfIntro} 
        ${allignment==="center"&&styles.centerdTxt}`}>
                {info}
            </div>
    </div>
  )
}

export default ContentHeading