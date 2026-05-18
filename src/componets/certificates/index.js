import { Image } from 'antd';
import React from 'react';
import ContentHeading from '../../commoncomponents/heading';
import styles from "./certificate.module.scss"
import FadeInSection from '../fadeinsection';

const CertificateSections = () => {
  const certificates = [
    {
      id: 1,
      image: 'images/certificate1.jpg',
      alt: 'Spark Foundation Internship Certificate',
      description: 'Spark Foundation Internship - Successfully completed a 1-month internship and received certification'
    },
    {
      id: 2,
      image: 'images/certificate2.jpg',
      alt: 'freeCodeCamp Responsive Web Design Certificate',
      description: 'freeCodeCamp Responsive Web Design - Completed comprehensive course on responsive web design principles'
    },
    {
      id: 3,
      image: 'images/certificate3.jpg',
      alt: 'UI Hackathon Achievement Certificate',
      description: 'UI Hackathon - Secured 3rd position in UI hackathon organized by New Horizon College of Engineering'
    },
    {
      id: 4,
      image: 'images/certificate4.jpeg',
      alt: 'Mentorship Program Certificate',
      description: 'Mentorship Program - Successfully completed 3 months of structured mentorship under industry mentor'
    },
    {
      id: 5,
      image: 'images/certificate5.jpeg',
      alt: 'NMIT Hackathon Certificate',
      description: 'NMIT Hackathon 2021 - Participated in and received certification from NMIT Hackathon 2021'
    },
    {
      id: 6,
      image: 'images/certificate6.jpeg',
      alt: 'Chhalaang 2.0 Participation Certificate',
      description: 'Chhalaang 2.0 - Participated in Chhalaang 2.0 competition conducted by MetaMorph'
    }
  ];

  return (
    <div className={styles.wrapper}>
      <ContentHeading 
        bgText={"My Achievements"}
        title={"Certificates & Rewards"}
        info={<p>I have earned multiple certifications and participated in various competitions, demonstrating my commitment to continuous learning and professional development in web development.</p>}
        allignment={"center"}
      />
      <div className={styles.certificateWrapper}>
        <div className={styles.certificateItems}>
          {certificates.map((cert) => (
            <FadeInSection key={cert.id}>
              <div className={styles.certificateItem} role="article">
                <Image
                  width={250}
                  height={180}
                  src={cert.image}
                  alt={cert.alt}
                  preview={{
                    mask: 'View Certificate'
                  }}
                  placeholder={
                    <Image
                      preview={false}
                      src={cert.image}
                      width={200}
                      alt={cert.alt}
                    />
                  }
                />
                <div>
                  <p>{cert.description}</p>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CertificateSections