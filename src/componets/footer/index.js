import React from 'react'
import styles from './footer.module.scss'
import {CaretRightFilled,EnvironmentFilled,MailFilled,PhoneFilled} from "@ant-design/icons"
const FooterSection = () => {
  return (
    <div className={styles.footerWrapper}>
        <div className={styles.footerItems}>
            <div className={styles.footerItem}>
                <div className={styles.label}>About</div>
                <div className={styles.content}>
                    Finally !!! , This is all
                    about my personal career and 
                    if you wamt to hire me ,
                    please reach out to me
                </div>
            </div>
            <div className={styles.footerItem}>
                <div className={styles.label}>links</div>
                <div className={styles.content}>
                   <div className={styles.links}><CaretRightFilled  style={{ color: "#ff5039" }}/> About</div>
                   <div className={styles.links}><CaretRightFilled style={{ color: "#ff5039" }} /> services</div>
                   <div className={styles.links}><CaretRightFilled style={{ color: "#ff5039" }}/> contact me</div>
                   <div className={styles.links}><CaretRightFilled style={{ color: "#ff5039" }}/> Achievements</div>
                   <div className={styles.links}><CaretRightFilled style={{ color: "#ff5039" }}/> Projects</div>
                </div>
            </div>
            <div className={styles.footerItem}>
                <div className={styles.label}>Services</div>
                <div className={styles.content}>
                <div className={styles.links}><CaretRightFilled  style={{ color: "#ff5039" }}/>UI Development</div>
                </div>
            </div>
            <div className={styles.footerItem}>
                <div className={styles.label}>Have a Questions?</div>
                <div className={styles.content}>
                   <div><EnvironmentFilled style={{ color: "#ff5039" }}/> Mandya,Karnataka,India</div>
                   <div><MailFilled style={{ color: "#ff5039" }}/> smithaeregowda@gmail.com</div>
                   <div><PhoneFilled style={{color: "#ff5039" }} /> 7892433070</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FooterSection