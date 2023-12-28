import {  Image } from 'antd';
import React from 'react';
import ContentHeading from '../../commoncomponents/heading';
import styles from "./certificate.module.scss"

const CertificateSections = () => {
  return (
    <div className={styles.wrapper}>
        <ContentHeading 
                bgText={"My Achievements"}
                title={"Certificates & Rewards"}
                info={<p>Hi! , I'm Smitha H E , UI Developer with passion towards 
                creating Web Application <br /> Here some of the details About me:</p>}
                allignment={"center"}
           />
           <div className={styles.certificateWrapper}>
           <div className={styles.certificateItems}>
                <div className={styles.certificateItem}>
                    <Image
                      width={250}
                      height={200}
                      src={`images/certificate1.jpg`}
                      placeholder={
                        <Image
                          preview={false}
                          src="images/certificate1.jpg"
                          width={200}
                        />
                      }
                    />
                    <div>
                        <p>Worked as an intern with Spark Foundation for 1 month and got certified</p>
                    </div>
                </div>
                <div className={styles.certificateItem}>
                    <Image
                        width={250}
                        height={200}
                        src={`images/certificate2.jpg`}
                        placeholder={
                          <Image
                            preview={false}
                            src="images/certificate2.jpg"
                            width={200}
                          />
                        }
                      />
                    <div>
                        <p>Completed a course "reponsive web design" under spark foundation and got certified </p>
                    </div>
                </div>
                <div className={styles.certificateItem}>
                      <Image
                        width={250}
                        height={200}
                        src={`images/certificate3.jpg`}
                        placeholder={
                          <Image
                            preview={false}
                            src="images/certificate3.jpg"
                            width={200}
                          />
                        }
                      />
                   <div>
                   <p>Got certfication for securing 3rd position in UI hackthon organised by 
                        New Horizon College of Enginnering </p>
                   </div>
                </div>
                <div className={styles.certificateItem}>
                      <Image
                        width={250}
                        height={200}
                        src={`images/certificate4.jpeg`}
                        placeholder={
                          <Image
                            preview={false}
                            src="images/certificate4.jpeg"
                            width={200}
                          />
                        }
                      />
                    <div>
                   <p>Got certfication for successfully completing 3 months of
                     mentorship under mentor to go   </p>
                   </div>
                </div>
                <div className={styles.certificateItem}>
                      <Image
                        width={250}
                        height={200}
                        src={`images/certificate5.jpeg`}
                        placeholder={
                          <Image
                            preview={false}
                            src="images/certificate5.jpeg"
                            width={200}
                          />
                        }
                      />
                     <div>
                   <p>Got certfication for participating in NMIT hackthon 2021 conducted by NMIT  </p>
                   </div>
                </div>
           </div>
           </div>
    </div>
  )
}

export default CertificateSections