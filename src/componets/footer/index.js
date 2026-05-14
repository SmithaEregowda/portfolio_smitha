import React from 'react'
import styles from './footer.module.scss'
import { CaretRightFilled, EnvironmentFilled, MailFilled, PhoneFilled } from "@ant-design/icons"

const FooterSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footerWrapper} role="contentinfo">
      <div className={styles.footerItems}>
        <div className={styles.footerItem}>
          <div className={styles.label}>About</div>
          <div className={styles.content}>
            <p>
              I'm a passionate MERN stack developer and UI designer with a focus on creating beautiful, 
              responsive, and user-friendly web applications. Always eager to learn and take on new challenges.
            </p>
          </div>
        </div>

        <div className={styles.footerItem}>
          <div className={styles.label}>Quick Links</div>
          <div className={styles.content}>
            <div className={styles.links} onClick={() => scrollToSection('home')} role="button" tabIndex="0" aria-label="Go to Home section">
              <CaretRightFilled /> Home
            </div>
            <div className={styles.links} onClick={() => scrollToSection('about')} role="button" tabIndex="0" aria-label="Go to About section">
              <CaretRightFilled /> About
            </div>
            <div className={styles.links} onClick={() => scrollToSection('skills')} role="button" tabIndex="0" aria-label="Go to Skills section">
              <CaretRightFilled /> Skills
            </div>
            <div className={styles.links} onClick={() => scrollToSection('project')} role="button" tabIndex="0" aria-label="Go to Projects section">
              <CaretRightFilled /> Projects
            </div>
            <div className={styles.links} onClick={() => scrollToSection('certificate')} role="button" tabIndex="0" aria-label="Go to Certificates section">
              <CaretRightFilled /> Certificates
            </div>
            <div className={styles.links} onClick={() => scrollToSection('contact')} role="button" tabIndex="0" aria-label="Go to Contact section">
              <CaretRightFilled /> Contact
            </div>
          </div>
        </div>

        <div className={styles.footerItem}>
          <div className={styles.label}>Services</div>
          <div className={styles.content}>
            <div className={styles.links}>
              <CaretRightFilled /> Frontend Development
            </div>
            <div className={styles.links}>
              <CaretRightFilled /> Full Stack Development
            </div>
            <div className={styles.links}>
              <CaretRightFilled /> UI/UX Design
            </div>
            <div className={styles.links}>
              <CaretRightFilled /> Responsive Web Design
            </div>
          </div>
        </div>

        <div className={styles.footerItem}>
          <div className={styles.label}>Contact Info</div>
          <div className={styles.content}>
            <div>
              <EnvironmentFilled /> Mandya, Karnataka, India
            </div>
            <div>
              <MailFilled /> 
              <a href="mailto:smithaeregowda@gmail.com">smithaeregowda@gmail.com</a>
            </div>
            <div>
              <PhoneFilled /> +91 7892433070
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: 'var(--space-8)', paddingTop: 'var(--space-6)', borderTop: '1px solid rgba(255, 80, 57, 0.1)' }}>
        <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--text-secondary)' }}>
          © {currentYear} Smitha H E. All rights reserved. Built with React, Node.js & ❤️
        </p>
      </div>
    </footer>
  )
}

export default FooterSection