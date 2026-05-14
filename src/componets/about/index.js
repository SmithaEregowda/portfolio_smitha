import React from 'react'
import styles from './about.module.scss'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons'
import ContentHeading from '../../commoncomponents/heading'
import FadeInSection from '../fadeinsection'
import { downloadcv } from '../../commoncomponents/utils/downloadcv'

const AboutSection = () => {
  const personalInfo = [
    { label: 'Name', value: 'Smitha H E' },
    { label: 'DOB', value: '30th December 1999' },
    { label: 'Location', value: 'Mandya, Karnataka, India' },
    { label: 'Postal Code', value: '571424' },
    { label: 'Email', value: 'smithaeregowda@gmail.com' },
    { label: 'Phone', value: '+91 7892433070' }
  ];

  return (
    <div className={styles.aboutmeWrapper}>
      <div className={styles.aboutLayout}>
        <div className={styles.infosection}>
          <ContentHeading 
            bgText={"About"}
            title={"About Me"}
            info={<p>I'm a passionate full-stack web developer with expertise in modern JavaScript frameworks, responsive design, and database management. Let me share some details about myself.</p>}
          />
          <div className={styles.personalData}>
            {personalInfo.map((info) => (
              <FadeInSection key={info.label}>
                <div className={styles.row}>
                  <div className={styles.infoHead}>{info.label}:</div>
                  <div className={styles.data}>{info.value}</div>
                </div>
              </FadeInSection>
            ))}
            <FadeInSection>
              <div className={styles.cvBtn}>
                <Button 
                  type='primary' 
                  shape='round' 
                  size="large"
                  onClick={downloadcv}
                  icon={<DownloadOutlined />}
                  aria-label="Download my CV"
                >
                  Download CV
                </Button>
              </div>
            </FadeInSection>
          </div>
        </div>

        {/* <div className={styles.imageSection}>
          <img
            src="images/resumepic.png" 
            width={300}
            height={300}
            alt='Professional portrait of Smitha H E'
            loading="lazy"
          />
        </div> */}
      </div>
    </div>
  )
}

export default AboutSection