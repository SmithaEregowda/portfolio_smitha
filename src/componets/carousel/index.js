import { Button } from 'antd';
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './carosel.module.scss'

const CarouselComponent = () => {
  return (
    <Carousel  
    autoPlay={true} 
    showThumbs={false} 
    infiniteLoop={true}
     className={styles.carouselWrapper}
     showArrows={false}
     swipeable={true}
     >
               <div className={styles.carouselContent}>
                    <div className={styles.describeSection}>
                    <div>
                        <div className={styles.smallText}>Hello !</div>
                        <div className={styles.intro}>I'm <span className={styles.name}>Smitha H E</span></div>
                        <div className={styles.job}>A Software Developer</div>
                        <div className={styles.btnActions}>
                          <Button type="primary">Download CV</Button>
                          <Button type="primary">Hire Me</Button>
                        </div>
                    </div>
                    </div>
                    <div className={styles.imageSection}>
                    <img
                    src={"images/resumepic.png"} 
                    width={200}
                    height={200}
                    alt='resumepic'/>
                    </div>
               </div>
               <div className={styles.carouselContent}>
                    <div className={styles.describeSection}>
                        <div>
                        <div className={styles.intro}>
                            <span className={styles.name}>
                                UI Developer</span> with a <br />
                               <div className={styles.subText}> Passion for Creating Beautiful Websites</div>
                        </div>
                        <div className={styles.btnActions}>
                          <Button type="primary">Download CV</Button>
                          <Button type="primary">Hire Me</Button>
                        </div>
                        </div>
                    </div>
                    <div className={styles.imageSection}>
                    <img
                    src={"images/working.jpeg"} 
                    width={200}
                    alt='resumepic'/>
                    </div>
               </div>
            </Carousel>
  )
}

export default CarouselComponent